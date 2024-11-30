import mongoose from "mongoose";

const flowchartSchema = new mongoose.Schema({
    nodes: {
        type: Array,
        required: true
    },
    edges: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

const Flowcharts = mongoose.model('Flowcharts', flowchartSchema);

export default Flowcharts;