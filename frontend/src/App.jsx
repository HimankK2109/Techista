import React, { useContext, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { StoreContext } from './context/StoreContext';
import Modal from './components/Modal/Modal';
import Mobiles from './pages/Mobiles/Mobiles';
import Laptops from './pages/Laptops/Laptops';
import ContactUs from './pages/ContactUs/ContactUs';
import ShowdownLaptops from './pages/Showdown/ShowdownLaptops';
import ShowdownMobiles from './pages/Showdown/ShowdownMobiles';
import LaptopDoc from './components/LaptopDoc/LaptopDoc';
import MobileDoc from './components/MobileDoc/MobileDoc';
import UserWishlist from './components/UserWishlist/UserWishlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";

const App = () => {
  const { showModal, setShowModal, resetSelections, token } = useContext(StoreContext);
  const location = useLocation();

  // Check if the current path is '/signin'
  const isSignInPage = location.pathname === '/signin';

  useEffect(() => {
    const handlePopState = () => {
      // Close the modal when navigating back
      if (showModal) {
        setShowModal(false);
        resetSelections();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showModal, setShowModal, resetSelections]);

  return (
    <div className='app'>
      {/* Only render Navbar and Footer if not on '/signin' route */}
      <ToastContainer />
      {!isSignInPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/laptops' element={<Laptops />} />
        <Route path='/categories/laptopdoc' element={<LaptopDoc />} />
        <Route path='/categories/mobiles' element={<Mobiles />} />
        <Route path='/categories/mobiledoc' element={<MobileDoc />} />
        <Route path='/showdown/laptops' element={<ShowdownLaptops />} />
        <Route path='/showdown/mobiles' element={<ShowdownMobiles />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/wishlist' element={<UserWishlist />} />
        <Route path='/signin' element={!token ? <Login /> : <Navigate to="/" replace />} />
      </Routes>
      {!isSignInPage && <Footer />}
      {showModal && <Modal onClose={() => { setShowModal(false); resetSelections(); }} />}
    </div>
  );
};

export default App;