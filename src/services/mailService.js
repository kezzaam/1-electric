import nodemailer from "nodemailer";

async function sendMail(fromEmail, subject, mailBody) {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // or false if using TLS on port 587
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const toEmail = process.env.EMAIL_TO || "admin@1electric.nz";

    await transporter.sendMail({
        from: fromEmail,
        replyTo: fromEmail,
        to: toEmail,
        subject: `Contact Form Submission: ${subject}`,
        text: mailBody,
    });
}

export default sendMail;
