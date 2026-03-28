<?php
// backend/api/book_consultation.php
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

if (empty($data->full_name) || empty($data->email) || empty($data->phone) || empty($data->service)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Required fields are missing: full_name, email, phone, service"]);
    exit();
}

try {
    $stmt = $conn->prepare("INSERT INTO consultation_requests (full_name, email, phone, service, preferred_date, preferred_time, message) VALUES (:name, :email, :phone, :service, :date, :time, :message)");
    
    $stmt->execute([
        ':name'    => $data->full_name,
        ':email'   => $data->email,
        ':phone'   => $data->phone,
        ':service' => $data->service,
        ':date'    => $data->preferred_date,
        ':time'    => $data->preferred_time,
        ':message' => $data->message ?? null
    ]);

    // Send email notification to info@wanderpassage.com
    $to = "info@wanderpassage.com";
    $subject = "New Consultation Booking: " . $data->full_name;
    $emailMessage = "You have a new consultation booking request:\n\n" .
                "Name: " . $data->full_name . "\n" .
                "Email: " . $data->email . "\n" .
                "Phone: " . $data->phone . "\n" .
                "Service: " . $data->service . "\n" .
                "Preferred Date: " . $data->preferred_date . "\n" .
                "Preferred Time: " . $data->preferred_time . "\n" .
                "Message: " . ($data->message ?? "No message provided") . "\n\n" .
                "This request has been saved in the database.";
    
    send_email($to, $subject, $emailMessage);

    echo json_encode(["status" => "success", "message" => "Consultation request booked successfully"]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
