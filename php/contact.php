<?php
if (isset($_POST['submit'])) {
    // Sanitize and validate input fields
    $username = htmlspecialchars(trim($_POST['username']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $emailAddress = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $body = htmlspecialchars(trim($_POST['body']));

    // Validate email
    if (!$emailAddress) {
        echo "Invalid email address.";
        exit();
    }

    // Create the email message content
    $message = "Name: " . $username . "<br>Email: " . $emailAddress . "<br><br>Subject: " . $subject . "<br><br>Message:<br>" . nl2br($body);

    // Load PHPMailer
    require '../phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer();
    $mail->isSMTP();

    // SMTP settings (replace placeholders with actual values)
    $mail->Host = "your.smtp.host"; // e.g., smtp.example.com
    $mail->SMTPAuth = true;
    $mail->Username = "your-email@example.com"; // Your SMTP email
    $mail->Password = "your-email-password"; // Your SMTP password
    $mail->SMTPSecure = "tls"; // or "ssl" if required
    $mail->Port = 587; // Port number (usually 587 for TLS or 465 for SSL)

    // Email settings
    $mail->IsHTML(true);
    $mail->Subject = "Request via Website";
    $mail->Body = $message;
    $mail->setFrom("info@yourdomain.com", $username); // Sender's email
    $mail->addAddress('warren.x.denham@gsk.com'); // Recipient's email

    try {
        // Send email and redirect on success
        if ($mail->send()) {
            header("Location: ../succeed.html");
            exit();
        } else {
            header("Location: ../error.html");
            exit();
        }
    } catch (Exception $e) {
        // Display error message
        echo "Message could not be sent. Mailer Error: " . $mail->ErrorInfo;
    }
} else {
    echo "Invalid form submission.";
}
?>