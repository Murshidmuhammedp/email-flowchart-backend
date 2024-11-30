import express from 'express'
import { saveFlow, scheduleTime } from '../Controller/emailController.js'

const router = express.Router();

// Save email flow
router.post('/save-flow', saveFlow);

// Schedule email
router.post('/schedule-email', scheduleTime);

export default router;