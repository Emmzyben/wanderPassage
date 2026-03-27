<?php
// backend/api/admin/update_application_status.php
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

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'] ?? null;
$status = $data['status'] ?? null;

if (!$id || !$status) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Missing required fields"]); exit();
}

// Optional validation of status
$validStatuses = ['document_submission', 'academic_review', 'embassy_filing', 'completed'];
if (!in_array($status, $validStatuses)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Invalid application status"]); exit();
}

try {
    $stmt = $conn->prepare("UPDATE users SET application_status = :status WHERE id = :id AND role = 'student'");
    if ($stmt->execute([':status' => $status, ':id' => $id])) {
        echo json_encode(["status" => "success", "message" => "Status updated successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update status"]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
