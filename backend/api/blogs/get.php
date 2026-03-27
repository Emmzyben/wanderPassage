<?php
// backend/api/blogs/get.php
require_once __DIR__ . '/../../config/db.php';

header("Content-Type: application/json");

$slug = $_GET['slug'] ?? '';

if (empty($slug)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Slug is required"]); exit();
}

try {
    $stmt = $conn->prepare("SELECT b.*, u.username as author_name FROM blogs b JOIN users u ON b.author_id = u.id WHERE b.slug = :slug AND b.status = 'published' LIMIT 1");
    $stmt->execute([':slug' => $slug]);
    $blog = $stmt->fetch();

    if (!$blog) {
        http_response_code(404); echo json_encode(["status" => "error", "message" => "Blog post not found"]); exit();
    }

    echo json_encode(["status" => "success", "blog" => $blog]);

} catch (PDOException $e) {
    http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
