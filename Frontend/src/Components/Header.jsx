import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`absolute z-50  w-full   text-white `} id='header'>
      <nav className=" mx-auto flex  justify-between md:h-[7rem] h-[5rem]  md:px-16 px-4 items-center ">
        {/* Logo */}
        <div className="text-2xl font-bold  text-white">
          <Link to="/">
            <div className="flex ">
              <img src="xpress-logo.png" className="h-[5rem] md:h-[8rem] rounded-full " />
            </div>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden ">
          <button
            className="text-2xl     "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="hover:text-secondary shadow-lg" />
            ) : (
              <FaBars className="hover:text-secondary shadow-lg" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex" >
          <ul className="absolute top-0 left-0 w-full bg-primary text-white flex flex-col items-start px-6 space-y-6 py-6 shadow-md">
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
         <FaTimes className="hover:text-secondary shadow-lg z-50 text-2xl cursor-pointer"  onClick={() => setIsMenuOpen(!isMenuOpen)}/>
          </div>
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
              About Us
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
        {/* <div className="md:block hidden border-2 p-1  border-gray-100 rounded-full">
          <button className="bg-secondary text-white lg:text-xl text-lg font-semibold px-8 py-1 rounded-full shadow-md transition">
            Book a Cab Now
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
