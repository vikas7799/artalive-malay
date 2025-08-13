<?php
header('Content-Type: application/json');

$error = '';
$successMessage = '';

extract($_POST);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($name)) {
        $error .= "<li>Name is required</li>";
    }

    if (empty($email)) {
        $error .= "<li>Email Address is required</li>";
    }
    if (empty($phone)) {
        $error .= "<li>Phone is required</li>";
    }

    if (empty($service)) {
        $error .= "<li>Service is required</li>";
    }


    

    if (empty($error)) {
        $to = "info@artalive.com.my"; // Replace with your email address
        $subject = "Artalive Contact Form Submission";

        $messages = "<table>";
        $messages .= "<tr><td>Name</td><td>:</td><td>$name</td></tr>";
        $messages .= "<tr><td>Email</td><td>:</td><td>$email</td></tr>";
        $messages .= "<tr><td>Phone</td><td>:</td><td>$phone</td></tr>";
        $messages .= "<tr><td>Service</td><td>:</td><td>$service</td></tr>";

        $messages .= "</table>";

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
        $headers .= "From: no-reply@artalive.com.my \r\n";

        if (mail($to, $subject, $messages, $headers)) {
            $successMessage = 'Thank you for your message. We will get back to you soon.';
        } else {
            $error = 'Email sending failed. Please try again later.';
        }
    }

    echo json_encode(array('success' => empty($error), 'message' => empty($error) ? $successMessage : $error));
}
?>
