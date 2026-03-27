<?php
// backend/auth/login.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';

header("Content-Type: application/json");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Email and password are required"]);
    exit();
}

$email    = trim($data->email);
$password = $data->password;

try {
    $stmt = $conn->prepare("SELECT id, username, email, password, role FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password'])) {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
        exit();
    }

    $payload = [
        'sub'      => $user['id'],
        'username' => $user['username'],
        'email'    => $user['email'],
        'role'     => $user['role'],
        'iat'      => time(),
        'exp'      => time() + (24 * 3600) // 24 hours
    ];
    $token = generate_jwt($payload);

    echo json_encode([
        "status"  => "success",
        "message" => "Login successful",
        "token"   => $token,
        "user"    => [
            "id" => $user['id'], 
            "username" => $user['username'], 
            "email" => $user['email'],
            "role" => $user['role']
        ]
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Login failed. Please try again."]);
}
?>
