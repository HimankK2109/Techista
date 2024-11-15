import mongoose from 'mongoose';

const mobileModalSchema = new mongoose.Schema({
    jsonData: {
        type: Object,
        required: true,
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true,
    },
    images: {
        type: [String],
        required: true
    }
}, { timestamps: true });

export default mongoose.model("MobileModal", mobileModalSchema);