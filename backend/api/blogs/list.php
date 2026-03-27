<?php
// backend/api/blogs/list.php
require_once __DIR__ . '/../../config/db.php';

header("Content-Type: application/json");

try {
    $stmt = $conn->query("SELECT b.id, b.title, b.slug, b.excerpt, b.image_path, b.created_at, u.username as author_name FROM blogs b JOIN users u ON b.author_id = u.id WHERE b.status = 'published' ORDER BY b.created_at DESC");
    $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["status" => "success", "blogs" => $blogs]);

} catch (PDOException $e) {
    http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
