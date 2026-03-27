<?php
// backend/api/admin/blogs/list_comments.php
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

try {
    $sql = "SELECT c.*, b.title as blog_title 
            FROM blog_comments c 
            JOIN blogs b ON c.blog_id = b.id 
            ORDER BY c.created_at DESC";
    
    $stmt = $conn->query($sql);
    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "comments"  => $comments
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
