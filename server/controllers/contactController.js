import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const handleContactForm = async (req, res) => {
  const { name, email, subject, message, mobile } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New contact form submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully!");
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};
