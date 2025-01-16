import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="sidebar fixed bottom-0 z-50  right-0 transform -translate-y-1/5 mb-4 flex flex-col items-center rounded-l-lg p-2 shadow-lg space-y-5">
      <a
        href="https://api.whatsapp.com/send?phone=9935115786"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-2 text-white rounded-full transition-transform transform hover:scale-110"
      >
        <FaWhatsapp size={25} />
      </a>
      <a
        href="https://www.youtube.com/@xpresstourandtravels"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 p-2 text-white rounded-full transition-transform transform hover:scale-110"
      >
        <FaYoutube size={30} />
      </a>
      <a
        href="https://www.facebook.com/people/xpress-tour-and-travels/61569937321411/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 p-2 rounded-full text-white transition-transform transform hover:scale-110"
      >
        <FaFacebookF size={25} />
      </a>
      {/* <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 transition-transform transform hover:scale-110"
      >
        <FaTwitter size={25} />
      </a> */}
      <a
        href="https://www.instagram.com/xpresstourandtravels/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-t to-red-500 from-pink-600 p-2 rounded-full text-white transition-transform transform hover:scale-110"
      >
        <FaInstagram size={25} />
      </a>
      {/* <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 transition-transform transform hover:scale-110"
      >
        <FaLinkedin size={25} />
      </a> */}

      <a
        href="tel:+91-9935115786"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-3 text-white rounded-full transition-transform transform hover:scale-110"
      >
        <FaPhone className="rotate-90" size={15} />
      </a>
    </div>
  );
};

export default SocialSidebar;
