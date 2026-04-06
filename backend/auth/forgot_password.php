<?php
// backend/auth/forgot_password.php

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

if (!isset($data->email)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Email is required"]);
    exit();
}

$email = trim($data->email);

try {
    // Check if user exists
    $stmt = $conn->prepare("SELECT id, username, email FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch();

    if (!$user) {
        // Security: Always return success to prevent email enumeration
        echo json_encode([
            "status" => "success",
            "message" => "If an account with that email exists, a password reset link has been sent."
        ]);
        exit();
    }

    // Generate reset token
    $reset_token = bin2hex(random_bytes(32));
    $reset_expires = date('Y-m-d H:i:s', time() + 3600); // 1 hour expiry

    // Store reset token in database
    $stmtUpdate = $conn->prepare("UPDATE users SET reset_token = :token, reset_expires = :expires WHERE id = :userId");
    $stmtUpdate->execute([
        ':token' => $reset_token,
        ':expires' => $reset_expires,
        ':userId' => $user['id']
    ]);

    // Build reset link - point to backend PHP page
    $baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
    $resetLink = $baseUrl . "/backend/auth/reset_password.php?token=" . $reset_token;

    // Send reset email
    $subject = "Reset Your Password - WanderPassage";
    $message = "Hello {$user['username']},\n\n";
    $message .= "We received a request to reset your password. Click the link below to create a new password:\n\n";
    $message .= $resetLink . "\n\n";
    $message .= "This link will expire in 1 hour.\n\n";
    $message .= "If you did not request a password reset, you can safely ignore this email.";

    $emailSent = send_email($email, $subject, $message);

    if (!$emailSent) {
        error_log("Failed to send password reset email to: " . $email);
        // Still return success to user for security
    }

    echo json_encode([
        "status" => "success",
        "message" => "If an account with that email exists, a password reset link has been sent."
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "An error occurred. Please try again later."]);
}
?>
