import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaGreaterThan,
  FaPhoneAlt,
  FaEnvelope,

} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import BottomFooter from "./CopyRightsection";
import Aos from "aos";
import { FaLocationDot } from "react-icons/fa6";
import VisitorCounter from "./VisitorCount";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate to programmatically navigate

  const handleServiceLinkClick = (sectionId) => {
    // Check if the user is on the /services page
    if (location.pathname === "/services") {
      // Scroll to the section if already on services page
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Otherwise, navigate to the /services page and scroll to the section
      navigate(`/services#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 1000, // Set animation duration (optional)
      once: true,     // Trigger animation only once
    });
    return () => {
      Aos.refresh();  // Refresh AOS when component unmounts
    };
  }, []);

  return (
    <footer className="bg-primary text-white pt-12 pb-2" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
          {/* Logo and Social Links */}
          <div>
            <Link to="/" onClick={handleLogoClick} className="flex justify-center items-center">
              <img src="xpress.jpg" className="h-24 rounded-full" />
            </Link>
            <h2 className="text-xl mt-3 font-bold text-secondary text-center mb-2">
              <Link to="/" onClick={handleLogoClick}> Xpress Tour & Travels </Link>
            </h2>
            <p className="text-gray-200 text-center">
              Travel with trust and comfort. Your satisfaction is our priority.
            </p>
            {/* <div className="flex items-start mx-auto justify-center mt-2 gap-4">
                <Link to="/" onClick={handleLogoClick} className="flex justify-center items-center">
                <img src="xpress.jpg" className="w-10 h-10 rounded-full" />
                </Link>
                <div>
                  <p>Total Count:</p>
                  <h4 className="bg-secondary w-fit px-2 py-2">20</h4>
                </div>
            </div> */}
<VisitorCounter/>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Our Services
            </h3>
            <div className="text-gray-200 space-y-1">
              <Link
                to="/services"
                onClick={() => handleServiceLinkClick("cab")}
                className="block hover:text-secondary"
              >
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Cab Rental Services
              </Link>
              <Link
                to="/services"
                onClick={() => handleServiceLinkClick("air")}
                className="block hover:text-secondary"
              >
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Air Ticketing
              </Link>
              <Link
                to="/services"
                onClick={() => handleServiceLinkClick("tour")}
                className="block hover:text-secondary"
              >
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Tour Packages
              </Link>
              <Link
                to="/services"
                onClick={() => handleServiceLinkClick("train")}
                className="block hover:text-secondary"
              >
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Train Ticketing
              </Link>
              <Link
                to="/services"
                onClick={() => handleServiceLinkClick("bus")}
                className="block hover:text-secondary"
              >
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Bus Booking Services
              </Link>
              <Link
                to="/services"
                onClick={() => handleServiceLinkClick("passport")}
                className="block hover:text-secondary"
              >
                <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> Passport & Visa Services
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
                <a href="tel:9935115786">
                  <FaPhoneAlt className="inline-block mr-2" />
                </a>
                <a href="tel:9935115786">
                +91-9935115786
                </a>
              ,      <a href="tel:7860021583">
                +91-7860021583
                </a>
              </p>
           
              <p>
                <GiRotaryPhone className="inline-block mr-2" />
                <a href="tel:05224077786">
                  0522-4077786
                </a>
              ,      <a href="tel:05222700786">
                2700786,
                </a>{" "}
                <a href="tel:05222312786">
                2312786
                </a>
              </p>
             
              <p>
                <a href="mailto:info@xpresstourtravels.com">
                  <FaEnvelope className="inline-block mr-2" />
                  info@xpresstourtravels.com
                </a>
              </p>
              <div>
                <a href="https://maps.app.goo.gl/5Xw2nRefpgtcrLiGA">
                  <FaLocationDot className="inline-block mr-2" />
                  45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, UP 226016
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
        <div className="mt-2 border-t border-gray-700 pt- text-center text-sm text-gray-200">
          <BottomFooter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
