import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assests";

const ShowdownMobiles = () => {
  const { selectedMobileCompare, url, product_priceinfo } = useContext(StoreContext);
  // console.log("Mobile Data coming from DB: ", selectedMobileCompare);

  const parsedData = selectedMobileCompare
    .map((mobile) => {
      try {
        // console.log("Raw JSON Data for Mobile:", mobile.jsonData.jsonData);
        return {
          ...mobile,
          parsedJsonData: JSON.parse(mobile.jsonData.jsonData),
        };
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        return null;
      }
    })
    .filter(Boolean);

  useEffect(() => {
    // console.log("Mobile Showdown Data from DB:", selectedMobileCompare);
    // console.log("ShowDown ka parsed data mobile", parsedData);
  }, [selectedMobileCompare, parsedData]);

  const getLaptopPrice = (serialNumber) => {
    let displayPrice = "N/A";
    if (product_priceinfo && product_priceinfo.length > 0) {
      const laptopPriceInfo = product_priceinfo.find(
        (item) => Number(item.serialNumber) === Number(serialNumber)
      );

      if (laptopPriceInfo && laptopPriceInfo.deal_body) {
        const { deal_body } = laptopPriceInfo;
        const { flipkart, amazon } = deal_body;
        if (flipkart && flipkart.price) {
          displayPrice = flipkart.price.replace("₹", "").trim();
        } else if (amazon && amazon.price) {
          displayPrice = amazon.price.replace("₹", "").trim();
        }
      }
    }
    return displayPrice;
  };

  if (!Array.isArray(selectedMobileCompare) || selectedMobileCompare.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <img src={assets.showdown} alt="No mobiles" className="w-1/2 max-w-xs mb-4" />
        <p className="text-lg text-gray-600">No mobiles selected for comparison.</p>
      </div>
    );
  }

  if (selectedMobileCompare.length === 1) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <img src={assets.showdown} alt="Not enough mobiles" className="w-1/2 max-w-xs mb-4" />
        <p className="text-lg text-gray-600">You have added only 1 mobile. Please add at least one more for a showdown.</p>
      </div>
    );
  }

  const specKeys = parsedData.length > 0 ? Object.keys(parsedData[0].parsedJsonData.spec) : [];

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-[70vw] w-full mx-auto table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2 text-left">Image</th>
            {parsedData.map((mobile, index) => (
              <th key={index} className="border px-2 py-1 md:px-4 md:py-2 text-center">
                <img
                  src={`${url}/images/${mobile.image}`}
                  alt="Hello"
                  className="mx-auto w-30 h-30 md:w-30 md:h-30"
                />
              </th>
            ))}
          </tr>

          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2 text-left">Specifications</th>
            {parsedData.map((mobile, index) => (
              <th key={index} className="border px-2 py-1 md:px-4 md:py-2 text-center text-sm md:text-base">
                {mobile.parsedJsonData.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2 text-left">Price</th>
            {parsedData.map((mobile, index) => {
              const price = getLaptopPrice(mobile.serialNumber);
              return (
                <th key={index} className="border px-2 py-1 md:px-4 md:py-2 text-center">
                  {price}
                </th>
              );
            })}
          </tr>
          {specKeys.map((key, index) => (
            <tr key={index}>
              <td className="border px-2 py-1 md:px-4 md:py-2 font-bold text-sm md:text-base max-w-[20vw]">
                {key.replace(/_/g, " ")}
              </td>
              {parsedData.map((mobile, idx) => (
                <td key={idx} className="border px-2 py-1 md:px-4 md:py-2 text-center text-sm md:text-base max-w-[20vw]">
                  {mobile.parsedJsonData.spec[key] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowdownMobiles;