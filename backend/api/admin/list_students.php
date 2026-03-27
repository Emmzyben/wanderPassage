<?php
// backend/api/admin/list_students.php
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

try {
    // Fetch students and counts of uploaded/verified documents
    $sql = "SELECT u.id, u.username, u.email, u.application_status, u.created_at,
            (SELECT COUNT(*) FROM application_documents d WHERE d.user_id = u.id) as doc_count,
            (SELECT COUNT(*) FROM application_documents d WHERE d.user_id = u.id AND d.status = 'verified') as verified_count
            FROM users u 
            WHERE u.role = 'student'
            ORDER BY u.created_at DESC";
    
    $stmt = $conn->query($sql);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "users"  => $users
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
