<?php
// backend/auth/reset_password.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/email_helper.php';

$token = $_GET['token'] ?? null;
$message = "";
$status = ""; // success, error, pending
$user_id = null;

if (!$token) {
    $status = "error";
    $message = "Invalid request. Missing reset token.";
} else {
    try {
        // Find user with the reset token
        $stmt = $conn->prepare("SELECT id, username, email, reset_expires FROM users WHERE reset_token = :token LIMIT 1");
        $stmt->execute([':token' => $token]);
        $user = $stmt->fetch();

        if (!$user) {
            $status = "error";
            $message = "The password reset link is invalid or has expired.";
        } elseif (strtotime($user['reset_expires']) < time()) {
            $status = "error";
            $message = "The password reset link has expired. Please request a new password reset.";
        } else {
            $status = "pending";
            $user_id = $user['id'];
            $username = $user['username'];
            $user_email = $user['email'];
        }

        // Handle POST password reset
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['reset']) && $status === "pending") {
            $new_password = $_POST['new_password'] ?? "";
            $confirm_password = $_POST['confirm_password'] ?? "";

            if (strlen($new_password) < 8) {
                $message = "Password must be at least 8 characters.";
            } elseif ($new_password !== $confirm_password) {
                $message = "Passwords do not match.";
            } else {
                // Hash and update password
                $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);
                $stmtUpdate = $conn->prepare("UPDATE users SET password = :password, reset_token = NULL, reset_expires = NULL WHERE id = :userId");
                $stmtUpdate->execute([
                    ':password' => $hashed_password,
                    ':userId' => $user_id
                ]);

                // Send confirmation email
                $subject = "Your Password Has Been Reset - WanderPassage";
                $email_message = "Hello $username,\n\n";
                $email_message .= "Your password has been successfully reset.\n\n";
                $email_message .= "If you did not make this change, please contact us immediately.\n\n";
                $email_message .= "Best regards,\nWanderPassage Team";

                send_email($user_email, $subject, $email_message);

                $status = "success";
                $message = "Your password has been reset successfully. You can now log in with your new password.";
            }
        }

    } catch (PDOException $e) {
        $status = "error";
        $message = "An error occurred. Please try again later.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password - WanderPassage</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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
        .reset-card {
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
        
        .form-group {
            margin-bottom: 1.5rem;
            text-align: left;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #374151;
            font-weight: 500;
        }
        .form-group input {
            width: 100%;
            padding: 0.875rem;
            border: 2px solid #e2e8f0;
            border-radius: 0.75rem;
            font-size: 1rem;
            transition: border-color 0.2s;
            box-sizing: border-box;
        }
        .form-group input:focus {
            outline: none;
            border-color: #2563eb;
        }
        
        .hint {
            font-size: 0.875rem;
            color: #64748b;
            margin-top: 0.5rem;
        }
        
        .error-msg {
            background: #fef2f2;
            color: #dc2626;
            padding: 0.75rem;
            border-radius: 0.5rem;
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }
        
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
        .btn-outline { border: 2px solid #e2e8f0; color: #1e3a8a; background: transparent; margin-top: 1rem; }
        .btn-outline:hover { background: #f1f5f9; }
    </style>
</head>
<body>

<div class="reset-card">
    <?php if ($status === "pending"): ?>
        <div class="icon-circle pending">
            <i class="fa-solid fa-key fa-3x"></i>
        </div>
        <h1>Create New Password</h1>
        <p>Enter your new password below. Make sure it's at least 8 characters long.</p>
        
        <?php if (!empty($message)): ?>
            <div class="error-msg"><?php echo $message; ?></div>
        <?php endif; ?>
        
        <form method="POST">
            <div class="form-group">
                <label for="new_password">
                    <i class="fa-solid fa-lock"></i> New Password
                </label>
                <input type="password" id="new_password" name="new_password" placeholder="Create new password" required>
            </div>
            
            <div class="form-group">
                <label for="confirm_password">
                    <i class="fa-solid fa-lock"></i> Confirm Password
                </label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm new password" required>
            </div>
            
            <p class="hint"><i class="fa-solid fa-shield-halved"></i> Use at least 8 characters with a mix of letters, numbers & symbols.</p>
            
            <button type="submit" name="reset" value="1" class="btn btn-primary" style="margin-top: 1.5rem;">
                <i class="fa-solid fa-key"></i> Reset Password
            </button>
        </form>
        
    <?php elseif ($status === "success"): ?>
        <div class="icon-circle success">
            <i class="fa-solid fa-circle-check fa-4x"></i>
        </div>
        <h1>Password Reset Complete!</h1>
        <p><?php echo $message; ?></p>
        <a href="/student-login" class="btn btn-primary">Continue to Login</a>
        
    <?php else: ?>
        <div class="icon-circle error">
            <i class="fa-solid fa-circle-xmark fa-4x"></i>
        </div>
        <h1>Something Went Wrong</h1>
        <p><?php echo $message; ?></p>
        <a href="/forgot-password" class="btn btn-outline">Request New Reset Link</a>
    <?php endif; ?>
</div>

</body>
</html>
