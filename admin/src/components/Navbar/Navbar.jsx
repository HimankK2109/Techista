import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  const navigate = useNavigate();
  const arr = [
    "Laptop Card",
    "Laptop Modal",
    "List Laptops",
    "Laptop Showdown",
    "Mobile Card",
    "Mobile Modal",
    "List Mobiles",
    "Mobile Showdown",
  ];

  // const imgarr = [assets.CPU,assets.GPU,assets.RAM,assets.Storage,assets.Display,assets.Battery,assets.Connectivity,assets.Dolby,assets.Games,assets.Keyboard,assets.Benchmarks,assets.UsedFor,assets.RestSpec]
  const paths = [
    "/addlaptopcard",
    "/laptopmodal",
    "/listlaptops",
    "/laptopshowdown",
    "/addmobilecard",
    "/mobilemodal",
    "/listmobiles",
    "/mobileshowdown",
  ];

  return (
    <div className="flex flex-col">
      <div className="mx-auto p-6">
        <img src={assets.logo} alt="" className="h-28 w-60" />
      </div>

      <div className="flex flex-wrap gap-4">
        {arr.map((item, index) => (
          <div key={index} className="relative inline-block mx-auto">
            {/* Button with sliding image effect */}
            <button
              className="relative px-16 py-9 bg-[#2d1a3f] text-white font-bold rounded-lg overflow-hidden group"
              onClick={() => navigate(paths[index])}
            >
              {/* Button Text */}
              <span className="relative z-20 text">{item}</span>

              {/* The Hover Animation Image */}
              {/* <div className="absolute inset-0 w-full h-full transition-transform transform translate-x-[120%] group-hover:translate-x-0 duration-500 ease-out">
                <img src={imgarr[index]} alt={`${item} Image`} className="w-full h-full object-cover opacity-80" />
              </div> */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;