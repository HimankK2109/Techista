import express from "express"
import { getAllPrices } from "../controllers/pricesController.js";

const pricesRouter = express.Router()

pricesRouter.get("/", getAllPrices)

export default pricesRouter;