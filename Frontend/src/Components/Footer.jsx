import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaGreaterThan,
  FaPhone,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import BottomFooter from "./CopyRightsection";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-2">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
          {/* Logo and Social Links */}
          <div>
            <Link to='/' className="flex justify-center items-center ">
              <img src="xpress.jpg" className="h-24 rounded-full" />
            </Link>
            <h2 className="text-xl font-bold text-secondary text-center mb-4">
             <Link to='/'> Xpress Tour & Travel </Link>
            </h2>
            {/* <p className="text-gray-200">
              Travel with trust and comfort. Your satisfaction is our priority.
            </p> */}
            <div className="flex justify-center items-center space-x-4 mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=9935115786"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-1 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.youtube.com/@xpresstourandtravels"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 p-1 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/xpress-tour-and-travels/61569937321411/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-1 rounded-full text-white transition-transform transform hover:scale-110"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/xpresstourandtravels/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-t p-1 to-red-500 from-pink-600  rounded-full text-white transition-transform transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
              
              <a
                href="tel:+91-9935115786"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaPhone className="rotate-90" size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Our Services
            </h3>
            <div className="text-gray-200 space-y-1">
              <Link to="/services" className="block hover:text-secondary">
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Cab
                Retal services
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Tour
                Packages
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Air
                Ticketing
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Train
                Ticketing
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" />{" "}
                Passport & Visa Services
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" />{" "}
                Helicopter & Charter Services
              </Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Contact Us
            </h3>
            <div className="text-gray-200 space-y-2">
              <p>
                <a href="tel:+91-9935115786">
                  {" "}
                  <FaPhoneAlt className="inline-block mr-2" />
                </a>
                <a href="tel:+91-9935115786">+91-9935115786</a>,
                <a href="tel:+91-8604778866"> 8604778866</a>
              </p>
              <p>
                <GiRotaryPhone className="inline-block mr-2" />
                <a href="tel:05224077786">0522-4077786</a>,
                <a href="tel:05224066686"> 4066686</a>,
                <a href="tel:05222312786"> 2312786</a>
              </p>
              <p>
                <a href="mailto:xpresstt@yahoo.com">
                  <FaEnvelope className="inline-block mr-2" />
                  xpresstt@yahoo.com
                </a>
              </p>
              <div>
                <a href="https://maps.app.goo.gl/5Xw2nRefpgtcrLiGA">
                  <FaLocationDot className="inline-block mr-2" />
                  45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, Uttar
                  Pradesh 226016
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Our Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.671640149946!2d81.003404574093!3d26.88217166140491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdaddf88da7f%3A0x436ab4e6e38ea103!2sXpress%20Tour%20And%20Travels!5e0!3m2!1sen!2sin!4v1737034567545!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-200">
          <BottomFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
