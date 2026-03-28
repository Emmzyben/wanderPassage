<?php
// backend/auth/login.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';
require_once __DIR__ . '/../utils/email_helper.php';

header("Content-Type: application/json");

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

if (!isset($data->email) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Email and password are required"]);
    exit();
}

$email    = trim($data->email);
$password = $data->password;

try {
    $stmt = $conn->prepare("SELECT id, username, email, password, role, is_verified, verification_token FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password'])) {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
        exit();
    }

    // Check if account is verified
    if ($user['is_verified'] == 0) {
        $token = $user['verification_token'];
        if (!$token) {
            $token = bin2hex(random_bytes(32));
            $stmtUpdateToken = $conn->prepare("UPDATE users SET verification_token = :token WHERE id = :userId");
            $stmtUpdateToken->execute([':token' => $token, ':userId' => $user['id']]);
        }

        $baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
        $verificationLink = $baseUrl . "/backend/verify_email.php?token=" . $token;
        $username = $user['username'];
        
        $subject = "Verify Your Account - WanderPassage";
        $message = "Hello $username,\n\nYou attempted to log in, but your account is not yet verified. Please verify your email by clicking the link below:\n\n$verificationLink\n\nIf you did not attempt this login, you can safely ignore this email.";
        
        send_email($email, $subject, $message);

        http_response_code(403);
        echo json_encode(["status" => "error", "message" => "Account not verified. A new verification link has been sent to your email ($email)."]);
        exit();
    }

    // Generate JWT for verified user
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
