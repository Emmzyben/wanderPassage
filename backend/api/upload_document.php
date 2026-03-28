<?php
// backend/api/upload_document.php

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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "POST Method Required"]);
    exit();
}

$userId = $payload->sub;
$docKey = $_POST['doc_key'] ?? '';

if (!$docKey || !isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing doc_key or file"]);
    exit();
}

$file = $_FILES['file'];
$uploadDir = __DIR__ . '/../../uploads/documents/' . $userId . '/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// Security: Use unique file name
$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
$safeName  = $docKey . '_' . time() . '.' . $extension;
$destPath  = $uploadDir . $safeName;

require_once __DIR__ . '/../utils/notification_helper.php';

if (move_uploaded_file($file['tmp_name'], $destPath)) {
    try {
        // ... (existing insert/update logic)
        $stmt = $conn->prepare("
            INSERT INTO application_documents (user_id, doc_key, file_name, file_path, status)
            VALUES (:user_id, :doc_key, :file_name, :file_path, 'uploaded')
            ON DUPLICATE KEY UPDATE
            file_name = VALUES(file_name),
            file_path = VALUES(file_path),
            status = 'uploaded',
            uploaded_at = CURRENT_TIMESTAMP
        ");
        $stmt->execute([
            ':user_id'   => $userId,
            ':doc_key'   => $docKey,
            ':file_name' => $file['name'],
            ':file_path' => 'uploads/documents/' . $userId . '/' . $safeName
        ]);

        // Notify Admins
        $studentName = $payload->username;
        $docLabel = str_replace('_', ' ', ucfirst($docKey));
        $adminsStmt = $conn->prepare("SELECT id FROM users WHERE role = 'admin'");
        $adminsStmt->execute();
        $admins = $adminsStmt->fetchAll();

        foreach ($admins as $admin) {
            create_notification(
                $admin['id'],
                "New Document Uploaded: $docLabel",
                "Student **$studentName** has uploaded a new document ($docLabel). Please review it in the admin portal.",
                "info"
            );
        }

        // If it's a passport, also use it as the student's avatar
        $avatarPath = null;
        $imageExtensions = ['jpg', 'jpeg', 'png', 'webp'];
        if (strtolower($docKey) === 'passport' && in_array(strtolower($extension), $imageExtensions)) {
            $avatarDir  = __DIR__ . '/../../uploads/avatars/';
            if (!is_dir($avatarDir)) mkdir($avatarDir, 0777, true);
            $avatarName = 'avatar_' . $userId . '_' . time() . '.' . $extension;
            $avatarDest = $avatarDir . $avatarName;
            @copy($destPath, $avatarDest);
            $avatarPath = 'uploads/avatars/' . $avatarName;
            $conn->prepare("UPDATE users SET avatar = :avatar WHERE id = :id")
                 ->execute([':avatar' => $avatarPath, ':id' => $userId]);
        }

        echo json_encode([
            "status"    => "success",
            "message"   => "File uploaded successfully",
            "fileName"  => $file['name'],
            "filePath"  => 'uploads/documents/' . $userId . '/' . $safeName,
            "avatar"    => $avatarPath
        ]);

    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to move uploaded file."]);
}
?>
