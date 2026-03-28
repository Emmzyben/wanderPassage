<?php
// backend/api/admin/update_doc_status.php
require_once __DIR__ . '/../../config/db.php';
require_once __DIR__ . '/../../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload || $payload->role !== 'admin') {
    http_response_code(403); echo json_encode(["status" => "error", "message" => "Forbidden: Admin access only"]); exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); echo json_encode(["status" => "error", "message" => "Method not allowed"]); exit();
}

$data = json_decode(file_get_contents("php://input"));

if (empty($data->doc_id) || empty($data->status)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "doc_id and status are required"]); exit();
}

$valid_statuses = ['pending', 'uploaded', 'verified', 'rejected'];
if (!in_array($data->status, $valid_statuses)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Invalid status"]); exit();
}

require_once __DIR__ . '/../../utils/notification_helper.php';

try {
    // 1. Get the user_id and doc_key for the notification
    $stmtUser = $conn->prepare("SELECT user_id, doc_key FROM application_documents WHERE id = :id LIMIT 1");
    $stmtUser->execute([':id' => $data->doc_id]);
    $doc = $stmtUser->fetch();

    if ($doc) {
        $userId = $doc['user_id'];
        $docKey = str_replace('_', ' ', ucfirst($doc['doc_key']));
        $statusRaw = $data->status;

        $stmt = $conn->prepare("UPDATE application_documents SET status = :status WHERE id = :id");
        $stmt->execute([':id' => $data->doc_id, ':status' => $statusRaw]);

        // 2. Friendly notification based on doc status
        if ($statusRaw === 'verified') {
            $title = "\u2705 Your $docKey document is verified!";
            $msg   = "Woohoo! We\u2019ve just verified your $docKey document. Everything looks great \u2014 keep going, you\u2019re doing amazing! \ud83d\udcaa";
            $type  = 'success';
        } elseif ($statusRaw === 'rejected') {
            $title = "\u26a0\ufe0f Action needed: $docKey document needs attention";
            $msg   = "Heads up! Unfortunately your $docKey document couldn\u2019t be accepted this time. Please log in, check the feedback, and re-upload the correct file. We\u2019re here to help! \ud83d\ude0a";
            $type  = 'danger';
        } else {
            $title = "\ud83d\udcc4 $docKey document update";
            $msg   = "Just a quick update \u2014 your $docKey document status has changed to \u2018" . ucfirst($statusRaw) . "\u2019. Log in to your portal for details.";
            $type  = 'info';
        }

        create_notification($userId, $title, $msg, $type);

        echo json_encode(["status" => "success", "message" => "Document status updated to " . $data->status]);
    } else {
        echo json_encode(["status" => "error", "message" => "Document not found"]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
