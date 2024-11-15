import mongoose from "mongoose";

const laptopCardSchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    usage: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    CPU_Brand: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    gpu: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    screenSize: {
        type: String,
        required: true
    },
    operatingSystem: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const laptopCardModel = mongoose.models.laptopcard || mongoose.model("laptopcard", laptopCardSchema);

export default laptopCardModel;