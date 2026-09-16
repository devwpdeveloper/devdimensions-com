<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

$allowedOrigin = getenv('DEV_DIMENSIONS_ALLOWED_ORIGIN');
if ($allowedOrigin) {
    header('Access-Control-Allow-Origin: ' . $allowedOrigin);
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Only POST requests are accepted.']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    $payload = $_POST;
}

$name = trim((string)($payload['name'] ?? ''));
$email = trim((string)($payload['email'] ?? ''));
$company = trim((string)($payload['company'] ?? ''));
$phone = trim((string)($payload['phone'] ?? ''));
$message = trim((string)($payload['message'] ?? ''));

$name = preg_replace('/[\r\n]+/', ' ', $name) ?: '';
$company = preg_replace('/[\r\n]+/', ' ', $company) ?: '';
$phone = preg_replace('/[\r\n]+/', ' ', $phone) ?: '';

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Name, email, and message are required.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

$recipient = getenv('DEV_DIMENSIONS_CONTACT_TO') ?: 'info@devdimensions.com';
$subject = sprintf('New DevDimensions consultation request from %s', $name);
$body = implode(PHP_EOL, [
    'A new consultation request was submitted from the DevDimensions website.',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Company: ' . ($company !== '' ? $company : 'Not provided'),
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    '',
    'Message:',
    $message,
]);

$headers = implode(PHP_EOL, [
    'From: website@devdimensions.com',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = @mail($recipient, $subject, $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'The mail transport is not configured on this host.',
    ]);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Your message was sent successfully.']);
