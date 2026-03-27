<?php
// backend/auth/update_password.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Unauthorized"]);
    exit();
}

$payload = verify_jwt($token);
if (!$payload) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Token expired or invalid"]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "POST Method Required"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"));
$currentPw = $data->current_password ?? '';
$newPw     = $data->new_password     ?? '';

if (!$currentPw || !$newPw) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Current and new passwords are required"]);
    exit();
}

if (strlen($newPw) < 6) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "New password must be at least 6 characters"]);
    exit();
}

$userId = $payload->sub;

try {
    // 1. Fetch current password hash
    $stmt = $conn->prepare("SELECT password FROM users WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $userId]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($currentPw, $user['password'])) {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Incorrect current password"]);
        exit();
    }

    // 2. Hash and update new password
    $hashedNewPw = password_hash($newPw, PASSWORD_BCRYPT);
    $updStmt = $conn->prepare("UPDATE users SET password = :pw WHERE id = :id");
    $updStmt->execute([':pw' => $hashedNewPw, ':id' => $userId]);

    echo json_encode([
        "status" => "success",
        "message" => "Password updated successfully"
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error occurred"]);
}
?>
