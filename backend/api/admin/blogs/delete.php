<?php
// backend/api/admin/blogs/delete.php
require_once __DIR__ . '/../../../config/db.php';
require_once __DIR__ . '/../../../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401); echo json_encode(["status" => "error", "message" => "Unauthorized"]); exit();
}

$payload = verify_jwt($token);
if (!$payload || $payload->role !== 'admin') {
    http_response_code(403); echo json_encode(["status" => "error", "message" => "Forbidden: Admin access only"]); exit();
}

$data = json_decode(file_get_contents("php://input"));
if (empty($data->id)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Blog ID is required"]); exit();
}

try {
    $stmt = $conn->prepare("DELETE FROM blogs WHERE id = :id");
    $stmt->execute([':id' => $data->id]);

    echo json_encode(["status" => "success", "message" => "Blog post deleted successfully"]);

} catch (PDOException $e) {
    http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
