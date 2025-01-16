import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={` fixed  top-0 z-50 h-[10vh]  w-full backdrop-blur-md rounded-b-full bg-white bg-opacity-5  text-white `}
    >

      <nav className="container mx-auto px-6 md:px-16 flex justify-between  items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold  text-white">
          <Link to="/">
          <div className="flex ">
            <img src="xpress-logo.png" className="h-20  rounded-full "/>
          </div>
          </Link>
        </div>
        
        {/* Mobile Navbar */}
        <div className="flex md:hidden ">
          <button
            className="text-2xl     "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="hover:text-secondary"/> : <FaBars className="hover:text-secondary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-primary text-white flex flex-col items-start px-6 space-y-6 py-6 shadow-md">
            <li>
              <Link
                to="/"
                className="block text-lg font-medium      hover:text-secondary border-b-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg font-medium      hover:text-secondary border-b-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-lg font-medium      hover:text-secondary border-b-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/testimonial"
                className="block text-lg font-medium      hover:text-secondary border-b-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block text-lg font-medium      hover:text-secondary border-b-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-lg font-medium      hover:text-secondary border-b-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6 gap-4  text-white">
          <li>
            <Link
              to="/"
              className="text-lg font-medium      hover:text-secondary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-medium      hover:text-secondary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-lg font-medium      hover:text-secondary"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              to="/testimonial"
              className="text-lg font-medium      hover:text-secondary"
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="text-lg font-medium      hover:text-secondary"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-medium      hover:text-secondary"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden border-2 p-1  border-gray-100 rounded-full">
            <button className="bg-secondary text-white lg:text-xl text-lg font-semibold px-8 py-1 rounded-full shadow-md transition">
              Book a Cab Now
            </button>
            </div>
      </nav>
    </header>
  );
};

export default Header;
