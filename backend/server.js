import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import laptopRouter from './routes/laptopRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import wishlistRouter from './routes/wishlistRoute.js'
import pricesRouter from './routes/pricesRoutes.js'
import mobileRouter from './routes/mobileRoute.js'

// app config
const app = express()
const PORT = process.env.PORT || 4000;

// miidleware
app.use(express.json())
app.use(cors())

// DB Connection
connectDB();

// api endpoints
app.use("/api/laptop",laptopRouter)
app.use("/api/mobile",mobileRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/wishlist", wishlistRouter)
app.use("/api/prices", pricesRouter)

app.get("/", (req, res) => {
    res.send("API is working")
})

app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
})