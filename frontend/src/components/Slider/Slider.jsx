import React from 'react'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { assets } from '../../assets/assests.js';
import './Slider.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay} from 'swiper/modules';

const Slider = () => {
    const swiperRef = useRef(null);
  return (
    <div className='w-full h-full flex justify-center items-center'
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
        <Swiper 
            effect={'coverflow'}
            grabCursor={false}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className='w-full h-full'
            ref={swiperRef}
        >
            <SwiperSlide>
                <img src={assets.macbook} alt="image_1" className='w-full h-full object-cover rounded-2xl'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.asus_rog} alt="image_2" className='w-full h-full object-cover rounded-2xl'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.dell} alt="image_3" className='w-full h-full object-cover rounded-2xl'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.iphone} alt="image_4" className='w-full h-full object-cover rounded-2xl'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={assets.samsung} alt="image_5" className='w-full h-full object-cover rounded-2xl'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider