import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assests";

const ShowdownLaptops = () => {
  const { selectedLaptopCompare, url, product_priceinfo } = useContext(StoreContext);

  const parsedData = selectedLaptopCompare
    .map((laptop) => {
      try {
        return {
          ...laptop,
          parsedJsonData: JSON.parse(laptop.jsonData.jsonData),
        };
      } catch (error) {
        console.error("Error parsing JSON data:", error);
        return null;
      }
    })
    .filter(Boolean);

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

  if (!Array.isArray(selectedLaptopCompare) || selectedLaptopCompare.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <img src={assets.showdown} alt="No laptops" className="w-1/2 max-w-xs mb-4" />
        <p className="text-lg text-gray-600">No laptops selected for comparison.</p>
      </div>
    );
  }

  if (selectedLaptopCompare.length === 1) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <img src={assets.showdown} alt="Not enough laptops" className="w-1/2 max-w-xs mb-4" />
        <p className="text-lg text-gray-600">You have added only 1 laptop. Please add at least one more for a showdown.</p>
      </div>
    );
  }

  const specKeys = parsedData.length > 0 ? Object.keys(parsedData[0].parsedJsonData.spec) : [];

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-[70vw] w-full mx-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2 text-left">Image</th>
            {parsedData.map((laptop, index) => (
              <th key={index} className="border px-2 py-1 md:px-4 md:py-2 text-center">
                <img
                  src={`${url}/images/${laptop.image}`}
                  alt=""
                  className="mx-auto w-30 h-30 md:w-30 md:h-30"
                />
              </th>
            ))}
          </tr>

          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2 text-left">Specifications</th>
            {parsedData.map((laptop, index) => (
              <th key={index} className="border px-2 py-1 md:px-4 md:py-2 text-center text-sm md:text-base">
                {laptop.parsedJsonData.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border px-2 py-1 md:px-4 md:py-2 text-left">Price</th>
            {parsedData.map((laptop, index) => {
              const price = getLaptopPrice(laptop.serialNumber);
              return (
                <th key={index} className="border px-2 py-1 md:px-4 md:py-2 text-center">
                  {price}
                </th>
              );
            })}
          </tr>
          {specKeys.map((key, index) => (
            <tr key={index}>
              <td className="border px-2 py-1 md:px-4 md:py-2 font-bold text-sm md:text-base">
                {key.replace(/_/g, " ")}
              </td>
              {parsedData.map((laptop, idx) => (
                <td key={idx} className="border px-2 py-1 md:px-4 md:py-2 text-center text-sm md:text-base">
                  {laptop.parsedJsonData.spec[key] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowdownLaptops;