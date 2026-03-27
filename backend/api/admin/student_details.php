<?php
// backend/api/admin/student_details.php
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

$id = $_GET['id'] ?? null;
if (!$id) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "ID is required"]); exit();
}

try {
    // 1. Fetch user profile
    $stmt = $conn->prepare("SELECT id, username, email, role, application_status, created_at FROM users WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $id]);
    $user = $stmt->fetch();

    if (!$user) {
        http_response_code(404); echo json_encode(["status" => "error", "message" => "User not found"]); exit();
    }

    // 2. Fetch documents
    $stmt = $conn->prepare("SELECT id, doc_key, file_name, file_path, status FROM application_documents WHERE user_id = :u_id");
    $stmt->execute([':u_id' => $id]);
    $docs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status"   => "success",
        "student"  => $user,
        "documents" => $docs
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
