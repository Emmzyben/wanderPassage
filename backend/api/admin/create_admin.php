<?php
// backend/api/admin/create_admin.php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload || $payload->role !== 'admin') {
    http_response_code(403); echo json_encode(["status" => "error", "message" => "Forbidden: Admin access only"]); exit();
}

$data = json_decode(file_get_contents("php://input"));

if (empty($data->username) || empty($data->email) || empty($data->password)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "All fields are required"]); exit();
}

try {
    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $data->email]);
    if ($stmt->fetch()) {
        http_response_code(400); echo json_encode(["status" => "error", "message" => "Email already registered"]); exit();
    }

    $hashed_pass = password_hash($data->password, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, password, role) VALUES (:u, :e, :p, 'admin')");
    $stmt->execute([
        ':u' => $data->username,
        ':e' => $data->email,
        ':p' => $hashed_pass
    ]);

    echo json_encode(["status" => "success", "message" => "Administrator account created successfully"]);

} catch (PDOException $e) {
    http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
