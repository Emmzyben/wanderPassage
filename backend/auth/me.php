<?php
// backend/auth/me.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';

header("Content-Type: application/json");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$token = get_bearer_token();

if (!$token) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "No authentication token provided"]);
    exit();
}

$payload = verify_jwt($token);

if (!$payload) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Invalid or expired token. Please log in again."]);
    exit();
}

try {
    $stmt = $conn->prepare("SELECT id, username, email, role, application_status, avatar, created_at FROM users WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $payload->sub]);
    $user = $stmt->fetch();

    if (!$user) {
        http_response_code(404);
        echo json_encode(["status" => "error", "message" => "User not found"]);
        exit();
    }

    echo json_encode([
        "status" => "success",
        "user"   => $user
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Could not fetch user data"]);
}
?>
