import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.password
    },
});

sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.email,
            to,
            subject,
            text,
        });
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error('Failed to send email:', error.message);
        throw error;
    }
};

export default sendEmail;
