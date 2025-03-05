import express from "express";
import verifyRecaptcha from "../services/recaptchaService.js";
import sendMail from "../services/mailService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
      heardAboutUs,
      serviceType,
      projectDescription,
      projectDate,
      projectLocation,
      recaptchaToken,
    } = req.body;

    // 1) Verify reCAPTCHA
    const success = await verifyRecaptcha(recaptchaToken);
    if (!success) {
      return res.status(400).json({
        status: "error",
        message: "reCAPTCHA verification failed.",
      });
    }

    // 2) Construct email body
    let mailBody = `
    New Contact Form Submission:
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message || "No message provided"}
    `;

    // Only add the fields if it’s a request for a quote
    if (subject === "Request a Quote") {
      mailBody += `
      --- Additional Quote Details ---
      How Heard About Us: ${heardAboutUs}
      Service Type: ${serviceType}
      Project Description: ${projectDescription}
      Project Date: ${projectDate}
      Project Location: ${projectLocation}
      `;
    }

    // 3) Send email
    await sendMail(email, subject, mailBody);
    return res.json({ status: "success", message: "Message sent successfully." });
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return res.status(500).json({ status: "error", message: "Server error, please try again." });
  }
});

export const contactRoute = router;
