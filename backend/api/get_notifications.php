<?php
// backend/api/get_notifications.php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Token expired"]); exit();
}

$userId = $payload->sub;

try {
    $stmt = $conn->prepare("SELECT * FROM notifications WHERE user_id = :userId ORDER BY created_at DESC LIMIT 50");
    $stmt->execute([':userId' => $userId]);
    $notifications = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "notifications" => $notifications]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
