import React from 'react'
import './Herosection.css'
import Slider from '../Slider/Slider'
import { NavLink } from 'react-router-dom'

const Herosection = () => {
  return (
    <section className="herosec ">
        <div className="item-box">
                <div className="left-part">
                    <div className="dot"></div>
                    <h1 className='leading-[1rem] lg:leading-[4rem] lg:text-[3.8rem]'>Your Guide to<br/> Perfect Devices<br/>Simplified!</h1>
                    <p>Discover the Perfect Device for You Effortlessly <br />Leave All Complications Behind</p>
                    <div class="flex items-center mt-8">
                        <NavLink to="/categories/laptopdoc"
                        className="flex items-center text-base text-white bg-orange-500 rounded-full py-2 px-5 hover:text-orange-500 hover:bg-white border border-transparent transition duration-300">
                            <span class="mr-2">Let's Unveil It</span>
                        <div class="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full transition duration-300">
                            <svg class="w-4 h-4 text-white transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        </NavLink>
                    </div>
                </div>

                <div className="right-part">
                    <div className="slider">
                        <Slider />
                    </div>
                </div>
            </div>
    </section>
    
    
  )
}

export default Herosection