import React from "react"
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import LaptopCard from "./components/LaptopCard/LaptopCard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListLaptops from "./components/ListLaptops/ListLaptops";
import LaptopModalData from "./components/LaptopModal/LaptopModalData";
import LaptopShowdown from "./components/LaptopShowdown/LaptopShowdown";
import MobileCard from "./components/MobileCard/MobileCard";
import MobileModal from "./components/MobileModal/MobileModal";
import ListMobiles from "./components/ListMobiles/ListMobiles";
import MobileShowdown from "./components/MobileShowdown/MobileShowdown";

function App() {
  const url = "https://techista-backend.onrender.com";

  return (
    <>
    <ToastContainer/>
    <Navbar />
      <div className="flex">
        <Routes>
          <Route path='/addlaptopcard' element={<LaptopCard url={url}/>} />
          <Route path='/listlaptops' element={<ListLaptops url={url}/>} />
          <Route path='/laptopmodal' element={<LaptopModalData url={url}/>} />
          <Route path='/laptopshowdown' element={<LaptopShowdown url={url}/>} />
          <Route path='/addmobilecard' element={<MobileCard url={url}/>} />
          <Route path='/listmobiles' element={<ListMobiles url={url}/>} />
          <Route path='/mobilemodal' element={<MobileModal url={url}/>} />
          <Route path='/mobileshowdown' element={<MobileShowdown url={url}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
