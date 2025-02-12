import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Home/xpress-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="absolute z-50 w-full bg-transparent text-white" id="header">
      <nav className="mx-auto flex justify-between items-center md:h-[7rem] h-[5rem] md:px-16 px-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" aria-label="Xpress Tour & Travels Home">
            <img 
              src={logo} 
              alt="Xpress Tour & Travels Logo" 
              className="h-[5rem] md:h-[8rem] rounded-full" 
              loading="lazy" 
            />
          </Link>
        </div>

        {/* Mobile Navbar */}
        <button
          className="text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes className="hover:text-secondary" /> : <FaBars className="hover:text-secondary" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-primary bg-opacity-95 flex flex-col items-center py-6 space-y-6 shadow-lg z-50">
            <button
              className="absolute top-4 right-6 text-2xl hover:text-secondary"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <ul id="mobile-menu" className="flex flex-col space-y-4 text-lg font-medium">
              <li>
                <Link to="/" className="hover:text-secondary border-b-2 pb-1" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary border-b-2 pb-1" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary border-b-2 pb-1" onClick={toggleMenu}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="hover:text-secondary border-b-2 pb-1" onClick={toggleMenu}>
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary border-b-2 pb-1" onClick={toggleMenu}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary border-b-2 pb-1" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-secondary">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-secondary">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/testimonial" className="hover:text-secondary">
              Testimonial
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-secondary">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-secondary">
              Contact Us
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
