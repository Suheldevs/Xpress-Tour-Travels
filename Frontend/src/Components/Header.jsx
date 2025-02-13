import React, { useState, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Home/xpress-logo.webp";

const NavLinks = memo(({ toggleMenu }) => (
  <>
    <li>
      <Link to="/" className="hover:text-secondary" onClick={toggleMenu}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-secondary" onClick={toggleMenu}>
        About Us
      </Link>
    </li>
    <li>
      <Link to="/services" className="hover:text-secondary" onClick={toggleMenu}>
        Our Services
      </Link>
    </li>
    <li>
      <Link to="/testimonial" className="hover:text-secondary" onClick={toggleMenu}>
        Testimonial
      </Link>
    </li>
    <li>
      <Link to="/faq" className="hover:text-secondary" onClick={toggleMenu}>
        FAQ
      </Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-secondary" onClick={toggleMenu}>
        Contact Us
      </Link>
    </li>
  </>
));

const MobileMenu = memo(({ isMenuOpen, toggleMenu }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-95 flex flex-col items-center py-6 space-y-6 shadow-lg z-50">
      <button
        className="absolute top-4 right-6 text-2xl hover:text-secondary"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        <FaTimes />
      </button>
      <ul className="flex flex-col space-y-4 text-lg font-medium">
        <NavLinks toggleMenu={toggleMenu} />
      </ul>
    </div>
  );
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="absolute z-50 w-full bg-transparent text-white">
      <nav className="mx-auto flex justify-between items-center md:h-[7rem] h-[5rem] md:px-16 px-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" aria-label="Xpress Tour & Travels Home">
            <img 
              src={logo} 
              alt="Xpress Tour & Travels Logo" 
              className="h-[5rem] md:h-[8rem] rounded-full" 
              loading="eager" 
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
          {isMenuOpen ? <FaTimes className="hover:text-secondary" title="Close menu"/> : <FaBars className="hover:text-secondary" title="Open menu"/>}
        </button>

        {/* Mobile Menu */}
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Desktop Navbar */}
        <ul className="hidden lg:flex space-x-10 text-lg font-medium">
          <NavLinks />
        </ul>

      </nav>
    </header>
  );
};

export default memo(Header);
