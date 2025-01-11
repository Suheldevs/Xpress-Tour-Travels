import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 h-[10vh] z-50 bg-white shadow-md dark:bg-gray-900 ">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-secondary">
          <Link to="/">Xpress Travel</Link>
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="text-2xl md:hidden text-gray-700 z-50 transition-all duration-700 ease-in-out dark:text-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <ul
          className={`flex flex-col md:flex-row items-center absolute md:static bg-white dark:bg-gray-900 w-full md:w-auto left-0 md:space-x-6 md:translate-x-0 transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-y-16" : "md:translate-y-0 -translate-y-full"
          }`}
        >
          <li className="mt-6 md:mt-0">
            <Link
              to="/"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link
              to="/about"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link
              to="/services"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              Our Services
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link
              to="/testimonials"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              Testimonial
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link
              to="/gallery"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              Gallery
            </Link>
          </li>
          <li className="mt-6 md:mt-0">
            <Link
              to="/faq"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
          </li>
          <li className="mt-6 md:mt-0 mb-6 md:mb-0">
            <Link
              to="/contact"
              className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
