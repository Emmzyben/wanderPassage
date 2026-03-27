<?php
// backend/api/admin/blogs/create.php
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

// Check for multipart form data (creation with image)
$title   = $_POST['title'] ?? '';
$slug    = $_POST['slug'] ?? '';
$excerpt = $_POST['excerpt'] ?? '';
$content = $_POST['content'] ?? '';
$status  = $_POST['status'] ?? 'draft';

if (empty($title) || empty($content)) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Title and Content are required"]); exit();
}

// Generate slug if none provided
if (empty($slug)) {
    $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
}

// Handle image upload
$image_path = null;
if (isset($_FILES['image'])) {
    $file = $_FILES['image'];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    
    if (in_array($ext, $allowed)) {
        $upload_dir = __DIR__ . '/../../../uploads/blogs/';
        if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);
        
        $file_name = uniqid('blog_') . '.' . $ext;
        if (move_uploaded_file($file['tmp_name'], $upload_dir . $file_name)) {
            $image_path = 'uploads/blogs/' . $file_name;
        }
    }
}

try {
    // Check if slug exists
    $stmt = $conn->prepare("SELECT id FROM blogs WHERE slug = :slug LIMIT 1");
    $stmt->execute([':slug' => $slug]);
    if ($stmt->fetch()) {
        $slug .= '-' . time(); // Make unique if exists
    }

    $stmt = $conn->prepare("INSERT INTO blogs (author_id, title, slug, excerpt, content, image_path, status) VALUES (:author, :title, :slug, :excerpt, :content, :img, :status)");
    $stmt->execute([
        ':author' => $payload->sub,
        ':title' => $title,
        ':slug' => $slug,
        ':excerpt' => $excerpt,
        ':content' => $content,
        ':img' => $image_path,
        ':status' => $status
    ]);

    echo json_encode(["status" => "success", "message" => "Blog post created successfully", "blog_id" => $conn->lastInsertId()]);

} catch (PDOException $e) {
    http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
