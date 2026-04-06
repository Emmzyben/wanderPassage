<?php
// backend/api/mark_notification_read.php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';

header("Content-Type: application/json");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Token invalid"]); exit();
}

$userId = $payload->sub;
$data   = json_decode(file_get_contents("php://input"), true);
$notifId = $data['id'] ?? null;

try {
    if ($notifId) {
        // Mark single notification as read (must belong to the user)
        $stmt = $conn->prepare("UPDATE notifications SET is_read = 1 WHERE id = :id AND user_id = :userId");
        $stmt->execute([':id' => $notifId, ':userId' => $userId]);
    } else {
        // Mark ALL notifications as read for this user
        $stmt = $conn->prepare("UPDATE notifications SET is_read = 1 WHERE user_id = :userId");
        $stmt->execute([':userId' => $userId]);
    }

    echo json_encode(["status" => "success", "message" => "Marked as read"]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
