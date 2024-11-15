import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assests.js'
import { Link, useLocation, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx'

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(StoreContext)

  const location = useLocation();
  const isCategoriesActive = location.pathname.startsWith('/categories');
  const isShowdownActive = location.pathname.startsWith('/showdown');

  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isShowdownOpen, setShowdownOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='p-4 lg:p-0 navbar flex items-center justify-between w-[95vw] lg:w-[70vw] mx-auto'>

      <Link to='/'><img src={assets.logo} alt="" className='relative w-[140px]'/></Link>

      {/* Hamburger Icon for Small Screens */}
      <div className="block md:hidden lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu className="text-white h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-2/3 bg-[#1B1212] z-20 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button className="text-white m-4" onClick={() => setIsMenuOpen(false)}>Close</button>
        <ul className="flex flex-col gap-4 p-4 text-white text-[17px]">

          <NavLink to="/" onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => isActive ? 'text-[#f97316]' : 'text-white'}
          >
            <li>Home</li>
          </NavLink>

          <li onClick={() => setCategoriesOpen(!isCategoriesOpen)}>
            <span className={`text-white ${isCategoriesActive ? 'text-[#f97316]' : ''}`}>Categories<span className='inline-block w-0 h-0 ml-2 align-middle border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-white'></span></span>
            {isCategoriesOpen && (
              <ul className="ml-4">
                <li><Link to="/categories/laptopdoc" onClick={() => setIsMenuOpen(false)}>Laptops</Link></li>
                <li><Link to="/categories/mobiledoc" onClick={() => setIsMenuOpen(false)}>Mobiles</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => setShowdownOpen(!isShowdownOpen)}>
            <span className={`text-white ${isShowdownActive ? 'text-[#f97316]' : ''}`}>Showdown<span className='inline-block w-0 h-0 ml-2 align-middle border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-white'></span></span>
            {isShowdownOpen && (
              <ul className="ml-4">
                <li><Link to="/showdown/laptops" onClick={() => setIsMenuOpen(false)}>Laptops</Link></li>
                <li><Link to="/showdown/mobiles" onClick={() => setIsMenuOpen(false)}>Mobiles</Link></li>
              </ul>
            )}
          </li>

          <NavLink to="/contactus" onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => isActive ? 'text-[#f97316]' : 'text-white'}
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>

        {!token ? <button className='hover:scale-110 cursor-pointer font-normal text-base bg-gradient-to-r from-[#4066ff] to-[#ffb978] rounded-md transition-transform duration-300 ease-in px-3 py-2 ml-3 mt-2 h-[40px]'><Link to='/signin'><p>Sign In</p></Link></button> : 
         <ul className='navbar-menu flex list-none gap-4 text-white text-[17px] items-center space-x-[10px]'>
          <li 
            onMouseEnter={() => setProfileOpen(true)} 
            onMouseLeave={() => setProfileOpen(false)} 
            onClick={() => setProfileOpen(!isProfileOpen)}
            className='py-3 group mx-auto'>
              <img src={assets.hacker} className='h-10 w-10' alt="" />

            <div className="relative" >
              {isProfileOpen && (
                <ul className='absolute hidden right-0 z-10 group-hover:flex flex-col gap-2 w-[90px] bg-[#1B1212] rounded list-none p-2'>
                  <li onClick={()=>{navigate('/wishlist'); setProfileOpen(false); setIsMenuOpen(false)}} className='cursor-pointer text-white font-light hover:text-[#f97316] transition-colors duration-300 flex items-center space-x-2'>
                    <img src={assets.book_profile} alt="icon" className="w-5 h-5" />
                    <p>Wishlist</p>
                  </li>
                  <hr />
                  <li onClick={logout} className='cursor-pointer text-white font-light hover:text-[#f97316] transition-colors duration-300 flex items-center space-x-2'>
                    <img src={assets.logout_icon} alt="icon" className="w-5 h-5" />
                    <p>Logout</p> 
                  </li>
              </ul>)}
            </div>
          </li>
         </ul>}
      </div>

      {/* Full Navbar Menu for Larger Screens */}
      <div className='hidden md:flex lg:flex space-x-4 mr-3 py-2'>
        <ul className='navbar-menu flex list-none gap-4 text-white text-[17px] items-center space-x-[4px]'>

          {/* Home Button */}
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `${isActive ? 'text-[#f97316] border-b-2 border-[#f97316]' : 'text-white'} 
              group hover:text-[#f97316] transition-all duration-300`
            }
          >
            <li className="relative py-3 text-center w-full cursor-pointer">
              Home
            </li>
          </NavLink>
          
          {/* Categories Dropdown */}
          <li 
            onMouseEnter={() => setCategoriesOpen(true)} 
            onMouseLeave={() => setCategoriesOpen(false)} 
            className={`hover:text-[#f97316] transition-all py-3 duration-300 group ${isCategoriesActive ? 'text-[#f97316] border-b-2 border-[#f97316]' : 'text-white'}`}>
              Categories<span className='inline-block w-0 h-0 ml-2 align-middle border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-white'></span>

            <div className="relative" >
              {isCategoriesOpen && (
                <ul className='absolute hidden right-0 z-10 group-hover:flex flex-col gap-2 w-[90px] bg-[#1B1212] rounded list-none p-2'>
                  <li className='text-white font-light hover:text-[#f97316] transition-colors duration-300'>
                    <Link 
                      to='/categories/laptopdoc' 
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <p>Laptops</p>
                    </Link>
                  </li>
                  <hr />
                  <li className='text-white font-light hover:text-[#f97316] transition-colors duration-300'>
                    <Link 
                      to='/categories/mobiledoc' 
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <p>Mobiles</p>
                    </Link>
                  </li>
              </ul>
              )}
            </div>
          </li>

          {/* Showdown Dropdown */}
          <li 
            onMouseEnter={() => setShowdownOpen(true)} 
            onMouseLeave={() => setShowdownOpen(false)} 
            className={`hover:text-[#f97316] transition-all py-3 duration-300 group ${isShowdownActive ? 'text-[#f97316] border-b-2 border-[#f97316]' : 'text-white'}`}>
              Showdown<span className='inline-block w-0 h-0 ml-2 align-middle border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-white'></span>

            <div className="relative" >
              {isShowdownOpen && (
                <ul className='absolute hidden right-0 z-10 group-hover:flex flex-col gap-2 w-[90px] bg-[#1B1212] rounded list-none p-2'>
                  <li className='text-white hover:text-[#f97316] transition-colors duration-300'>
                    <Link 
                      to='/showdown/laptops' 
                      onClick={() => setShowdownOpen(false)}
                    >
                      <p>Laptops</p>
                    </Link>
                  </li>
                  <hr />
                  <li className='text-white hover:text-[#f97316] transition-colors duration-300'>
                    <Link 
                      to='/showdown/mobiles' 
                      onClick={() => setShowdownOpen(false)}
                    >
                      <p>Mobiles</p>
                    </Link>
                  </li>
              </ul>
              )}
            </div>
          </li>          
          
          {/* Contact US Button */}
          <NavLink 
            to="/contactus" 
            className={({ isActive }) => 
              `${isActive ? 'text-[#f97316] border-b-2 border-[#f97316]' : 'text-white'} 
              group hover:text-[#f97316] transition-all duration-300`
            }
          >
            <li className="relative py-3 text-center w-full cursor-pointer">
              Contact Us
            </li>
          </NavLink>
        </ul>

        {!token ? <button className='hover:scale-110 cursor-pointer font-normal text-base bg-gradient-to-r from-[#4066ff] to-[#ffb978] rounded-md transition-transform duration-300 ease-in px-3 py-2 ml-3 mt-2 h-[40px]'><Link to='/signin'><p>Sign In</p></Link></button> : 
         <ul className='navbar-menu flex list-none gap-4 text-white text-[17px] items-center space-x-[10px]'>
          <li 
            onMouseEnter={() => setProfileOpen(true)} 
            onMouseLeave={() => setProfileOpen(false)} 
            className='py-3 group'>
              <img src={assets.hacker} className='h-10 w-10' alt="" />

            <div className="relative" >
              {isProfileOpen && (
                <ul className='absolute hidden right-0 z-10 group-hover:flex flex-col gap-2 w-[90px] bg-[#1B1212] rounded list-none p-2'>
                  <li onClick={()=>{navigate('/wishlist'); setProfileOpen(false)}} className='cursor-pointer text-white font-light hover:text-[#f97316] transition-colors duration-300 flex items-center space-x-2'>
                    <img src={assets.book_profile} alt="icon" className="w-5 h-5" />
                    <p>Wishlist</p>
                  </li>
                  <hr />
                  <li onClick={logout} className='cursor-pointer text-white font-light hover:text-[#f97316] transition-colors duration-300 flex items-center space-x-2'>
                    <img src={assets.logout_icon} alt="icon" className="w-5 h-5" />
                    <p>Logout</p> 
                  </li>
              </ul>)}
            </div>
          </li>
         </ul>}
      </div>
    </div>
  )
}

export default Navbar;