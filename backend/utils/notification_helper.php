<?php
// backend/utils/notification_helper.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/email_helper.php';

/**
 * Creates an in-app notification and sends an email to the user.
 * 
 * @param int $userId The ID of the recipient user.
 * @param string $title The notification title.
 * @param string $message The notification message.
 * @param string $type The type of notification (info, success, warning, danger).
 * @return bool True if notification was created successfully.
 */
function create_notification($userId, $title, $message, $type = 'info') {
    global $conn;

    try {
        // 1. Get user details for the email
        $stmtUser = $conn->prepare("SELECT email, username FROM users WHERE id = :userId LIMIT 1");
        $stmtUser->execute([':userId' => $userId]);
        $user = $stmtUser->fetch();

        if (!$user) return false;

        // 2. Insert into notifications table
        $stmt = $conn->prepare("INSERT INTO notifications (user_id, title, message, type) VALUES (:userId, :title, :message, :type)");
        $stmt->execute([
            ':userId'  => $userId,
            ':title'   => $title,
            ':message' => $message,
            ':type'    => $type
        ]);

        // 3. Send email to the user
        $emailSubject = "Notification: " . $title;
        $emailBody = "Hello " . $user['username'] . ",\n\n" .
                     "You have a new notification on WanderPassage:\n\n" .
                     "Title: " . $title . "\n" .
                     "Message: " . $message . "\n\n" .
                     "Log in to your dashboard to see more details.";
        
        send_email($user['email'], $emailSubject, $emailBody);

        return true;

    } catch (PDOException $e) {
        error_log("❌ Error creating notification: " . $e->getMessage());
        return false;
    }
}
?>
