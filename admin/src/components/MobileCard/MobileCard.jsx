import React from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const MobileCard = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    brand: "",
    ram: "",
    storage: "",
    screenSize: "",
    primaryCamera: "",
    secondaryCamera: "",
    processorBrand: "",
    resolution: "",
    network: "",
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
    formData.append("brand", data.brand);
    formData.append("ram", data.ram);
    formData.append("storage", data.storage);
    formData.append("screenSize", data.screenSize);
    formData.append("primaryCamera", data.primaryCamera);
    formData.append("secondaryCamera", data.secondaryCamera);
    formData.append("processorBrand", data.processorBrand);
    formData.append("resolution", data.resolution);
    formData.append("network", data.network);
    formData.append("price", Number(data.price));
    formData.append("serialNumber", data.serialNumber);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/mobile/addmobile`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        brand: "",
        ram: "",
        storage: "",
        screenSize: "",
        primaryCamera: "",
        secondaryCamera: "",
        processorBrand: "",
        resolution: "",
        network: "",
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
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Realme">Realme</option>
              <option value="IQOO">IQOO</option>
              <option value="Vivo">Vivo</option>
              <option value="Oppo">Oppo</option>
              <option value="Google">Google</option>
              <option value="Sony">Sony</option>
              <option value="Asus">Asus</option>
              <option value="Motorola">Motorola</option>
              <option value="Infinix">Infinix</option>
              <option value="Nothing">Nothing</option>
            </select>
          </div>

          {/* Ram */}
          <div className="flex flex-col">
            <p className="text-orange-500">RAM</p>
            <select
              onChange={onChangeHandler}
              name="ram"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="4GB">4GB</option>
              <option value="6GB">6GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              <option value="16GB">16GB</option>
              <option value="18GB">18GB</option>
            </select>
          </div>

          {/* Storage */}
          <div className="flex flex-col">
            <p className="text-orange-500">Storage</p>
            <select
              onChange={onChangeHandler}
              name="storage"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
              <option value="1TB">1TB</option>
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
              <option value="5.0 inches">5.0 inches</option>
              <option value="5.5 inches">5.5 inches</option>
              <option value="6.0 inches">6.0 inches</option>
              <option value="6.2 inches">6.2 inches</option>
              <option value="6.1 inches">6.1 inches</option>
              <option value="6.3 inches">6.3 inches</option>
              <option value="6.4 inches">6.4 inches</option>
              <option value="6.5 inches">6.5 inches</option>
              <option value="6.6 inches">6.6 inches</option>
              <option value="6.67 inches">6.67 inches</option>
              <option value="6.7 inches">6.7 inches</option>
              <option value="6.9 inches">6.9 inches</option>
            </select>
          </div>

          {/* Primary Camera */}
          <div className="flex flex-col">
            <p className="text-orange-500">Primary Camera</p>
            <select
              onChange={onChangeHandler}
              name="primaryCamera"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="12MP">12 MP</option>
              <option value="16MP">16 MP</option>
              <option value="32MP">32 MP</option>
              <option value="48MP">48 MP</option>
              <option value="50MP">50MP</option>
              <option value="64MP">64 MP</option>
              <option value="108MP">108 MP</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Secondary Camera */}
          <div className="flex flex-col">
            <p className="text-orange-500">Secondary Camera</p>
            <select
              onChange={onChangeHandler}
              name="secondaryCamera"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="2">2 MP</option>
              <option value="5">5 MP</option>
              <option value="8">8 MP</option>
              <option value="12">12 MP</option>
              <option value="13">13 MP</option>
              <option value="16">16 MP</option>
              <option value="20">20 MP</option>
              <option value="32">32 MP</option>
              <option value="42">42 MP</option>
              <option value="50">50 MP</option>
            </select>
          </div>

          {/* Processor Brand */}
          <div className="flex flex-col">
            <p className="text-orange-500">Processor Brand</p>
            <select
              onChange={onChangeHandler}
              name="processorBrand"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="Qualcomm">Qualcomm</option>
              <option value="MediaTek">MediaTek</option>
              <option value="Unisoc">Unisoc</option>
              <option value="Exynos">Exynos (Samsung)</option>
              <option value="Apple">Apple</option>
              <option value="Google Tensor">Google Tensor</option>
            </select>
          </div>

          {/* Resolution */}
          <div className="flex flex-col">
            <p className="text-orange-500">Resolution</p>
            <select
              onChange={onChangeHandler}
              name="resolution"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="AMOLED">AMOLED</option>
              <option value="IPS LCD">IPS LCD</option>
              <option value="HD+">HD+</option>
              <option value="Full HD+">Full HD+</option>
              <option value="Super HD">Super HD</option>
              <option value="Super HD+">Super HD+</option>
              <option value="OLED">OLED</option>
              <option value="Super AMOLED">Super AMOLED</option>
              <option value="LED">LED</option>
              <option value="PLS TFT">PLS TFT</option>
              <option value="TFT">TFT</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Network */}
          <div className="flex flex-col">
            <p className="text-orange-500">Network</p>
            <select
              onChange={onChangeHandler}
              name="network"
              className="max-w-[120px] p-2 border text-white border-gray-300 rounded"
            >
              <option value="" selected>
                Select
              </option>
              <option value="5G">5G</option>
              <option value="4G">4G</option>
              <option value="3G">3G</option>
              <option value="2G">2G</option>
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

export default MobileCard;