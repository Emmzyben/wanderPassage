<?php
header("Content-Type: application/json");

require_once '../../config/db.php';

if (!isset($_GET['blog_id'])) {
    echo json_encode(["status" => "error", "message" => "Missing blog_id"]);
    exit();
}

$blog_id = (int)$_GET['blog_id'];

try {
    $stmt = $conn->prepare("SELECT * FROM blog_comments WHERE blog_id = ? AND status = 'approved' ORDER BY created_at DESC");
    $stmt->execute([$blog_id]);
    $comments = $stmt->fetchAll();

    echo json_encode(["status" => "success", "comments" => $comments]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => "Failed to fetch comments: " . $e->getMessage()]);
}
?>
