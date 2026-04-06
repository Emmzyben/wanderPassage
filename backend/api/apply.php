<?php
// backend/api/apply.php

require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../utils/email_helper.php';

// Header management moved to backend/utils/cors.php (via db.php)

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// Check for required text fields
$required_fields = ['full_name', 'email', 'phone', 'password', 'address', 'country', 'service_type', 'program_choice'];
foreach ($required_fields as $field) {
    if (empty($_POST[$field])) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Missing required field: $field"]);
        exit();
    }
}

// Check for required files
$required_files = [
    'degree_certificate', 
    'degree_transcript', 
    'cv', 
    'reference_letter', 
    'waec_neco', 
    'intl_passport', 
    'english_test'
];
foreach ($required_files as $file_key) {
    if (empty($_FILES[$file_key]) || $_FILES[$file_key]['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Missing or invalid file: $file_key"]);
        exit();
    }
}

$fullName = trim($_POST['full_name']);
$email    = trim($_POST['email']);
$phone    = trim($_POST['phone']);
$password = $_POST['password'];
$address  = trim($_POST['address']);
$country  = trim($_POST['country']);
$service  = trim($_POST['service_type']);
$program  = trim($_POST['program_choice']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address"]);
    exit();
}

if (strlen($password) < 6) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Password must be at least 6 characters"]);
    exit();
}

try {
    $conn->beginTransaction();

    // 1. Check if user exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([':email' => $email]);
    if ($stmt->fetch()) {
        $conn->rollBack();
        http_response_code(409);
        echo json_encode(["status" => "error", "message" => "An account with this email already exists"]);
        exit();
    }

    // 2. Create User
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
    $verificationToken = bin2hex(random_bytes(32)); 
    
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, phone, address, verification_token, is_verified, application_status) VALUES (:username, :email, :password, :phone, :address, :token, 0, 'academic_review')");
    $stmt->execute([
        ':username' => $fullName,
        ':email'    => $email,
        ':password' => $hashedPassword,
        ':phone'    => $phone,
        ':address'  => $address,
        ':token'    => $verificationToken
    ]);

    $userId = (int) $conn->lastInsertId();

    // 3. Create Visa Application
    $stmt = $conn->prepare("INSERT INTO visa_applications (user_id, country, visa_type, service_type, program_choice, status, submitted_at) VALUES (:user_id, :country, :visa_type, :service_type, :program_choice, 'submitted', CURRENT_TIMESTAMP)");
    $stmt->execute([
        ':user_id'         => $userId,
        ':country'         => $country,
        ':visa_type'       => $service, // Using service as visa_type for backward compatibility if needed
        ':service_type'    => $service,
        ':program_choice'  => $program
    ]);

    // 4. Handle File Uploads
    $uploadParentDir = __DIR__ . '/../../uploads/documents/' . $userId . '/';
    if (!is_dir($uploadParentDir)) {
        mkdir($uploadParentDir, 0777, true);
    }

    foreach ($required_files as $docKey) {
        $file = $_FILES[$docKey];
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $safeName  = $docKey . '_' . time() . '.' . $extension;
        $destPath  = $uploadParentDir . $safeName;
        $dbPath    = 'uploads/documents/' . $userId . '/' . $safeName;

        if (move_uploaded_file($file['tmp_name'], $destPath)) {
            $stmt = $conn->prepare("INSERT INTO application_documents (user_id, doc_key, file_name, file_path, status) VALUES (:user_id, :doc_key, :file_name, :file_path, 'uploaded')");
            $stmt->execute([
                ':user_id'   => $userId,
                ':doc_key'   => $docKey,
                ':file_name' => $file['name'],
                ':file_path' => $dbPath
            ]);

            // If it's a passport, also set as avatar
            if ($docKey === 'intl_passport' && in_array(strtolower($extension), ['jpg', 'jpeg', 'png', 'webp'])) {
                $avatarDir = __DIR__ . '/../../uploads/avatars/';
                if (!is_dir($avatarDir)) mkdir($avatarDir, 0777, true);
                $avatarName = 'avatar_' . $userId . '_' . time() . '.' . $extension;
                $avatarDest = $avatarDir . $avatarName;
                if (@copy($destPath, $avatarDest)) {
                    $avatarPath = 'uploads/avatars/' . $avatarName;
                    $conn->prepare("UPDATE users SET avatar = :avatar WHERE id = :id")->execute([':avatar' => $avatarPath, ':id' => $userId]);
                }
            }
        } else {
            throw new Exception("Failed to upload $docKey");
        }
    }

    $conn->commit();

    // 5. Verification Email
    $baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
    $verificationLink = $baseUrl . "/backend/verify_email.php?token=" . $verificationToken;
    $subject = "Verify Your Account - WanderPassage";
    $message = "Hello $fullName,\n\nWelcome to WanderPassage! Your application has been submitted successfully. Please verify your email by clicking the link below:\n\n$verificationLink\n\nIf you did not create an account, please ignore this email.";
    
    send_email($email, $subject, $message);

    http_response_code(201);
    echo json_encode([
        "status"  => "success",
        "message" => "Application submitted successfully. Please check your email to verify your account."
    ]);

} catch (Exception $e) {
    if ($conn->inTransaction()) {
        $conn->rollBack();
    }
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Application failed: " . $e->getMessage()]);
}
?>
