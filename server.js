import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import emailRoutes from './routes/flowRoutes.js'


dotenv.config()
const app = express()
app.use(bodyParser.json()); 

app.use(cors({
    // origin: "http://localhost:5173",
    origin: "https://email-flowchart-frontend.vercel.app/",
    credentials: true
}));

app.use('/api/emails', emailRoutes);

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 8523

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});