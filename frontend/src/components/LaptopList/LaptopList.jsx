import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import LaptopItem from "../LaptopItem/LaptopItem";
import "./LaptopList.css";

const LaptopList = ({ filters }) => {
  const { laptop_card } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  // console.log("laptop_card:", laptop_card); // Log the laptop_card to check the content

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const filteredItems = laptop_card.filter((item) => {
    const priceString = String(item.price);
    // Now you can safely use replace
    const cleanedPrice = priceString.replace(/[^0-9]/g, ""); // Removes non-numeric characters like ₹

    // Convert the cleaned price back to a number
    const price = parseInt(cleanedPrice, 10);
    const isPriceMatch =
      filters.price === "All" ||
      (filters.price === "Under 50000" && price < 50000) ||
      (filters.price === "50000-100000" && price >= 50000 && price <= 100000) ||
      (filters.price === "100000-150000" &&
        price > 100000 &&
        price <= 150000) ||
      (filters.price === "Above 150000" && price > 150000);

    const isUsageMatch =
      filters.usage === "All" || filters.usage === item.usage;
    const isBrandMatch =
      filters.brand === "All" || filters.brand === item.brand;
    const isProcessorBrandMatch =
      filters.processorBrand === "All" ||
      filters.processorBrand === item.CPU_Brand;
    const isProcessorMatch =
      filters.processor === "All" || filters.processor === item.processor;
    const isGpuMatch = filters.gpu === "All" || filters.gpu === item.gpu;
    const isRamMatch = filters.RAM === "All" || filters.RAM === item.ram;
    const isScreenSizeMatch =
      filters.screenSize === "All" || filters.screenSize === item.screenSize;
    const isOsMatch =
      filters.OS === "All" || filters.OS === item.operatingSystem;

    return (
      isPriceMatch &&
      isUsageMatch &&
      isBrandMatch &&
      isProcessorBrandMatch &&
      isProcessorMatch &&
      isGpuMatch &&
      isRamMatch &&
      isScreenSizeMatch &&
      isOsMatch
    );
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIdx, startIdx + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="laptop-display" id="laptop-display">
      <h2>Top Laptops</h2>
      <div className="laptop-display-list">
        {paginatedItems.map((item, index) => (
          <LaptopItem
            id={item._id}
            serialNumber={item.serialNumber}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            key={index}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LaptopList;