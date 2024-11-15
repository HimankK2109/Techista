import React from 'react'
import { useNavigate } from 'react-router-dom';
import backImage from '../../assets/bg_image.jpg'
import { assets } from '../../assets/assests.js'
import './Filter.css'

const Filter = () => {
  const navigate = useNavigate();

  return (
    <div className='filter-container' style={{backgroundImage: `url(${backImage})`}}>
        <div className="brand-selection-container">
            <div className='inside-container'>
                <div className="written">
                    <div className="text-area">
                        Choose Your Brand<br/> Own Your Style
                    </div>
                </div>

                <div className="brandlogos glow-effect" onClick={() => navigate(`/categories/mobiles?brand=Apple`)}>
                    <img src={assets.applelogo} alt="" />
                </div>

                <div className="brandlogos glow-effect" onClick={() => navigate(`/categories/mobiles?brand=Samsung`)}>
                    <img src={assets.samsunglogo} alt="" />
                </div>

                <div className="brandlogos glow-effect" onClick={() => navigate(`/categories/laptops?brand=ASUS`)}>
                    <img src={assets.asuslogo} alt="" />
                </div>

                <div className="brandlogos glow-effect" onClick={() => navigate(`/categories/mobiles?brand=IQOO`)}>
                    <img src={assets.iqoologo} alt="" />
                </div>

                <div className="brandlogos glow-effect" onClick={() => navigate(`/categories/laptops?brand=HP`)}>
                    <img src={assets.hplogo} alt="" />
                </div>

                <div className="brandlogos glow-effect" onClick={() => navigate(`/categories/mobiles?brand=Xiaomi`)}>
                    <img src={assets.milogo} alt="" />
                </div>
            </div>        
        </div>
    </div>
  )
}

export default Filter