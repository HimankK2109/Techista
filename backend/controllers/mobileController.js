import mobileCardModel from "../models/mobileCardModel.js";
import MobileModal from "../models/mobileModalModel.js";
import mobileShowdownModel from "../models/mobileShowDownModel.js";
import fs from "fs";

// add new mobile card
const addMobile = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  // We extracted data from the form or a API url: when request is made from frontend it brings some data along with it and we extract it
  const mobile = new mobileCardModel({
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    ram: req.body.ram,
    storage: req.body.storage,
    screenSize: req.body.screenSize,
    primaryCamera: req.body.primaryCamera,
    secondaryCamera: req.body.secondaryCamera,
    processorBrand: req.body.processorBrand,
    resolution: req.body.resolution,
    network: req.body.network,
    price: req.body.price,
    image: image_filename,
    serialNumber: req.body.serialNumber,
  });

  try {
    await mobile.save();
    res.json({ success: true, message: "Mobile Card Added" });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all mobile card list
const listMobile = async (req, res) => {
  try {
    const mobiles = await mobileCardModel.find({});
    res.json({ success: true, data: mobiles });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove mobile card
const removeMobile = async (req, res) => {
  try {
    const mobile = await mobileCardModel.findById(req.body.id);
    fs.unlink(`uploads/${laptop.image}`, () => {});

    await laptopCardModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Laptop is Removed" });
  } catch (error) {
    // console.log(error);
    removeFood.json({ success: false, message: "Error" });
  }
};

// add a mobile modal
const addMobileModal = async (req, res) => {
  try {
    const jsonData = JSON.parse(req.body.jsonData);
    const serialNumber = req.body.serialNumber;
    // Check if files are uploaded
    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No images uploaded." });
    }

    // Map over uploaded files to get filenames
    let image_filenames = req.files.map((file) => file.filename);

    // Ensure you have the right number of images
    if (image_filenames.length < 5) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload at least 5 images." });
    }

    // Pass jsonData as a single field to match schema expectations
    const mobileEntry = new MobileModal({ jsonData, serialNumber, images: image_filenames });
    // console.log("Image Filenames:", image_filenames);
    // console.log(req.body.jsonData);
    // console.log(req.body.serialNumber);
    await mobileEntry.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Mobile data and images saved successfully.",
      });
  } catch (error) {
    console.error("Error saving mobile data:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to save mobile data." });
  }
};

// fetch all mobile modal data
const listMobileModal = async (req, res) => {
  try {
    const mobileModals = await MobileModal.find(); // Fetch all mobile modals
    res.status(200).json({ data: mobileModals });
  } catch (error) {
    console.error("Error fetching mobile modal data:", error);
    res.status(500).json({ error: "Failed to fetch mobile modal data" });
  }
}

// add a mobile in DB for showdown
const addMobileShowdown = async (req, res) => {
  try {
    // Check if files are uploaded
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    // Log the entire request body
    // console.log("Request Body:", req.body);
    
    const jsonData = JSON.parse(req.body.jsonData);
    const { serialNumber } = req.body;
    const price = req.body.price;
    
    let image_filename = req.file.filename;

    // Pass jsonData as a single field to match schema expectations
    const mobileEntry = new mobileShowdownModel({ jsonData, serialNumber, price, image: image_filename });
    // console.log("Image Filename:", image_filename);
    // console.log(req.body.jsonData);
    // console.log(req.body.serialNumber);
    // console.log(req.body.price);
    await mobileEntry.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Mobile data and images saved successfully.",
      });
  } catch (error) {
    console.error("Error saving mobile data:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to save mobile data." });
  }
}

// fetch all mobile showdown data
const listMobileShowdown = async (req, res) => {
  try {
    const mobileShowdowns = await mobileShowdownModel.find(); // Fetch all mobile showdown
    res.status(200).json({ data: mobileShowdowns });
  } catch (error) {
    console.error("Error fetching mobile showdown data:", error);
    res.status(500).json({ error: "Failed to fetch mobile showdown data" });
  }
}

export { addMobile, listMobile, removeMobile, addMobileModal, listMobileModal, addMobileShowdown, listMobileShowdown };