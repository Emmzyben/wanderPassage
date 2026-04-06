<?php
// backend/index.php
// Backend Status and Connection Info Page

header("Content-Type: text/html");

echo "<!DOCTYPE html>
<html>
<head>
    <title>WanderPassage Backend Status</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; background: #f5f5f5; }
        h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .status-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .success { border-left: 5px solid #28a745; }
        .error { border-left: 5px solid #dc3545; }
        .warning { border-left: 5px solid #ffc107; }
        h2 { margin-top: 0; color: #555; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f8f9fa; }
        code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
        .btn { display: inline-block; padding: 10px 20px; background: #007bff; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        .btn:hover { background: #0056b3; }
    </style>
</head>
<body>
    <h1>🔧 WanderPassage Backend Status</h1>";

try {
    // Test database connection
    require_once __DIR__ . '/config/db.php';
    
    echo "<div class='status-box success'>
        <h2>✅ Database Connection</h2>
        <table>
            <tr><th>Status</th><td>Connected</td></tr>
            <tr><th>Host</th><td>" . (defined('DB_HOST') ? DB_HOST : 'localhost') . "</td></tr>
            <tr><th>Database</th><td>" . (defined('DB_NAME') ? DB_NAME : 'wander_passage') . "</td></tr>
            <tr><th>User</th><td>" . (defined('DB_USER') ? DB_USER : 'root') . "</td></tr>
        </table>
    </div>";
    
    // Check if users table exists and has data
    try {
        $stmt = $conn->query("SELECT COUNT(*) as count FROM users");
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        echo "<div class='status-box'>
            <h2>📊 Users Table</h2>
            <table>
                <tr><th>Total Users</th><td>" . $result['count'] . "</td></tr>
            </table>
        </div>";
    } catch (Exception $e) {
        echo "<div class='status-box warning'>
            <h2>⚠️ Users Table</h2>
            <p>Table may not exist or has no data: " . htmlspecialchars($e->getMessage()) . "</p>
        </div>";
    }
    
    // List PHP endpoints
    echo "<div class='status-box'>
        <h2>📁 Available Endpoints</h2>
        <table>
            <tr><th>Auth</th><td><code>/auth/login.php</code></td></tr>
            <tr><th>Auth</th><td><code>/auth/register.php</code></td></tr>
            <tr><th>API</th><td><code>/api/contact.php</code></td></tr>
            <tr><th>API</th><td><code>/api/book_consultation.php</code></td></tr>
            <tr><th>API</th><td><code>/api/health.php</code></td></tr>
            <tr><th>API</th><td><code>/api/blogs/list.php</code></td></tr>
        </table>
    </div>";
    
} catch (PDOException $e) {
    echo "<div class='status-box error'>
        <h2>❌ Database Connection Failed</h2>
        <p><strong>Error:</strong> " . htmlspecialchars($e->getMessage()) . "</p>
        <p><strong>Possible causes:</strong></p>
        <ul>
            <li>MySQL server not running</li>
            <li>Wrong database credentials in config/db.php</li>
            <li>Database 'wander_passage' does not exist</li>
        </ul>
    </div>";
    
    echo "<div class='status-box'>
        <h2>🔧 Fix Database Config</h2>
        <p>Edit <code>backend/config/db.php</code> with correct credentials:</p>
        <pre>
\$host = 'localhost';
\$db_name = 'wander_passage';
\$username = 'root';  // Change if needed
\$password = '';      // Set your password
        </pre>
    </div>";
}

// PHP Info
echo "<div class='status-box'>
    <h2>🐘 PHP Information</h2>
    <table>
        <tr><th>PHP Version</th><td>" . PHP_VERSION . "</td></tr>
        <tr><th>Server API</th><td>" . php_sapi_name() . "</td></tr>
        <tr><th>Loaded Extensions</th><td>" . count(get_loaded_extensions()) . "</td></tr>
    </table>
</div>";

echo "<a href='health.php' class='btn'>Test JSON Health Check</a>";
echo "<a href='../index.html' class='btn' style='margin-left:10px; background:#28a745;'>Go to Frontend</a>";

echo "</body></html>";
?>
