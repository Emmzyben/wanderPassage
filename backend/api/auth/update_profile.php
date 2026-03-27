<?php
// backend/api/auth/update_profile.php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Invalid token"]); exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); echo json_encode(["status" => "error", "message" => "Method not allowed"]); exit();
}

// Handle avatar upload
if (isset($_FILES['avatar'])) {
    $file = $_FILES['avatar'];
    $allowed_ext = ['jpg', 'jpeg', 'png', 'webp'];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed_ext)) {
        http_response_code(400); echo json_encode(["status" => "error", "message" => "Invalid file type"]); exit();
    }

    $upload_dir = __DIR__ . '/../../uploads/avatars/';
    if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);

    $file_name = 'avatar_' . $payload->sub . '_' . time() . '.' . $ext;
    $file_path = 'uploads/avatars/' . $file_name;

    if (move_uploaded_file($file['tmp_name'], $upload_dir . $file_name)) {
        try {
            $stmt = $conn->prepare("UPDATE users SET avatar = :path WHERE id = :id");
            $stmt->execute([':path' => $file_path, ':id' => $payload->sub]);

            echo json_encode(["status" => "success", "message" => "Profile picture updated", "avatar" => $file_path]);
        } catch (PDOException $e) {
            http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
    } else {
        http_response_code(500); echo json_encode(["status" => "error", "message" => "Failed to move uploaded file"]);
    }
    exit();
}

http_response_code(400);
echo json_encode(["status" => "error", "message" => "No file uploaded"]);
?>
