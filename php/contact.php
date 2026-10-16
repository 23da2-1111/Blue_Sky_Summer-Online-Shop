<?php

header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";  
$password = "";  
$dbname = "store"; 

$connect = new mysqli($servername, $username, $password, $dbname);

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}

function sanitizeInput($data) {
    return htmlspecialchars(trim($data));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? sanitizeInput($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitizeInput($_POST['email']) : '';
    $text = isset($_POST['text']) ? sanitizeInput($_POST['text']) : '';

    if (empty($name) || empty($email) || empty($text)) {
        echo json_encode(['success' => false, 'message' => 'Please fill out all fields.']);
        exit;
    }

    $stmt = $connect->prepare("INSERT INTO contact (name, email, text) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $text); 

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Thank you for your submission!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'There was an error saving your data.']);
    }

    $stmt->close();

    $connect->close();

    exit;
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}
?>
