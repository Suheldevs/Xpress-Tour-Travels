import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import BottomFooter from "./CopyRightsection";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-2">
      <div className="container mx-auto px-4 md:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
          {/* Logo and Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Xpress Tour & Travel
            </h2>
            <p className="text-gray-200">
              Travel with trust and comfort. Your satisfaction is our priority.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-secondary/70 rounded-full  transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-secondary/70 rounded-full  transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary hover:bg-secondary/70 rounded-full  transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Our Services</h3>
            <div className="text-gray-200 space-y-1">
              <Link to="/services" className="block hover:text-secondary">
                Cab Retal services
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                Tour Packages
              </Link>
              <Link to="/services" className="block hover:text-secondary">
              Air Ticketing
              </Link>
              <Link to="/services" className="block hover:text-secondary">
              Train Ticketing
              </Link>
              <Link to="/services" className="block hover:text-secondary">
              Passport & Visa Services
              </Link>
              <Link to="/services" className="block hover:text-secondary">
              Helicopter & Charter Services
              </Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Contact Us</h3>
            <div className="text-gray-200 space-y-2">
              <p>
                <FaPhoneAlt className="inline-block mr-2" />
                +91-9935115786, 8604778866
              </p>
              <p>
              <GiRotaryPhone className="inline-block mr-2" />
               0522-4077786, 4066686, 2312786
              </p>
              <p>
                <FaEnvelope className="inline-block mr-2" />
                xpresstt@yahoo.com
              </p>
              <div>
                
                <p><FaLocationDot className="inline-block mr-2" />
                  45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14119.787545887719!2d80.9398197!3d26.8507074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b4c1c430b991d%3A0x7dfb68e1397a0f11!2s45A%2C%20Dayal%20Enclave%2C%20Sector%209%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!5e0!3m2!1sen!2sin!4v1619045107005!5m2!1sen!2sin"
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
          <BottomFooter/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
