<?php
// backend/auth/register.php

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

if (!isset($data->username) || !isset($data->email) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields: username, email, password"]);
    exit();
}

$username = trim($data->username);
$email    = trim($data->email);
$password = $data->password;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address"]);
    exit();
}

if (strlen($password) < 6) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Password must be at least 6 characters"]);
    exit();
}

try {
    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $email]);
    if ($stmt->fetch()) {
        http_response_code(409);
        echo json_encode(["status" => "error", "message" => "An account with this email already exists"]);
        exit();
    }

    // Insert new user
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
    $stmt->execute([
        ':username' => $username,
        ':email'    => $email,
        ':password' => $hashedPassword
    ]);

    $userId = (int) $conn->lastInsertId();

    $payload = [
        'sub'      => $userId,
        'username' => $username,
        'email'    => $email,
        'iat'      => time(),
        'exp'      => time() + (24 * 3600) // 24 hours
    ];
    $token = generate_jwt($payload);

    http_response_code(201);
    echo json_encode([
        "status"  => "success",
        "message" => "Account created successfully",
        "token"   => $token,
        "user"    => ["id" => $userId, "username" => $username, "email" => $email]
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Registration failed. Please try again."]);
}
?>
