<?php
// backend/api/contact.php
// Public endpoint — no auth required

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/email_helper.php';

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

$name    = trim($data->name    ?? '');
$email   = trim($data->email   ?? '');
$phone   = trim($data->phone   ?? '');
$subject = trim($data->subject ?? '');
$message = trim($data->message ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name, email and message are required"]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address"]);
    exit();
}

try {
    $stmt = $conn->prepare("
        INSERT INTO contact_messages (name, email, phone, subject, message) 
        VALUES (:name, :email, :phone, :subject, :message)
    ");
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':phone'   => $phone,
        ':subject' => $subject,
        ':message' => $message
    ]);

    // Send email notification to info@wanderpassage.com
    $to = "info@wanderpassage.com";
    $emailSubject = "New Contact Message: " . ($subject ?: "From $name");
    $emailMessage = "You have received a new message from the contact form:\n\n" .
                "Name: $name\n" .
                "Email: $email\n" .
                "Phone: " . ($phone ?: "Not provided") . "\n" .
                "Subject: " . ($subject ?: "No subject") . "\n\n" .
                "Message:\n$message\n\n" .
                "This message has been saved in the database.";
    
    send_email($to, $emailSubject, $emailMessage);

    echo json_encode([
        "status"  => "success",
        "message" => "Your message has been received. We'll be in touch shortly!"
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Could not submit message. Please try again."]);
}
?>
