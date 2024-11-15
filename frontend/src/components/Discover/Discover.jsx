import React from 'react'
import slider from '../../assets/slid.jpg';

const Discover = () => {
  return (
  <div
    className="bg-fixed parallax bg-cover bg-center text-center pt-36 pb-32"
    style={{ backgroundImage: `url(${slider})` }}
  >
    <span className="pl-4 pr-4" style={{ fontFamily: 'Courgette', fontSize: '40px', lineHeight: '1.2', color: '#d61c22' }}>
      Discover
    </span>
    <h3 className="font-poppins font-bold text-[40px] leading-[1.2] text-white uppercase tracking-[10px] text-center px-4 pt-1">
      Techista
    </h3>
  </div>
  )
}

export default Discover