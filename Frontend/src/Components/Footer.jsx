import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos='fade-up' className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Xpress Tour & Travel
            </h2>
            <p className="text-gray-400">
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
            <h3 className="text-xl font-semibold text-secondary mb-4">Quick Links</h3>
            <div className="text-gray-400 space-y-4">
              <Link to="/" className="block hover:text-secondary">
                Home
              </Link>
              <Link to="/about" className="block hover:text-secondary">
                About Us
              </Link>
              <Link to="/services" className="block hover:text-secondary">
                Services
              </Link>
              <Link to="/contact" className="block hover:text-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">Contact Us</h3>
            <div className="text-gray-400 space-y-4">
              <div>
                <h4 className="font-bold">Office Address</h4>
                <p>45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
                <p>+91-8604778866, 0522-4077786, 4066686, 2312786</p>
              </div>
              <p>
                <FaPhoneAlt className="inline-block mr-2" />
                Phone: 9935115786
              </p>
              <p>
                <FaEnvelope className="inline-block mr-2" />
                Email: xpresstt@yahoo.com
              </p>
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
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Xpress Tour & Travel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
