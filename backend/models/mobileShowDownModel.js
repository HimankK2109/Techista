import mongoose from 'mongoose';

const mobileShowdownSchema = new mongoose.Schema({
    jsonData: {
        type: Object,
        required: true,
    },
    serialNumber: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const mobileShowdownModel = mongoose.models.mobileshowdown || mongoose.model("mobileShowdown", mobileShowdownSchema);

export default mobileShowdownModel;