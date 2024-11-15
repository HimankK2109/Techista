import mongoose from 'mongoose';

const showdownSchema = new mongoose.Schema({
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

const laptopShowdownModel = mongoose.models.laptopshowdown || mongoose.model("laptopShowdown", showdownSchema);

export default laptopShowdownModel;