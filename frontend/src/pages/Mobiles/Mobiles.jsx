import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import MobileList from "../../components/MobileList/MobileList";

const Mobiles = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandFromURL = queryParams.get('brand') || 'All';
  const [filters, setFilters] = useState({
    price: "All",
    brand: brandFromURL,
    ram: "All",
    storage: "All",
    screenSize: "All",
    primaryCamera: "All",
    secondaryCamera: "All",
    processorBrand: "All",
    resolution: "All",
    network: "All",
  });

  // Handler for updating individual filter values
  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  // useEffect(() => {
  //   console.log(filters); // Log all filters at once
  // }, [filters]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);

  return (
    <div className="flex w-full gap-3 flex-col md:flex-row">
      {/* <!-- Filter Section --> */}
      <div className="w-full md:w-[20%] min-w-[250px] p-4 bg-gradient-to-r from-black to-gray-500 h-[30vh] md:h-auto overflow-y-auto rounded-lg">
        <div className="filter-section">
          <h2 className="text-orange-500 font-bold text-base mb-4">Filters</h2>

          {/* <!-- Price Filter --> */}
          <div className="filter-group mb-4">
            <label
              htmlFor="price"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Price Range
            </label>
            <select
              id="price"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.price}
              onChange={handleFilterChange}
            >
              <option value="All">Select Price Range</option>
              <option value="Under 10000">Under ₹10,000</option>
              <option value="10000-20000">₹10,000 - ₹20,000</option>
              <option value="20000-30000">₹20,000 - ₹30,000</option>
              <option value="30000-50000">₹30,000 - ₹50,000</option>
              <option value="50000-70000">₹50,000 - ₹70,000</option>
              <option value="70000-100000">₹70,000 - ₹1,00,000</option>
              <option value="Above 100000">Above ₹1,00,000</option>
            </select>
          </div>

          {/* <!-- Brand Filter --> */}
          <div className="filter-group mb-4">
            <label
              htmlFor="brand"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Brand
            </label>
            <select
              id="brand"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.brand}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Realme">Realme</option>
              <option value="Vivo">Vivo</option>
              <option value="Oppo">Oppo</option>
              <option value="Google">Google</option>
              <option value="Sony">Sony</option>
              <option value="Asus">Asus</option>
              <option value="Motorola">Motorola</option>
              <option value="Infinix">Infinix</option>
            </select>
          </div>

          {/* <!-- RAM Filter --> */}
          <div className="filter-group mb-4">
            <label
              htmlFor="ram"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              RAM
            </label>
            <select
              id="ram"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.ram}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
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

          {/* <!-- Storage Filter --> */}
          {/* <div className="filter-group mb-6">
            <label
              htmlFor="storage"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Storage
            </label>
            <select
              id="storage"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.storage}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
              <option value="1TB">1TB</option>
            </select>
          </div> */}

          {/* <!-- Screen Size Filter --> */}
          <div className="filter-group mb-6">
            <label
              htmlFor="screenSize"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Screen Size
            </label>
            <select
              id="screenSize"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.screenSize}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="5.0 inches">5.0 inches</option>
              <option value="5.5 inches">5.5 inches</option>
              <option value="6.0 inches">6.0 inches</option>
              <option value="6.2 inches">6.2 inches</option>
              <option value="6.5 inches">6.5 inches</option>
              <option value="6.7 inches">6.7 inches</option>
              <option value="6.9 inches">6.9 inches</option>
            </select>
          </div>

          {/* <!-- Primary Camera --> */}
          <div className="filter-group mb-4">
            <label
              htmlFor="primaryCamera"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Primary Camera
            </label>
            <select
              id="primaryCamera"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.primaryCamera}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="12MP">12 MP</option>
              <option value="16MP">16 MP</option>
              <option value="32MP">32 MP</option>
              <option value="48MP">48 MP</option>
              <option value="64MP">64 MP</option>
              <option value="108MP">108 MP</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* <!-- Secondary Camera --> */}
          <div className="filter-group mb-4">
            <label
              htmlFor="secondaryCamera"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Secondary Camera
            </label>
            <select
              id="secondaryCamera"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.secondaryCamera}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="2">2 MP</option>
              <option value="5">5 MP</option>
              <option value="8">8 MP</option>
              <option value="12">12 MP</option>
              <option value="20">20 MP</option>
              <option value="32">32 MP</option>
            </select>
          </div>

          {/* <!-- Processor Brand Filter --> */}
          <div className="filter-group mb-6">
            <label
              htmlFor="processorBrand"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Processor Brand
            </label>
            <select
              id="processorBrand"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.processorBrand}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="Qualcomm">Qualcomm</option>
              <option value="MediaTek">MediaTek</option>
              <option value="Exynos">Exynos (Samsung)</option>
              <option value="Apple">Apple</option>
              <option value="Google Tensor">Google Tensor</option>
            </select>
          </div>

          {/* <!-- Resolution Filter --> */}
          <div className="filter-group mb-6">
            <label
              htmlFor="resolution"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Display Type
            </label>
            <select
              id="resolution"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.resolution}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="AMOLED">AMOLED</option>
              <option value="IPS LCD">IPS LCD</option>
              <option value="OLED">OLED</option>
              <option value="Super AMOLED">Super AMOLED</option>
              <option value="LED">LED</option>
              <option value="PLS TFT">PLS TFT</option>
              <option value="TFT">TFT</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* <!-- Network Filter --> */}
          <div className="filter-group mb-6">
            <label
              htmlFor="network"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Network
            </label>
            <select
              id="network"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.network}
              onChange={handleFilterChange}
            >
              <option value="All" selected>
                Select
              </option>
              <option value="5G">5G</option>
              <option value="4G">4G</option>
              <option value="3G">3G</option>
              <option value="2G">2G</option>
            </select>
          </div>
        </div>
      </div>

      {/* <!-- Mobile List Section --> */}
      <div className="w-[80%] p-4 mx-auto">
        <MobileList filters={filters} />
      </div>
    </div>
  );
};

export default Mobiles;
