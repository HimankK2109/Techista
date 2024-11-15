import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import LaptopItem from "../LaptopItem/LaptopItem";
import MobileItem from "../MobileItem/MobileItem.jsx";
import { assets } from "../../assets/assests.js";

const UserWishlist = () => {
  const { wishlistItems, laptop_card, mobile_card } = useContext(StoreContext);

  // Merge both laptop and mobile items from wishlist into a single array
  const allWishlistItems = [
    ...laptop_card.filter(
      (item) => wishlistItems[item.serialNumber] && item.serialNumber.startsWith("1")
    ),
    ...mobile_card.filter(
      (item) => wishlistItems[item.serialNumber] && item.serialNumber.startsWith("2")
    ),
  ];

  return (
    <div className="flex flex-col gap-8 p-4 max-w-[75vw] mx-auto">
      <h2 className="text-3xl text-orange-500">Wishlist</h2>
      
      {allWishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <img
            src={assets.wishlist}
            alt="Empty Wishlist"
            className="w-full max-w-sm"
          />
          <p className="mt-4 text-lg text-gray-600">Your wishlist is currently empty.</p>
        </div>
      ) : (
        <div className="wishlist-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allWishlistItems.map((item, index) =>
            item.serialNumber.startsWith("1") ? (
              <LaptopItem
                id={item._id}
                serialNumber={item.serialNumber}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                key={index}
              />
            ) : (
              <MobileItem
                id={item._id}
                serialNumber={item.serialNumber}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
                key={index}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default UserWishlist;