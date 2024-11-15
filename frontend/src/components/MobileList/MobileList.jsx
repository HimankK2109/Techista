import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import MobileItem from '../MobileItem/MobileItem';
import './MobileList.css';

const MobileList = ({ filters }) => {
  const { mobile_card } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  // console.log("Card ka data", mobile_card);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const filteredItems = mobile_card.filter((item) => {
    const priceString = String(item.price); 
    // Now you can safely use replace
    const cleanedPrice = priceString.replace(/[^0-9]/g, ''); // Removes non-numeric characters like ₹

    // Convert the cleaned price back to a number
    const price = parseInt(cleanedPrice, 10); 
    const isPriceMatch =
      filters.price === "All" ||
      (filters.price === "Under 10000" && price < 10000) ||
      (filters.price === "10000-20000" && price >= 10000 && price <= 20000) ||
      (filters.price === "20000-30000" && price > 20000 && price <= 30000) ||
      (filters.price === "30000-50000" && price > 30000 && price <= 50000) ||
      (filters.price === "50000-70000" && price > 50000 && price <= 70000) ||
      (filters.price === "70000-100000" && price > 70000 && price <= 100000) ||
      (filters.price === "Above 100000" && price > 100000);
    
    const isBrandMatch = filters.brand === "All" || filters.brand === item.brand;
    const isRamMatch = filters.ram === "All" || filters.ram === item.ram;
    const isScreenSizeMatch = filters.screenSize === "All" || filters.screenSize === item.screenSize;
    const isPrimaryCameraMatch = filters.primaryCamera === "All" || filters.primaryCamera === item.primaryCamera;
    const isSecondaryCameraMatch = filters.secondaryCamera === "All" || filters.secondaryCamera === item.secondaryCamera;
    const isProcessorBrandMatch = filters.processorBrand === "All" || filters.processorBrand === item.processorBrand;
    const isResolutionMatch = filters.resolution === "All" || filters.resolution === item.resolution;
    const isNetworkMatch = filters.network === "All" || filters.network === item.network;

    return (
      isPriceMatch &&
      isBrandMatch &&
      isRamMatch &&
      isScreenSizeMatch &&
      isPrimaryCameraMatch &&
      isSecondaryCameraMatch &&
      isProcessorBrandMatch &&
      isResolutionMatch &&
      isNetworkMatch
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
    <div className='mobile-display' id='mobile-display'>
      <h2>Top Mobiles</h2>
      <div className="mobile-display-list">
        {paginatedItems.map((item, index) => (
          <MobileItem
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
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default MobileList;