import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,  
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export const sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
        };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
};