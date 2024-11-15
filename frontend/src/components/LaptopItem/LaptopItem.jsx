import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assests.js'
import { StoreContext } from '../../context/StoreContext.jsx'
import { toast } from "react-toastify";
import './LaptopItem.css'

const LaptopItem = ({id,serialNumber,name,price,description,image}) => {
    const { token, wishlistItems, markItem, unmarkItem, product_priceinfo, selectLaptop, selectLaptopCompare, selectedLaptopCompare, deselectLaptopCompare, url } = useContext(StoreContext)

    // Check if the current laptop is in the selected comparison list
    const isLaptopInCompare = selectedLaptopCompare.some(laptop => laptop.serialNumber === serialNumber);

    let displayPrice = price; // Fallback to the default price if no platform prices are available

    // Ensure product_priceinfo is available and contains data
    if (product_priceinfo && product_priceinfo.length > 0) {
        const laptopPriceInfo = product_priceinfo.find(item => Number(item.serialNumber) === Number(serialNumber));

        // Check if the laptop price info exists
        if (laptopPriceInfo && laptopPriceInfo.deal_body) {
            const { deal_body } = laptopPriceInfo; // Extract the deal_body
            const { flipkart, amazon } = deal_body; // Extract flipkart and amazon prices            

            // Set the price based on priority (Flipkart > Amazon)
            if (flipkart && flipkart.price) {
                displayPrice = flipkart.price.replace('₹', '').trim();; // If Flipkart price exists, use it
            } else if (amazon && amazon.price) {
                displayPrice = amazon.price.replace('₹', '').trim();; // If Flipkart price doesn't exist, use Amazon price
            }
        }
    }
    // console.log("Laptop Price info", product_priceinfo);   
    // console.log("Laptop ka display Price", displayPrice)

  return (
    <div className='laptop-item' onClick={() => {selectLaptop(serialNumber)}}>
        <div className="laptop-item-image-container">
            <img className='laptop-item-image' src={url+"/images/"+image} alt="" />
        </div>
        <div className="laptop-item-info">
            <div className="laptop-item-name-rating">
                <p>{name}</p>
                {!wishlistItems[serialNumber]
                    ? <img className='bookmarkno' onClick={(e) => {
                        // console.log(serialNumber)
                        e.stopPropagation(); // Prevent modal from opening
                        if (!token) {
                            toast.error('Please login to add to wishlist');
                            // alert("Please login to add to wishlist");
                            return;
                        }
                        markItem(serialNumber);
                    }} src={assets.bookno} alt="Save" />
                    : <img className='bookmarkyes' onClick={(e) => {
                        // console.log(serialNumber)
                        e.stopPropagation(); // Prevent modal from opening
                        unmarkItem(serialNumber);
                    }} src={assets.bookyes} alt="Saved" />
                }
            </div>
            <p className="laptop-item-desc text-[#e25168]">{description}</p>

            {/* Price and Button Container */}
            <div className="flex items-center justify-between">
                <p className="laptop-item-price"><strong className='pr-1'>&#8377;</strong>{displayPrice}</p>
                <button 
                    className={`px-2 py-2 rounded-lg text-white text-xs transition-all duration-300 
                        ${isLaptopInCompare ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isLaptopInCompare) {
                            // If the laptop is already in comparison, remove it
                            deselectLaptopCompare(serialNumber);
                            // console.log(`${name} removed from comparison`);
                        } else {
                            // Otherwise, add it to comparison
                            selectLaptopCompare(serialNumber);
                            // console.log(`${name} added to comparison`);
                        }
                    }}
                >
                    {isLaptopInCompare ? 'Added' : 'Add To Compare'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default LaptopItem