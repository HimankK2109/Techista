import React, { useContext } from 'react'
import { assets } from '../../assets/assests.js';
import { StoreContext } from '../../context/StoreContext.jsx'
import { toast } from "react-toastify";
import './MobileItem.css'

const MobileItem = ({id,serialNumber,name,price,description,image}) => {
    const { token, wishlistItems, markItem, unmarkItem, product_priceinfo, selectMobile, selectMobileCompare, selectedMobileCompare, deselectMobileCompare, url } = useContext(StoreContext)

    // Check if the current mobile is in the selected comparison list
    const isMobileInCompare = selectedMobileCompare.some(mobile => mobile.serialNumber === serialNumber);

    let displayPrice = price; // Fallback to the default price if no platform prices are available

    // Ensure product_priceinfo is available and contains data
    if (product_priceinfo && product_priceinfo.length > 0) {
        const mobilePriceInfo = product_priceinfo.find(item => Number(item.serialNumber) === Number(serialNumber));

        // Check if the laptop price info exists
        if (mobilePriceInfo && mobilePriceInfo.deal_body) {
            const { deal_body } = mobilePriceInfo; // Extract the deal_body
            const { flipkart, amazon } = deal_body; // Extract flipkart and amazon prices            

            // Set the price based on priority (Flipkart > Amazon)
            if (flipkart && flipkart.price) {
                displayPrice = flipkart.price.replace('₹', '').trim();; // If Flipkart price exists, use it
            } else if (amazon && amazon.price) {
                displayPrice = amazon.price.replace('₹', '').trim();; // If Flipkart price doesn't exist, use Amazon price
            }
        }
    }

    return (
      <div className='mobile-item' onClick={() => {selectMobile(serialNumber)}}>
          <div className="mobile-item-image-container">
              <img className='mobile-item-image object-contain' src={url+"/images/"+image} alt="" />
          </div>
          <div className="mobile-item-info">
                <div className="mobile-item-name-rating">
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
                <p className="mobile-item-desc text-[#e25168]">{description}</p>

                {/* Price and Button Container */}
                <div className="flex items-center justify-between">
                    <p className="mobile-item-price"><strong>&#8377;</strong>{displayPrice}</p>
                    <button 
                    className={`px-2 py-2 rounded-lg text-white text-xs transition-all duration-300 
                        ${isMobileInCompare ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isMobileInCompare) {
                            // If the mobile is already in comparison, remove it
                            deselectMobileCompare(serialNumber);
                            // console.log(`${name} removed from comparison`);
                        } else {
                            // Otherwise, add it to comparison
                            selectMobileCompare(serialNumber);
                            // console.log(`${name} added to comparison`);
                        }
                    }}
                >
                    {isMobileInCompare ? 'Added' : 'Add To Compare'}
                </button>
                </div>
          </div>
      </div>
    )
}

export default MobileItem