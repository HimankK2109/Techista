import express from "express"
import { addtoWishlist, getWishlist, removefromWishlist } from "../controllers/wishlistController.js"
import authMiddleware from "../middleware/auth.js"

const wishlistRouter = express.Router()

wishlistRouter.post("/add",authMiddleware,addtoWishlist)
wishlistRouter.post("/remove",authMiddleware,removefromWishlist)
wishlistRouter.post("/get",authMiddleware,getWishlist)

export default wishlistRouter;