import React, { useRef, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const ModalImage = () => {
  const { selected_Laptop_for_modal, selected_Mobile_for_modal, url } = useContext(StoreContext);
  const swiperRef = useRef(null);

  const selectedItemForModal = selected_Laptop_for_modal 
    ? { type: 'Laptop', value: selected_Laptop_for_modal } 
    : { type: 'Mobile', value: selected_Mobile_for_modal };

  // console.log('Selected item for modal:', selectedItemForModal);

  // Safely access the images from selectedItemForModal
  const images = selectedItemForModal?.value?.images || {};
  const imageArray = [images[0], images[1], images[2], images[3], images[4]].filter(Boolean);  // Only keep valid image URLs

  return (
    <div className='h-full w-full relative'
      onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}>
      {imageArray.length > 0 ? (
        <Swiper
          pagination={{ dynamicBullets: false }}
          modules={[Pagination, Autoplay]} 
          className="mySwiper h-full cursor-pointer"
          autoplay={{
            delay: 3000,  // 3 seconds delay between slides
            disableOnInteraction: false,
          }}
          loop={true}
          ref={swiperRef}
        >
          {imageArray.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <img src={url+"/images/"+image} alt={`image_${index + 1}`} className='w-full h-full object-contain rounded-2xl'/>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">No images available</p>
        </div>
      )}
    </div>
  );
}

export default ModalImage;