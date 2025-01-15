import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="sidebar fixed bottom-[-100px] z-50 md:right-0 right-2 transform -translate-y-1/2 flex flex-col items-center bg-opacity-20 bg-gray-800 rounded-l-lg p-2 shadow-lg space-y-5">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 transition-transform transform hover:scale-110"
      >
        <FaFacebook size={30} />
      </a>
      {/* <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 transition-transform transform hover:scale-110"
      >
        <FaTwitter size={30} />
      </a> */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-800 transition-transform transform hover:scale-110"
      >
        <FaInstagram size={30} />
      </a>
      {/* <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 transition-transform transform hover:scale-110"
      >
        <FaLinkedin size={30} />
      </a> */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={30} />
      </a>
      <a
        href="tel:+91-9935115786"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 transition-transform transform hover:scale-110"
      >
        <FaPhone className='rotate-90' size={30} />
      </a>
    </div>
  );
};

export default SocialSidebar;
