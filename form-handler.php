<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Load reCAPTCHA Secret Key from Plesk environment variables
    $recaptchaSecret = getenv("RECAPTCHA_SECRET_KEY");
    $recaptchaToken = $_POST["recaptchaToken"];

    // Verify reCAPTCHA token with Google
    $recaptchaResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaToken");
    $recaptchaData = json_decode($recaptchaResponse);

    if (!$recaptchaData->success) {
        echo json_encode(["status" => "error", "message" => "reCAPTCHA verification failed."]);
        exit;
    }

    // Sanitize input
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST["subject"]);

    // Default message (for General Enquiry)
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "No message provided";

    // Additional fields for "Request a Quote"
    $heardAboutUs = isset($_POST["heardAboutUs"]) ? htmlspecialchars($_POST["heardAboutUs"]) : "Not provided";
    $serviceType = isset($_POST["serviceType"]) ? htmlspecialchars($_POST["serviceType"]) : "Not provided";
    $projectDescription = isset($_POST["projectDescription"]) ? htmlspecialchars($_POST["projectDescription"]) : "Not provided";
    $projectDate = isset($_POST["projectDate"]) ? htmlspecialchars($_POST["projectDate"]) : "Not provided";
    $projectLocation = isset($_POST["projectLocation"]) ? htmlspecialchars($_POST["projectLocation"]) : "Not provided";

    // Email recipient
    $to = "admin@1electric.nz";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    // Construct email body
    $emailBody = "New Contact Form Submission:\n\n";
    $emailBody .= "Name: $name\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Subject: $subject\n";
    $emailBody .= "Message: $message\n";

    // If it's a Request a Quote, add more details
    if ($subject === "Request a Quote") {
        $emailBody .= "\n--- Additional Quote Details ---\n";
        $emailBody .= "How Heard About Us: $heardAboutUs\n";
        $emailBody .= "Service Type: $serviceType\n";
        $emailBody .= "Project Description: $projectDescription\n";
        $emailBody .= "Project Date: $projectDate\n";
        $emailBody .= "Project Location: $projectLocation\n";
    }

    // Send the email
    if (mail($to, "Contact Form Submission: " . $subject, $emailBody, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Message failed to send."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
