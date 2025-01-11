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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Description */}
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

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Contact Us
            </h3>
            <div className="text-gray-400 space-y-4">
              <div>
                <h4 className="font-bold">H.O.</h4>
                <p>2nd Floor, Zeba House, Shakti Nagar Dhall, Faizabad Road, Indira Nagar, Lko-16</p>
                <p>+91-8604778866, 0522-4077786, 4066686, 2312786</p>
              </div>
              <div>
                <h4 className="font-bold">B.O.</h4>
                <p>69-70, Gazal Plaza, Auto Stand Road, Gole Market, Mahanagar, Lko-06</p>
                <p>+91-7860058888, 0522-4954786, 4955786, 4956786, 2326786</p>
              </div>
              <p>
                <FaPhoneAlt className="inline-block mr-2" />
                Suggest/Complain: 9935115786
              </p>
              <p>
                <FaEnvelope className="inline-block mr-2" />
                Email: xpresstt@yahoo.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              Quick Links
            </h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-500 transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-blue-500 transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-blue-500 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-blue-500 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
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
