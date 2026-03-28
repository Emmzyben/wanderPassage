<?php
// backend/verify_email.php

require_once __DIR__ . '/config/db.php';

header("Content-Type: text/html; charset=UTF-8");

$token = $_GET['token'] ?? null;
$message = "";
$status = ""; // success, error, pending
$user_id = null;

if (!$token) {
    $status = "error";
    $message = "Invalid request. Missing verification token.";
} else {
    try {
        // Find the user with this token
        $stmt = $conn->prepare("SELECT id, is_verified FROM users WHERE verification_token = :token LIMIT 1");
        $stmt->execute([':token' => $token]);
        $user = $stmt->fetch();

        if (!$user) {
            $status = "error";
            $message = "The verification link is invalid or has expired.";
        } elseif ($user['is_verified'] == 1) {
            $status = "success";
            $message = "Your account is already verified. You can now log in.";
        } else {
            $status = "pending";
            $user_id = $user['id'];
        }

        // Handle POST verification
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['verify']) && $status === "pending") {
            $stmt = $conn->prepare("UPDATE users SET is_verified = 1, verification_token = NULL WHERE id = :userId");
            $stmt->execute([':userId' => $user_id]);
            $status = "success";
            $message = "Verification successful! You can now access your dashboard.";
        }

    } catch (PDOException $e) {
        $status = "error";
        $message = "An error occurred during verification. Please try again later.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Verification - WanderPassage</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Bootstrap CSS (Optional for layout) -->
    <style>
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background-color: #f8fafc;
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .verification-card {
            background: white;
            padding: 3rem;
            border-radius: 1.5rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 90%;
            text-align: center;
        }
        .icon-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }
        .icon-circle.pending { background: #eff6ff; color: #2563eb; }
        .icon-circle.success { background: #f0fdf4; color: #16a34a; }
        .icon-circle.error { background: #fef2f2; color: #dc2626; }
        
        h1 { color: #1e3a8a; margin-bottom: 1rem; font-size: 1.5rem; }
        p { color: #64748b; margin-bottom: 2rem; line-height: 1.6; }
        
        .btn {
            display: block;
            width: 100%;
            padding: 1rem;
            border-radius: 0.75rem;
            border: none;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            text-decoration: none;
        }
        .btn-primary { background: #2563eb; color: white; }
        .btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); }
        .btn-outline { border: 2px solid #e2e8f0; color: #1e3a8a; background: transparent; }
        .btn-outline:hover { background: #f1f5f9; }
    </style>
</head>
<body>

<div class="verification-card">
    <?php if ($status === "pending"): ?>
        <div class="icon-circle pending">
            <i class="fa-solid fa-user-check fa-3x"></i>
        </div>
        <h1>Finish Your Account Setup</h1>
        <p>You're almost there! Click the button below to verify your email and activate your WanderPassage account.</p>
        <form method="POST">
            <button type="submit" name="verify" value="1" class="btn btn-primary">
                Verify My Account
            </button>
        </form>
        
    <?php elseif ($status === "success"): ?>
        <div class="icon-circle success">
            <i class="fa-solid fa-circle-check fa-4x"></i>
        </div>
        <h1>All Set!</h1>
        <p><?php echo $message; ?></p>
        <a href="/student-login" class="btn btn-primary">Continue to Login</a>
        
    <?php else: ?>
        <div class="icon-circle error">
            <i class="fa-solid fa-circle-xmark fa-4x"></i>
        </div>
        <h1>Something Went Wrong</h1>
        <p><?php echo $message; ?></p>
        <a href="/student-login" class="btn btn-outline">Back to Registration</a>
    <?php endif; ?>
</div>

</body>
</html>
