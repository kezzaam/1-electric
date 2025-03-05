import fetch from "node-fetch";

async function verifyRecaptcha(recaptchaToken) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaToken || !secretKey) return false;

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const response = await fetch(verifyUrl, { method: "POST" });
    const data = await response.json();
    // Check both success and a score threshold (e.g., 0.5)
    return data.success === true && data.score >= 0.5;
}

export default verifyRecaptcha;
