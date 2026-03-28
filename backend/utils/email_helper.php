<?php
// backend/utils/email_helper.php

/**
 * Sends an email using the Connecta external API.
 * 
 * @param string $toEmail The recipient's email address.
 * @param string $subject The email subject.
 * @param string $message The email message body.
 * @return bool True if the email was sent successfully, false otherwise.
 */
function send_email($toEmail, $subject, $message) {
    try {
        $url = "https://connecta.uk/send_email.php";
        
        $data = [
            'email'   => $toEmail,
            'subject' => $subject,
            'message' => $message
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json'
        ]);

        $response = curl_exec($ch);
        
        if (curl_errno($ch)) {
            error_log("🌐 Network error while sending email: " . curl_error($ch));
            curl_close($ch);
            return false;
        }

        curl_close($ch);
        $result = json_decode($response, true);

        if (isset($result['status']) && $result['status'] === "success") {
            return true;
        } else {
            error_log("❌ Failed to send email: " . ($result['message'] ?? 'Unknown error'));
            return false;
        }
    } catch (Exception $e) {
        error_log("🌐 Error while sending email: " . $e->getMessage());
        return false;
    }
}
?>
