<?php
// backend/migrate.php
require_once __DIR__ . '/config/db.php';

echo "<h2>Starting Database Migration...</h2>";

try {
    // 1. Add roles to users table
    $conn->exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS role ENUM('student', 'admin') DEFAULT 'student' AFTER password");
    $conn->exec("ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar VARCHAR(255) DEFAULT NULL AFTER role");
    echo "Added 'role' and 'avatar' columns to users table.<br>";

    // 2. Create Consultation Requests
    $conn->exec("CREATE TABLE IF NOT EXISTS consultation_requests (
        id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        full_name      VARCHAR(150) NOT NULL,
        email          VARCHAR(255) NOT NULL,
        phone          VARCHAR(50)  NOT NULL,
        service        VARCHAR(100) NOT NULL,
        preferred_date DATE         NOT NULL,
        preferred_time TIME         NOT NULL,
        message        TEXT         DEFAULT NULL,
        status         ENUM('new', 'contacted', 'resolved') DEFAULT 'new',
        created_at     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB");
    echo "Created consultation_requests table.<br>";

    // 3. Document Status Constraint
    // Make sure we have the application_documents table (recreating it for the doc_key fix)
    $conn->exec("DROP TABLE IF EXISTS application_documents");
    $conn->exec("CREATE TABLE application_documents (
        id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        user_id        INT UNSIGNED NOT NULL,
        doc_key        VARCHAR(100) NOT NULL,
        file_name      VARCHAR(255) NOT NULL,
        file_path      VARCHAR(500) NOT NULL,
        status         ENUM('pending', 'uploaded', 'verified', 'rejected') DEFAULT 'uploaded',
        uploaded_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
        updated_at     TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY (user_id, doc_key),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE=InnoDB");
    echo "Ensured application_documents table matches latest schema.<br>";

    // 4. Create Blogs Table
    $conn->exec("CREATE TABLE IF NOT EXISTS blogs (
        id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        author_id    INT UNSIGNED NOT NULL,
        title        VARCHAR(255) NOT NULL,
        slug         VARCHAR(255) NOT NULL UNIQUE,
        excerpt      TEXT         DEFAULT NULL,
        content      LONGTEXT     NOT NULL,
        image_path   VARCHAR(500) DEFAULT NULL,
        status       ENUM('draft', 'published') DEFAULT 'draft',
        created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
        updated_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
    ) ENGINE=InnoDB");
    echo "Created blogs table.<br>";

    echo "<h3 style='color: green;'>Migration successful!</h3>";


} catch (PDOException $e) {
    echo "<h3 style='color: red;'>Migration failed: " . $e->getMessage() . "</h3>";
}
?>
