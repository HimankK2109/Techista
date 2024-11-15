import express from "express"
import { addLaptop, addLaptopModal, addLaptopShowdown, listLaptop, listLaptopModal, listLaptopShowdown, removeLaptop } from "../controllers/laptopController.js";
import multer from "multer"

const laptopRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
})

laptopRouter.post("/add",upload.single("image"), addLaptop)
laptopRouter.get("/list", listLaptop)
laptopRouter.post("/remove", removeLaptop)
laptopRouter.post("/addlaptopmodal", upload.array("images", 5), addLaptopModal);
laptopRouter.get("/listlaptopmodal", listLaptopModal)
laptopRouter.post("/addshowdown",upload.single("image"), addLaptopShowdown)
laptopRouter.get("/listlaptopshowdown", listLaptopShowdown)

export default laptopRouter