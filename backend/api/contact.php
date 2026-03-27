<?php
// backend/api/contact.php
// Public endpoint — no auth required

require_once __DIR__ . '/../config/db.php';

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

    echo json_encode([
        "status"  => "success",
        "message" => "Your message has been received. We'll be in touch shortly!"
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Could not submit message. Please try again."]);
}
?>
