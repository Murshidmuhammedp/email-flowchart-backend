import nodemailer from 'nodemailer'
import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadTemplate = (email, data) => {
    const filePath = path.join(__dirname, '../View/email', `${email}.html`);
    const source = fs.readFileSync(filePath, 'utf8');
    const template = handlebars.compile(source);
    return template(data);
};

const sendmail = async (data) => {
    const htmlContent = loadTemplate('email', data);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.password
        },
    });

    const mailOptions = {
        from: process.env.email,
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            // logger.error(error);
        } else {
            logger.info('Email sent: ' + info.response);
        }
    });
};

export default sendmail;
