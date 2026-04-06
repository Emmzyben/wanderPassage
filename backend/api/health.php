<?php
// backend/api/health.php
// Health check endpoint to verify backend is running

header("Content-Type: application/json");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// Check database connection
try {
    require_once __DIR__ . '/../config/db.php';
    
    // Test database connection
    $stmt = $conn->query("SELECT 1");
    $stmt->fetch();
    
    echo json_encode([
        "status" => "success",
        "message" => "Backend is running",
        "timestamp" => date("Y-m-d H:i:s"),
        "database" => "connected"
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Backend is running but database connection failed",
        "database" => "disconnected",
        "error" => $e->getMessage()
    ]);
}
?>
