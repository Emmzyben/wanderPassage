<?php
// backend/api/get_documents.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/auth_helper.php';

header("Content-Type: application/json");

$token = get_bearer_token();
if (!$token) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Unauthorized"]);
    exit();
}

$payload = verify_jwt($token);
if (!$payload) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Token expired or invalid"]);
    exit();
}

$userId = $payload->sub;

try {
    $stmt = $conn->prepare("SELECT doc_key, file_name, status, file_path FROM application_documents WHERE user_id = :user_id");
    $stmt->execute([':user_id' => $userId]);
    $docs = $stmt->fetchAll();

    echo json_encode([
        "status" => "success",
        "documents" => $docs
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
}
?>
