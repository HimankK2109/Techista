import React, { useState, useRef } from "react";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const LaptopShowdown = ({ url }) => {
  const [jsonData, setJsonData] = useState("");
  const [image, setImage] = useState(false);
  const [price, setPrice] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const handleJsonChange = (e) => {
    setJsonData(e.target.value);
  };

  const handleSerialNumberChange = (e) => {
    setSerialNumber(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData); // Validate JSON data
      // console.log("parsed Data: ", parsedData);
      // console.log("Images: ", image);
      // console.log("Serial Number: ", serialNumber);
      // console.log("Price: ", price);

      const formData = new FormData();
      formData.append("jsonData", JSON.stringify(parsedData));
      formData.append("serialNumber", serialNumber);
      formData.append("price", price);
      formData.append("image", image);

      // Log the FormData entries
      // for (const entry of formData.entries()) {
      //   console.log(entry[0], entry[1]); // Check keys and values
      // }

      // Send JSON data to the backend
      const response = await axios.post(
        `${url}/api/laptop/addshowdown`,
        formData
      );

      if (response.data.success) {
        setJsonData("");
        setImage(false);
        setSerialNumber("");
        setPrice("");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.error("Submission error:", error);
      if (error.response) {
        toast.error(
          error.response.data.message ||
            "An error occurred while submitting the data."
        );
      } else {
        toast.error("An error occurred while submitting the data.");
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h2>Admin JSON Input</h2>
      <textarea
        value={jsonData}
        onChange={handleJsonChange}
        placeholder="Paste JSON data here"
        rows="25"
        className="border p-2 w-3/4"
      />

      <div className="flex gap-4 mt-4">
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt=""
            className="w-[14vw] h-[14vh] cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        {/* Serial Number Input */}
        <input
          type="text"
          value={serialNumber}
          onChange={handleSerialNumberChange}
          placeholder="Enter Serial Number"
          className="border p-2 mb-4"
        />
        {/* Price Input */}
        <input
          type="text"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter Price"
          className="border p-2 mb-4"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 text-white p-2"
      >
        Submit Data
      </button>
    </div>
  );
};

export default LaptopShowdown;