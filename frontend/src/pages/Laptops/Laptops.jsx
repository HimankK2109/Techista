import React, { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import LaptopList from "../../components/LaptopList/LaptopList";

const Laptops = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandFromURL = queryParams.get('brand') || 'All';

  // Using a single object to manage all filters
  const [filters, setFilters] = useState({
    price: "All",
    usage: "All",
    brand: brandFromURL,
    processorBrand: "All",
    processor: "All",
    gpu: "All",
    RAM: "All",
    screenSize: "All",
    OS: "All",
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
      {/* Filter Section */}
      <div className="w-full md:w-[20%] min-w-[250px] p-4 bg-gradient-to-r from-black to-gray-500 h-[30vh] md:h-auto overflow-y-auto rounded-lg">
        <div className="filter-section">
          <h2 className="text-orange-500 font-bold text-base mb-4">Filters</h2>

          {/* Price Filter */}
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
              <option value="Under 50000">Under ₹50,000</option>
              <option value="50000-100000">₹50,000 - ₹1,00,000</option>
              <option value="100000-150000">₹1,00,000 - ₹1,50,000</option>
              <option value="Above 150000">Above ₹1,50,000</option>
            </select>
          </div>

          {/* Usage Filter */}
          <div className="filter-group mb-4">
            <label
              htmlFor="usage"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Usage
            </label>
            <select
              id="usage"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.usage}
              onChange={handleFilterChange}
            >
              <option value="All">Select Usage</option>
              <option value="Gaming">Gaming</option>
              <option value="Thin and Light">Thin and Light</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Brand Filter */}
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
              <option value="All">Select Brand</option>
              <option value="ASUS">ASUS</option>
              <option value="Acer">Acer</option>
              <option value="Lenovo">Lenovo</option>
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="MSI">MSI</option>
              <option value="Apple">Apple</option>
              <option value="Infinix">Infinix</option>
              <option value="Colorful">Colorful</option>
            </select>
          </div>

          {/* Processor Brand Filter */}
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
              <option value="All">Select Processor Brand</option>
              <option value="Intel">Intel</option>
              <option value="AMD">AMD</option>
              <option value="Apple">Apple</option>
            </select>
          </div>

          {/* Processor Filter */}
          <div className="filter-group mb-6">
            <label
              htmlFor="processor"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Processor
            </label>
            <select
              id="processor"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.processor}
              onChange={handleFilterChange}
            >
              <option value="All">Select Processor</option>
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

          {/* GPU Filter */}
          <div className="filter-group mb-6">
            <label
              htmlFor="gpu"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Graphical Processor Unit
            </label>
            <select
              id="gpu"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.gpu}
              onChange={handleFilterChange}
            >
              <option value="All">Select Graphical Processor</option>
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

          {/* RAM Filter */}
          <div className="filter-group mb-4">
            <label
              htmlFor="RAM"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              RAM
            </label>
            <select
              id="RAM"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.RAM}
              onChange={handleFilterChange}
            >
              <option value="All">Select RAM</option>
              <option value="4GB">4GB</option>
              <option value="8GB">8GB</option>
              <option value="12GB">12GB</option>
              <option value="16GB">16GB</option>
              <option value="24GB">24GB</option>
              <option value="32GB">32GB</option>
            </select>
          </div>

          {/* Screen Size Filter */}
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
              <option value="All">Select Screen Size</option>
              <option value="13.3 inches">13.3 inches</option>
              <option value="14 inches">14 inches</option>
              <option value="15.6 inches">15.6 inches</option>
              <option value="16 inches">16 inches</option>
              <option value="17.3 inches">17.3 inches</option>
            </select>
          </div>

          {/* OS Filter */}
          <div className="filter-group mb-6">
            <label
              htmlFor="OS"
              className="block text-orange-500 font-semibold mb-2 text-sm"
            >
              Operating System
            </label>
            <select
              id="OS"
              className="filter-dropdown w-full p-2 border border-gray-300 rounded-md text-xs"
              value={filters.OS}
              onChange={handleFilterChange}
            >
              <option value="All">Select OS</option>
              <option value="Windows 10">Windows 10</option>
              <option value="Windows 11">Windows 11</option>
              <option value="macOS">macOS</option>
            </select>
          </div>
        </div>
      </div>

      {/* Laptop List Section */}
      <div className="w-[80%] p-4 mx-auto">
        {/* LaptopList Component */}
        <LaptopList filters={filters} />
      </div>
    </div>

  );
};

export default Laptops;