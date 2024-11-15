import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from "validator"
import { OAuth2Client } from 'google-auth-library';

// Initialize Google OAuth2 client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google login controller
const googleLogin = async (req, res) => {
    const { token } = req.body;
    try {
        // Verify the Google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const email = payload.email; // Get the user's email from the payload
        const name = payload.name; // Optionally get the user's name

        // Check if the user already exists in the database
        let user = await userModel.findOne({ email });
        if (!user) {
            // If user does not exist, create a new user
            user = new userModel({
                name: name,
                email: email,
                authMethod: "google",
            });

            await user.save(); // Save the new user to the database
        }

        // Create a JWT token for the user
        const tokenJWT = createToken(user._id);
        res.status(200).json({ success: true, token: tokenJWT, user: { id: user._id, name: user.name, email: user.email } });

    } catch (error) {
        // console.log(error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: "User doesn't exist"})
        }

        // mtlb user h aur wo mil bhi gya h
        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch){
            return res.json({success: false, message:"Invalid credentials"})
        }
        // user ka password verify hogya h aur ab wo verified h
        // user verified h to usko token dediya ek
        const token = createToken(user._id);
        res.json({success: true, token})

    } catch (error) {
        // console.log(error);       
        res.json({success: false, message: "Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// register user
const registerUser = async(req, res) => {
    const {name, password, email} = req.body;
    try {
        // Check if the user exists with Google authentication
        const existingUserWithGoogle = await userModel.findOne({ email, authMethod: "google" });
        if (existingUserWithGoogle) {
            return res.json({ success: false, message: "User exists with Google authentication, please sign in with Google." });
        }

        // Check if the user already exists with local authentication
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "User already exists" });
        }

        // yahan aagye mtlb user naya hi aaya h
        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success:false, message: "Please enter a strong password"})
        }

        // yahan aagye mtlb email password theek h ab usko create krna h naya account
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            authMethod: "local",
        });

        // user created and save it now
        const user = await newUser.save()
        const token = createToken(user._id)
        return res.json({success: true, token});

    } catch (error) {
        // console.log(error)
        res.json({success: false, message: "Error"})
    }
}

export{
    loginUser,
    registerUser,
    googleLogin
}