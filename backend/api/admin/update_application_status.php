<?php
// backend/api/admin/update_application_status.php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../utils/auth_helper.php';

header("Content-Type: application/json");

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
                'title' => "\xF0\x9F\x93\x84 Time to upload your documents!",
                'msg' => "Great news! Your application has moved to the Document Submission stage. Head to your dashboard and upload the required files \xe2\x80\x94 you're one step closer! \xF0\x9F\x9A\x80",
            ],
            'academic_review' => [
                'title' => "\xF0\x9F\x8E\x93 Your documents are being reviewed!",
                'msg' => "Great news! Your documents have been received and our team is now reviewing your academic profile. Sit tight \xe2\x80\x94 we'll keep you posted! \xF0\x9F\x98\x8A",
            ],
            'embassy_filing' => [
                'title' => "\xF0\x9F\x93\x8B We're filing your visa application!",
                'msg' => "Things are moving fast! Your application is now at the Embassy Filing stage. Our team is handling everything \xe2\x80\x94 just hold on and we'll update you soon! \xe2\x9C\x88\xEF\xB8\x8F",
            ],
            'completed' => [
                'title' => "\xF0\x9F\x8E\x89 Congratulations! Your application is complete!",
                'msg' => "Amazing news! Your application has been successfully completed. Thank you for choosing WanderPassage \xe2\x80\x94 your journey starts now! \xF0\x9F\x8C\x8D",
            ],
        ];
        $notif = $statusMessages[$status] ?? [
            'title' => "\xF0\x9F\x94\x94 Your application has been updated!",
            'msg' => 'Your application status has changed. Log in to your dashboard to see the latest update.',
        ];

        create_notification($id, $notif['title'], $notif['msg'], "success");

        echo json_encode(["status" => "success", "message" => "Status updated successfully"]);
    }
    else {
        echo json_encode(["status" => "error", "message" => "Failed to update status"]);
    }
}
catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
