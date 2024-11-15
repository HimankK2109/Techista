import React from 'react';
import { assets } from '../../assets/assests.js'
import hiw from '../../assets/hiw.png';
import './HowitWorks.css'

function HowItWorks() {
  return (
    <section className='section_hiw' style={{backgroundImage : `url(${hiw})`}}>
      <div className='item-box1'>
        <h2>How it works</h2>
        <div className='howuse'>
          <div className='boxes'>
            <div className='images'>
              <div className="orange-dot1"/>
              <img src={assets.search} alt="" className='animate-slide-in-right' />
            </div>
            <h3>Discover Top Picks</h3>
            <p>Browse through our expertly curated selection of top products. 
              We’ve handpicked the best options based on quality, value, and performance to help you find the perfect match for your needs</p>
          </div>

          <div className='boxes'>
            <div className='images'>
                <div className="orange-dot2"/>
                <img src={assets.computer} alt="" className='animate-slide-in-right' />
            </div>
            <h3>Research with Confidence</h3>
            <p>Access in-depth information and detailed reviews through our embedded links. Explore product 
              specifications, user feedback, and expert opinions to ensure you make a well-informed choice</p>
          </div>

          <div className='boxes'>
            <div className='images'>
                <div className="orange-dot3"/>
                <img src={assets.dance} alt="" className='animate-slide-in-right' />
            </div>
            <h3>Enjoy Your Smart Purchase</h3>
            <p>Relax and take pride in your purchase, knowing you’ve made an informed choice. While new technology emerges daily, you 
              can be confident that your selection is among the best available, chosen for its excellence and value above all</p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default HowItWorks;