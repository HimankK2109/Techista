import express from "express"
import { addMobile, addMobileModal, addMobileShowdown, listMobile, listMobileModal, listMobileShowdown, removeMobile } from "../controllers/mobileController.js";
import multer from "multer"

const mobileRouter = express.Router();

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

mobileRouter.post("/addmobile",upload.single("image"), addMobile)
mobileRouter.get("/listmobile", listMobile)
mobileRouter.post("/removemobile", removeMobile)
mobileRouter.post("/addmobilemodal", upload.array("images", 5), addMobileModal);
mobileRouter.get("/listmobilemodal", listMobileModal)
mobileRouter.post("/addmobileshowdown",upload.single("image"), addMobileShowdown)
mobileRouter.get("/listmobileshowdown", listMobileShowdown)

export default mobileRouter