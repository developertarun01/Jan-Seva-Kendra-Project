// Import required modules
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'https://jan-seva-kendra-project.vercel.app' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload configuration using multer
const upload = multer({ dest: "uploads/" });

// API to handle form submissions
app.post("/api/submit-form", upload.array("documents"), async (req, res) => {
    const { name, mobile, email, services } = req.body;
    const files = req.files; // Ensure that files are accessible

    console.log("Files received:", files);

    try {
        // Configure email transport
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Add this in your .env file
                pass: process.env.EMAIL_PASS, // Add this in your .env file
            },
        });

        // Email details
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "tarunbusinessmail@gmail.com", // Replace with your email
            subject: "New Form Submission with Documents",
            text: `You have received a new submission:
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Service: ${services}
Attached documents are included.`,
            attachments: files.map((file) => ({
                filename: file.originalname,
                path: file.path,
            })),
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).send({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error submitting form" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});