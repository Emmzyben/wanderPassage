<?php
// backend/auth/register.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/email_helper.php';

// Header management moved to backend/utils/cors.php (via db.php)

// Allow Cross-Origin Requests
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
    $verificationToken = bin2hex(random_bytes(32)); 
    
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, verification_token, is_verified) VALUES (:username, :email, :password, :token, 0)");
    $stmt->execute([
        ':username' => $username,
        ':email'    => $email,
        ':password' => $hashedPassword,
        ':token'    => $verificationToken
    ]);

    $userId = (int) $conn->lastInsertId();

    // Verification link
    $baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
    $verificationLink = $baseUrl . "/backend/verify_email.php?token=" . $verificationToken;

    // Send the email
    $subject = "Verify Your Account - WanderPassage";
    $message = "Hello $username,\n\nWelcome to WanderPassage! Please verify your email by clicking the link below:\n\n$verificationLink\n\nIf you did not create an account, please ignore this email.";

    $emailSent = send_email($email, $subject, $message);

    http_response_code(201);
    echo json_encode([
        "status"  => "success",
        "message" => "Account created successfully. Please check your email ($email) to verify your account before logging in.",
        "email_status" => $emailSent ? "sent" : "failed"
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Registration failed. Please try again. " . $e->getMessage()]);
}
?>
