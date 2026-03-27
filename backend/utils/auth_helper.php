<?php
// backend/utils/auth_helper.php

define('JWT_SECRET', 'WanderPassage_Super$ecret_2026!'); // Change this to a long random string in production!

// --- Base64 URL encode ---
function base64url_encode(string $data): string {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

// --- Base64 URL decode ---
function base64url_decode(string $data): string {
    return base64_decode(strtr($data, '-_', '+/') . str_repeat('=', 3 - (3 + strlen($data)) % 4));
}

// --- Generate JWT ---
function generate_jwt(array $payload): string {
    $header  = base64url_encode(json_encode(['alg' => 'HS256', 'typ' => 'JWT']));
    $payload = base64url_encode(json_encode($payload));
    $sig     = base64url_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));
    return "$header.$payload.$sig";
}

// --- Verify JWT ---
function verify_jwt(string $jwt): object|false {
    $parts = explode('.', $jwt);
    if (count($parts) !== 3) return false;

    [$header, $payload, $sig] = $parts;

    $expectedSig = base64url_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true));

    // Constant-time comparison to prevent timing attacks
    if (!hash_equals($expectedSig, $sig)) return false;

    $data = json_decode(base64url_decode($payload));
    if (!$data) return false;

    // Check expiry
    if (isset($data->exp) && $data->exp < time()) return false;

    return $data;
}

// --- Extract Bearer token from Authorization header ---
function get_bearer_token(): ?string {
    $headers = getallheaders();
    $auth = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    if (preg_match('/^Bearer\s+(.+)$/i', $auth, $m)) {
        return $m[1];
    }
    return null;
}
?>
