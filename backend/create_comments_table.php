<?php
require_once __DIR__ . '/config/db.php';

$sql = "CREATE TABLE IF NOT EXISTS blog_comments (
    id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    blog_id      INT UNSIGNED NOT NULL,
    user_id      INT UNSIGNED DEFAULT NULL,
    name         VARCHAR(150) NOT NULL,
    email        VARCHAR(255) NOT NULL,
    comment      TEXT         NOT NULL,
    status       ENUM('pending', 'approved', 'spam') DEFAULT 'approved',
    created_at   TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;";

try {
    $conn->exec($sql);
    echo "Table blog_comments created successfully\n";
} catch (PDOException $e) {
    echo "Error creating table: " . $e->getMessage() . "\n";
}
?>
