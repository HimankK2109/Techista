import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footer from '../../assets/footer.jpg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-50">
      {/* Background Image */}
      <div className="relative w-full bg-center bg-cover" style={{ backgroundImage: `url(${footer})` }}>
        {/* Content Wrapper */}
        <div className="w-full gap-4 px-6 md:px-10 py-8 box-border flex flex-col md:flex-row items-start justify-between">
          {/* About Us Section */}
          <div className="flex-1 text-start mb-8 md:mb-0 w-full max-w-[300px] md:max-w-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">About Us</h2>
            <p className="text-white text-sm md:text-base">
              We are committed to providing the best electronic products, from the latest laptops to cutting-edge mobiles. Our mission is to offer top-quality devices and exceptional customer service.
            </p>
          </div>

          {/* Categories Section */}
          <div className="flex-1 text-start mb-8 md:mb-0 w-full max-w-[300px] md:max-w-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Categories</h2>
            <ul className="space-y-4">
              <li>
                <NavLink to="/categories/laptops" className="text-white hover:underline" onClick={() => window.scrollTo(0, 0)}>
                  Laptops
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories/mobiles" className="text-white hover:underline" onClick={() => window.scrollTo(0, 0)}>
                  Mobiles
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex-1 text-start mb-8 md:mb-0 w-full max-w-[300px] md:max-w-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact Us</h2>
            <ul className="text-white space-y-2">
              <li>Mobile: +123-456-7890</li>
              <li>Email: contact@yourcompany.com</li>
              <li>Address: 123 Your Street, City, Country</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex-1 text-start w-full max-w-[300px] md:max-w-[400px]">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Socials</h2>
            <p className="text-white mb-4">Let us be social</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/himank-kumar-22039a253/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-[#1DA1F2] text-2xl" />
              </a>
              <a href="https://www.instagram.com/himank_kumar7108/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-[#C13584] text-2xl" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-[#4267B2] text-2xl" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-[#FF0000] text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="relative bottom-0 left-0 w-full text-center text-lg md:text-xl text-white pb-8">
          <p>Maintained and Developed by "Himank Kumar"</p>
          <p className="pt-4">&copy; {new Date().getFullYear()} Techista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;