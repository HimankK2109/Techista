import laptopCardModel from "../models/laptopCardModel.js";
import LaptopModal from "../models/laptopModalModel.js";
import laptopShowdownModel from "../models/showDownModel.js";
import fs from "fs";

// add new laptop card
const addLaptop = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  // We extracted data from the form or a API url: when request is made from frontend it brings some data along with it and we extract it
  const laptop = new laptopCardModel({
    name: req.body.name,
    description: req.body.description,
    usage: req.body.usage,
    brand: req.body.brand,
    CPU_Brand: req.body.CPU_Brand,
    processor: req.body.processor,
    gpu: req.body.gpu,
    ram: req.body.ram,
    screenSize: req.body.screenSize,
    operatingSystem: req.body.operatingSystem,
    price: req.body.price,
    image: image_filename,
    serialNumber: req.body.serialNumber,
  });

  try {
    await laptop.save();
    res.json({ success: true, message: "Laptop Card Added" });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all laptop card list
const listLaptop = async (req, res) => {
  try {
    const laptops = await laptopCardModel.find({});
    res.json({ success: true, data: laptops });
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove laptop card
const removeLaptop = async (req, res) => {
  try {
    const laptop = await laptopCardModel.findById(req.body.id);
    fs.unlink(`uploads/${laptop.image}`, () => {});

    await laptopCardModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Laptop is Removed" });
  } catch (error) {
    // console.log(error);
    removeFood.json({ success: false, message: "Error" });
  }
};

// add a laptop modal
const addLaptopModal = async (req, res) => {
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
    const laptopEntry = new LaptopModal({ jsonData, serialNumber, images: image_filenames });
    // console.log("Image Filenames:", image_filenames);
    // console.log(req.body.jsonData);
    // console.log(req.body.serialNumber);
    await laptopEntry.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Laptop data and images saved successfully.",
      });
  } catch (error) {
    console.error("Error saving laptop data:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to save laptop data." });
  }
};

// fetch all laptop modal data
const listLaptopModal = async (req, res) => {
  try {
    const laptopModals = await LaptopModal.find(); // Fetch all laptop modals
    res.status(200).json({ data: laptopModals });
  } catch (error) {
    console.error("Error fetching laptop modal data:", error);
    res.status(500).json({ error: "Failed to fetch laptop modal data" });
  }
}

// add a laptop in DB for showdown
const addLaptopShowdown = async (req, res) => {
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
    const laptopEntry = new laptopShowdownModel({ jsonData, serialNumber, price, image: image_filename });
    // console.log("Image Filename:", image_filename);
    // console.log(req.body.jsonData);
    // console.log(req.body.serialNumber);
    // console.log(req.body.price);
    await laptopEntry.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Laptop data and images saved successfully.",
      });
  } catch (error) {
    console.error("Error saving laptop data:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to save laptop data." });
  }
}

// fetch all laptop showdown data
const listLaptopShowdown = async (req, res) => {
  try {
    const laptopShowdowns = await laptopShowdownModel.find(); // Fetch all laptop showdown
    res.status(200).json({ data: laptopShowdowns });
  } catch (error) {
    console.error("Error fetching laptop showdown data:", error);
    res.status(500).json({ error: "Failed to fetch laptop showdown data" });
  }
}

export { addLaptop, listLaptop, removeLaptop, addLaptopModal, listLaptopModal, addLaptopShowdown, listLaptopShowdown };