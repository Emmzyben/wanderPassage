<?php
// backend/api/admin/update_application_status.php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../utils/auth_helper.php';

header("Content-Type: application/json");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$token = get_bearer_token();
if (!$token) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Unauthorized"]);
    exit();
}

$payload = verify_jwt($token);
if (!$payload || $payload->role !== 'admin') {
    http_response_code(403);
    echo json_encode(["status" => "error", "message" => "Forbidden: Admin access only"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'] ?? null;
$status = $data['status'] ?? null;

if (!$id || !$status) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit();
}

// Optional validation of status
$validStatuses = ['document_submission', 'academic_review', 'embassy_filing', 'completed'];
if (!in_array($status, $validStatuses)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid application status"]);
    exit();
}

require_once __DIR__ . '/../../utils/notification_helper.php';

try {
    $stmt = $conn->prepare("UPDATE users SET application_status = :status WHERE id = :id AND role = 'student'");
    if ($stmt->execute([':status' => $status, ':id' => $id])) {
        $statusMessages = [
            'document_submission' => [
                'title' => "Time to upload your documents!",
                'msg' => "Great news! Your application has moved to the Document Submission stage. Head to your dashboard and upload the required files — you're one step closer! 🚀",
            ],
            'academic_review' => [
                'title' => "Your documents are being reviewed!",
                'msg' => "Great news! Your documents have been received and our team is now reviewing your academic profile. Sit tight — we'll keep you posted! 😊",
            ],
            'embassy_filing' => [
                'title' => "We're filing your visa application!",
                'msg' => "Things are moving fast! Your application is now at the Embassy Filing stage. Our team is handling everything — just hold on and we'll update you soon! ✈️",
            ],
            'completed' => [
                'title' => "Congratulations! Your application is complete!",
                'msg' => "Amazing news! Your application has been successfully completed. Thank you for choosing WanderPassage — your journey starts now! 🌍",
            ],
        ];
        $notif = $statusMessages[$status] ?? [
            'title' => "Your application has been updated!",
            'msg' => 'Your application status has changed. Log in to your dashboard to see the latest update.',
        ];

        create_notification($id, $notif['title'], $notif['msg'], "success");

        echo json_encode(["status" => "success", "message" => "Status updated successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update status"]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>