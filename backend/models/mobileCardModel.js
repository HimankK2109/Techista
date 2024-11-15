import mongoose from "mongoose";

const mobileCardSchema = new mongoose.Schema({
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
    brand: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    screenSize: {
        type: String,
        required: true
    },
    primaryCamera: {
        type: String,
        required: true
    },
    secondaryCamera: {
        type: String,
        required: true
    },
    processorBrand: {
        type: String,
        required: true
    },
    resolution: {
        type: String,
        required: true
    },
    network: {
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

const mobileCardModel = mongoose.models.mobilecard || mongoose.model("mobilecard", mobileCardSchema);

export default mobileCardModel;