<?php
// Contact Form Handler for AIT Server
// This file should be placed in the public directory of your AIT-hosted website

// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers for React frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Sanitize and validate input data
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Validate email format
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

try {
    // Get form data
    $name = sanitizeInput($_POST['name'] ?? '');
    $email = sanitizeInput($_POST['email'] ?? '');
    $organization = sanitizeInput($_POST['organization'] ?? '');
    $subject = sanitizeInput($_POST['subject'] ?? '');
    $message = sanitizeInput($_POST['message'] ?? '');

    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        throw new Exception('All required fields must be filled');
    }

    // Validate email format
    if (!validateEmail($email)) {
        throw new Exception('Invalid email format');
    }

    // Prevent spam - basic checks
    if (strlen($message) < 10) {
        throw new Exception('Message too short');
    }

    // Email configuration
    $to = "airqualitynexus@ait.ac.th";
    $email_subject = "Contact Form Submission: " . $subject;
    
    // Email body
    $email_body = "
New contact form submission from AIT Air Quality Nexus website:

Name: $name
Email: $email
Organization: $organization
Subject: $subject

Message:
$message

---
Submitted from: " . $_SERVER['HTTP_HOST'] . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "
Timestamp: " . date('Y-m-d H:i:s') . "
";

    // Email headers
    $headers = array(
        'From' => "noreply@ait.ac.th",
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion(),
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8'
    );

    // Convert headers array to string
    $headers_string = '';
    foreach ($headers as $key => $value) {
        $headers_string .= $key . ': ' . $value . "\r\n";
    }

    // Send email
    $mail_sent = mail($to, $email_subject, $email_body, $headers_string);

    if ($mail_sent) {
        // Log successful submission (optional)
        $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from: $email ($name)\n";
        file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);

        // Return success response
        header('Content-Type: application/json');
        echo json_encode([
            'success' => true,
            'message' => 'Your message has been sent successfully!'
        ]);
    } else {
        throw new Exception('Failed to send email. Please try again later.');
    }

} catch (Exception $e) {
    // Log error (optional)
    $error_log = date('Y-m-d H:i:s') . " - Error: " . $e->getMessage() . "\n";
    file_put_contents('contact_errors.txt', $error_log, FILE_APPEND | LOCK_EX);

    // Return error response
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
