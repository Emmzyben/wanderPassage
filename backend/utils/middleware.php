<?php
// backend/utils/middleware.php
// Reusable function to require a valid JWT on a route.
// Usage: $user = require_auth(); — returns the decoded JWT payload.

require_once __DIR__ . '/auth_helper.php';

function require_auth(): object {
    $token = get_bearer_token();

    if (!$token) {
        http_response_code(401);
        header("Content-Type: application/json");
        echo json_encode(["status" => "error", "message" => "Authentication required"]);
        exit();
    }

    $payload = verify_jwt($token);

    if (!$payload) {
        http_response_code(401);
        header("Content-Type: application/json");
        echo json_encode(["status" => "error", "message" => "Invalid or expired token. Please log in again."]);
        exit();
    }

    return $payload;
}
?>
