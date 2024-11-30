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
console.log("Email User:", process.env.EMAIL_USER);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload configuration using multer
const upload = multer({ dest: "uploads/" });

// API to handle form submissions
app.post("/api/submit-form", upload.array("documents"), async (req, res) => {
    const { name, mobile, email, services } = req.body;
    const files = req.files;

    console.log("Backend: Received form data:", { name, mobile, email, services });
    console.log("Backend: Files received:", files);

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("Backend: Transporter created successfully.");

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

        console.log("Backend: Mail options prepared:", mailOptions);

        await transporter.sendMail(mailOptions);

        console.log("Backend: Email sent successfully!");
        res.status(200).send({ message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Backend: Error occurred while sending email:", error);
        res.status(500).send({ error: "Internal Server Error", details: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});