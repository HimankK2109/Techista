import React from "react";
import { assets } from "../../assets/assets.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LaptopCard = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    usage: "",
    brand: "",
    CPU_Brand: "",
    processor: "",
    gpu: "",
    ram: "",
    screenSize: "",
    operatingSystem: "",
    price: "",
    serialNumber: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  //   console.log("images of card", image);
  // }, [data, image]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("usage", data.usage);
    formData.append("brand", data.brand);
    formData.append("CPU_Brand", data.CPU_Brand);
    formData.append("processor", data.processor);
    formData.append("gpu", data.gpu);
    formData.append("ram", data.ram);
    formData.append("screenSize", data.screenSize);
    formData.append("operatingSystem", data.operatingSystem);
    formData.append("price", Number(data.price));
    formData.append("serialNumber", data.serialNumber);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/laptop/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        usage: "",
        brand: "",
        CPU_Brand: "",
        processor: "",
        gpu: "",
        ram: "",
        screenSize: "",
        operatingSystem: "",
        price: "",
        serialNumber: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="w-[70%] mx-auto mt-12 text-gray-600 text-base flex gap-5">
      {/* Left compartment for image */}
      <div className="flex flex-col items-center justify-center w-1/2">
        <p className="text-2xl text-orange-500 pb-5">Upload image</p>

        {/* Image Part */}
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt=""
            className="w-[320px] h-[320px] cursor-pointer mb-56"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
      </div>

      {/* Right compartment for product information */}
      <form className="flex flex-col gap-5 w-1/2" onSubmit={onSubmitHandler}>
        {/* Serial Number */}
        <div className="flex flex-col">
          <p className="text-orange-500">Serial Number</p>
          <input
            type="text"
            name="serialNumber"
            placeholder="Type Here"
            onChange={onChangeHandler}
            value={data.serialNumber}
            className="p-2 text-white border border-gray-300 rounded"
            required
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <p className="text-orange-500">Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type Here"
            onChange={onChangeHandler}
            value={data.name}
            className="p-2 text-white border border-gray-300 rounded"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <p className="text-orange-500">Product Description</p>
          <textarea
            name="description"
            rows="2"
            placeholder="Write Content Here"
            required
            onChange={onChangeHandler}
            value={data.description}
            className="p-2 border text-white border-gray-300 rounded"
          ></textarea>
        </div>

        <div className="flex flex-wrap gap-7">
          {/* Usage */}
          <div className="flex flex-col">
            <p className="text-orange-500">Usage</p>
            <select
              onChange={onChangeHandler}
              name="usage"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="Gaming">Gaming</option>
              <option value="Thin and Light">Thin and Light</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Brand */}
          <div className="flex flex-col">
            <p className="text-orange-500">Brand</p>
            <select
              onChange={onChangeHandler}
              name="brand"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="ASUS">ASUS</option>
              <option value="Acer">Acer</option>
              <option value="Samsung">Samsung</option>
              <option value="Lenovo">Lenovo</option>
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="MSI">MSI</option>
              <option value="Apple">Apple</option>
              <option value="Infinix">Infinix</option>
              <option value="Colorful">Colorful</option>
            </select>
          </div>

          {/* CPU Brand */}
          <div className="flex flex-col">
            <p className="text-orange-500">CPU Brand</p>
            <select
              onChange={onChangeHandler}
              name="CPU_Brand"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="Intel">Intel</option>
              <option value="AMD">AMD</option>
              <option value="Apple">Apple</option>
            </select>
          </div>

          {/* Processor */}
          <div className="flex flex-col">
            <p className="text-orange-500">Processor</p>
            <select
              onChange={onChangeHandler}
              name="processor"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="Intel Core i3">Intel Core i3</option>
              <option value="Intel Core i5">Intel Core i5</option>
              <option value="Intel Core i7">Intel Core i7</option>
              <option value="Intel Core i9">Intel Core i9</option>
              <option value="AMD Ryzen 3">AMD Ryzen 3</option>
              <option value="AMD Ryzen 5">AMD Ryzen 5</option>
              <option value="AMD Ryzen 7">AMD Ryzen 7</option>
              <option value="AMD Ryzen 9">AMD Ryzen 9</option>
              <option value="Apple M1">Apple M1</option>
              <option value="Apple M2">Apple M2</option>
            </select>
          </div>

          {/* GPU */}
          <div className="flex flex-col">
            <p className="text-orange-500">GPU</p>
            <select
              onChange={onChangeHandler}
              name="gpu"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              {/* NVIDIA GTX and RTX Series */}
              <option value="Integrated GPU">Integrated GPU</option>
              <option value="NVIDIA RTX 2050">NVIDIA RTX 2050</option>
              <option value="NVIDIA RTX 3050">NVIDIA RTX 3050</option>
              <option value="NVIDIA RTX 3060">NVIDIA RTX 3060</option>
              <option value="NVIDIA RTX 3070">NVIDIA RTX 3070</option>
              <option value="NVIDIA RTX 3080">NVIDIA RTX 3080</option>
              <option value="NVIDIA RTX 3090">NVIDIA RTX 3090</option>
              <option value="NVIDIA RTX 4050">NVIDIA RTX 4050</option>
              <option value="NVIDIA RTX 4060">NVIDIA RTX 4060</option>
              <option value="NVIDIA RTX 4070">NVIDIA RTX 4070</option>
              <option value="NVIDIA RTX 4080">NVIDIA RTX 4080</option>
              <option value="NVIDIA RTX 4090">NVIDIA RTX 4090</option>

              {/* AMD Radeon RX Series */}
              <option value="AMD Radeon RX 5500M">AMD Radeon RX 5500M</option>
              <option value="AMD Radeon RX 5600M">AMD Radeon RX 5600M</option>
              <option value="AMD Radeon RX 5700M">AMD Radeon RX 5700M</option>
              <option value="AMD Radeon RX 6600M">AMD Radeon RX 6600M</option>
              <option value="AMD Radeon RX 6700M">AMD Radeon RX 6700M</option>
              <option value="AMD Radeon RX 6800M">AMD Radeon RX 6800M</option>
              <option value="AMD Radeon RX 6900M">AMD Radeon RX 6900M</option>
            </select>
          </div>

          {/* RAM Capacity */}
          <div className="flex flex-col">
            <p className="text-orange-500">RAM Capacity</p>
            <select
              onChange={onChangeHandler}
              name="ram"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="4GB">4GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              <option value="16GB">16GB</option>
              <option value="24GB">24GB</option>
              <option value="32GB">32GB</option>
            </select>
          </div>

          {/* Screen Size */}
          <div className="flex flex-col">
            <p className="text-orange-500">Screen Size</p>
            <select
              onChange={onChangeHandler}
              name="screenSize"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="13.3 inches">13.6 inches</option>
              <option value="14 inches">14 inches</option>
              <option value="15.6 inches">15.6 inches</option>
              <option value="16 inches">16 inches</option>
              <option value="17.3 inches">17.3 inches</option>
            </select>
          </div>

          {/* Operating System */}
          <div className="flex flex-col">
            <p className="text-orange-500">Operating System</p>
            <select
              onChange={onChangeHandler}
              name="operatingSystem"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="Windows 10">Windows 10</option>
              <option value="Windows 11">Windows 11</option>
              <option value="macOS">macOS</option>
            </select>
          </div>

          {/* Product Price */}
          <div className="flex flex-col">
            <p className="text-orange-500">Product Price</p>
            <input
              type="number"
              name="price"
              placeholder="₹20"
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="max-w-[120px] border-none p-2 bg-orange-900 hover:bg-orange-500  text-white cursor-pointer rounded"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default LaptopCard;
