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

try {
    $stmt = $conn->prepare("UPDATE application_documents SET status = :status WHERE id = :id");
    $stmt->execute([':id' => $data->doc_id, ':status' => $data->status]);

    echo json_encode(["status" => "success", "message" => "Document status updated to " . $data->status]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
