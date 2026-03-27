<?php
header("Content-Type: application/json");

require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['blog_id'], $data['name'], $data['email'], $data['comment'])) {
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit();
}

$blog_id = (int)$data['blog_id'];
$name = $data['name'];
$email = $data['email'];
$comment = $data['comment'];
$user_id = isset($data['user_id']) ? (int)$data['user_id'] : null;

try {
    $stmt = $conn->prepare("INSERT INTO blog_comments (blog_id, user_id, name, email, comment, status) VALUES (?, ?, ?, ?, ?, 'approved')");
    $stmt->execute([$blog_id, $user_id, $name, $email, $comment]);

    echo json_encode(["status" => "success", "message" => "Comment added successfully"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Failed to add comment: " . $e->getMessage()]);
}
?>
