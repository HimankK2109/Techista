import express from "express"
import { googleLogin, loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/googlelogin", googleLogin);

export default userRouter;