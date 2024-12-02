import Agenda from "agenda";
import Flowcharts from "../models/flowchartModel.js";

export const saveFlow = async (req, res) => {
    const { nodes, edges } = req.body;
    try {
        const flow = new Flowcharts({
            nodes,
            edges
        });
        await flow.save();
        res.status(200).json({ message: 'Flow saved successfully', flow });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const scheduleTime = async (req, res) => {
    const { email, subject, body, delay } = req.body;
    try {
        await Agenda.schedule(`${delay} seconds`, 'send email', { email, subject, body });
        res.status(200).json({ message: 'Email scheduled successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};