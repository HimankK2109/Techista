import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";

const LaptopModalData = ({ url }) => {
  const [jsonData, setJsonData] = useState("");
  const [images, setImages] = useState(Array(5).fill(null));
  const [serialNumber, setSerialNumber] = useState("");

  // Create refs for each file input
  const imageRefs = useRef([]);

  const handleJsonChange = (e) => {
    setJsonData(e.target.value);
  };

  const handleImageChange = (index, file) => {
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };

  const handleSerialNumberChange = (e) => {
    setSerialNumber(e.target.value); // Update serial number state
  };

  const handleSubmit = async () => {
    try {
      const parsedData = JSON.parse(jsonData); // Validate JSON data
      // console.log("parsed Data: ", parsedData);
      // console.log("Images: ", images);
      // console.log("Serial Number: ", serialNumber);

      const formData = new FormData();
      formData.append("jsonData", JSON.stringify(parsedData));
      formData.append("serialNumber", serialNumber);

      // Append images to formData
      images.forEach((image) => {
        if (image) {
          formData.append("images", image);
        }
      });

      // Log the FormData entries
      // for (const entry of formData.entries()) {
      //   console.log(entry[0], entry[1]); // Check keys and values
      // }

      // Send JSON data to the backend
      const response = await axios.post(
        `${url}/api/laptop/addlaptopmodal`,
        formData
      );
      if (response.data.success) {
        setJsonData("");
        setImages(Array(5).fill(null));
        setSerialNumber("");

        // Reset each file input field
        imageRefs.current.forEach((ref) => {
          if (ref) ref.value = null;
        });

        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // console.error("Submission error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "An error occurred while submitting the data.");
      } else {
        toast.error("An error occurred while submitting the data.");
      }
    }
  };

  return (
    <div className="flex flex-col">
      <h2>Admin JSON Input</h2>
      <textarea
        value={jsonData}
        onChange={handleJsonChange}
        placeholder="Paste JSON data here"
        rows="50"
        cols="8"
        className="border p-2"
      />
      <div className="flex mx-auto flex-wrap gap-4 mt-4">
        {/* Serial Number Input */}
        <input
          type="text"
          value={serialNumber}
          onChange={handleSerialNumberChange}
          placeholder="Enter Serial Number"
          className="border p-2 mb-4"
        />
        {[...Array(5)].map((_, index) => (
          <input
            key={index}
            type="file"
            ref={(el) => (imageRefs.current[index] = el)}
            onChange={(e) => handleImageChange(index, e.target.files[0])}
            className="mb-2"
          />
        ))}
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

export default LaptopModalData;