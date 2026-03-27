<?php
// backend/api/admin/blogs/update.php
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

// Data comes in via $_POST because we usually use FormData for potential image multipart uploads
$blog_id = $_POST['id'] ?? null;
$title   = $_POST['title'] ?? null;
$slug    = $_POST['slug'] ?? null;
$excerpt = $_POST['excerpt'] ?? null;
$content = $_POST['content'] ?? null;
$status  = $_POST['status'] ?? null;

if (!$blog_id) {
    http_response_code(400); echo json_encode(["status" => "error", "message" => "Blog ID is required"]); exit();
}

try {
    // Check if blog exists
    $stmt = $conn->prepare("SELECT id, image_path FROM blogs WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $blog_id]);
    $blog = $stmt->fetch();
    
    if (!$blog) {
        http_response_code(404); echo json_encode(["status" => "error", "message" => "Blog post not found"]); exit();
    }

    // Handle new image upload
    $new_image_path = $blog['image_path'];
    if (isset($_FILES['image'])) {
        $file = $_FILES['image'];
        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        $allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
        
        if (in_array($ext, $allowed)) {
            $upload_dir = __DIR__ . '/../../../uploads/blogs/';
            if (!is_dir($upload_dir)) mkdir($upload_dir, 0777, true);
            
            $file_name = uniqid('blog_') . '.' . $ext;
            if (move_uploaded_file($file['tmp_name'], $upload_dir . $file_name)) {
                $new_image_path = 'uploads/blogs/' . $file_name;
            }
        }
    }

    // Build query dynamically
    $sql = "UPDATE blogs SET ";
    $params = [':id' => $blog_id];
    
    if ($title !== null) { $sql .= "title = :t, "; $params[':t'] = $title; }
    if ($slug !== null) { $sql .= "slug = :s, "; $params[':s'] = $slug; }
    if ($excerpt !== null) { $sql .= "excerpt = :e, "; $params[':e'] = $excerpt; }
    if ($content !== null) { $sql .= "content = :c, "; $params[':c'] = $content; }
    if ($status !== null) { $sql .= "status = :st, "; $params[':st'] = $status; }
    $sql .= "image_path = :img "; // Always update the path even if it's old
    $params[':img'] = $new_image_path;

    $sql .= " WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->execute($params);

    echo json_encode(["status" => "success", "message" => "Blog post updated successfully"]);

} catch (PDOException $e) {
    http_response_code(500); echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
