import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    authMethod: {
        type: String,
        required: true, // 'google' or 'local'
    },
    wishlistData: {
        type: Object,
        default: {}
    }
},{minimize: false}, {timestamps: true})

const userModel = mongoose.model.user || mongoose.model("user", userSchema);
export default userModel;