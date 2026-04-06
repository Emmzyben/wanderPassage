<?php
// backend/api/admin/promote_admin.php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../utils/auth_helper.php';

header("Content-Type: application/json");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload || $payload->role !== 'admin') {
    http_response_code(403); echo json_encode(["status" => "error", "message" => "Forbidden: Admin access only"]); exit();
}

$data = json_decode(file_get_contents("php://input"));
if (empty($data->user_id)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "User ID is required"]); exit();
}

try {
    $stmt = $conn->prepare("UPDATE users SET role = 'admin' WHERE id = :id");
    $stmt->execute([':id' => $data->user_id]);

    echo json_encode(["status" => "success", "message" => "User has been promoted to administrator"]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
