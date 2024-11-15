import React, { useRef } from 'react'
import hiw from '../../assets/hiw.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Deals.css';
import { assets } from '../../assets/assests.js';

const Deals = () => {
    const swiperRef = useRef(null);
  return (
    <div className='deals-container' style={{backgroundImage : `url(${hiw})`}}> 
        <div className="deal-box">
            <h2>Ongoing Deals</h2>
            <div className="displayer">
                <div 
                    className="w-full h-full"
                    onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                    onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
                    >
                    <Swiper
                    grabCursor={false}
                    effect={'creative'}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    creativeEffect={{
                        prev: {
                        shadow: true,
                        translate: ['-125%', 0, -800],
                        rotate: [0, 0, -90],
                        },
                        next: {
                        shadow: true,
                        translate: ['125%', 0, -800],
                        rotate: [0, 0, 90],
                        },
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCreative, Autoplay, Pagination]}
                    className="mySwiper5 w-full h-full"
                    ref={swiperRef}
                    >
                    <SwiperSlide>
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <img
                            src={assets.flipkart}
                            alt="Flipkart"
                            className="w-full h-full object-fill rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
                            />
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <img 
                                src={assets.amazon} 
                                alt="" 
                                className="w-full h-full object-fill rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110" 
                            />
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <a href="https://www.croma.com" target="_blank" rel="noopener noreferrer" className="block w-full h-full">   
                            <img 
                                src={assets.croma} 
                                alt="" 
                                className="w-full h-full object-fill rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110" 
                            />
                        </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                        <a href="https://www.reliancedigital.in" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <img 
                                src={assets.reliance} 
                                alt="" 
                                className="w-full h-full object-fill rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110" 
                            />
                        </a>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deals