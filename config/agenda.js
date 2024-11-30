import Agenda from "agenda";
import sendEmail from "../utils/nodemailer.js";
import dotenv from 'dotenv';
dotenv.config()

const agenda = new Agenda({
  db: { address: process.env.DB },
});

agenda.define('send email', async (job) => {
  const { email, subject, body } = job.attrs.data;
  await sendEmail(email, subject, body);
  console.log(`Email sent to ${email}`);
});

agenda.start();

export default agenda;