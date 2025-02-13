import React, { useEffect, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGreaterThan, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import BottomFooter from "./CopyRightsection";
import Aos from "aos";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/Home/xpress.webp";
import VisitorCounter from "./VisitorCount";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleServiceLinkClick = (sectionId) => {
    if (location.pathname === "/services") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/services#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    return () => Aos.refresh();
  }, []);

  return (
    <footer className="bg-primary text-white pt-12 pb-2" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
          
          {/* Logo and Social Links */}
          <div className="flex flex-col  items-center text-center">
  <Link to="/" onClick={handleLogoClick} aria-label="Xpress Tour & Travels" className="flex flex-col items-center">
    <img src={logo} alt="Xpress Tour & Travels Logo" className="h-24 rounded-full mb-2" loading="lazy" />
    <h1 className="text-xl font-bold text-secondary mb-1">Xpress Tour & Travels</h1>
  </Link>
  <p className="text-gray-200">Travel with trust and comfort. Your satisfaction is our priority.</p>
  <VisitorCounter />
</div>


          {/* Quick Links */}
          <div>
            <div className="text-xl font-semibold text-secondary mb-4">Our Services</div>
            <nav className="text-gray-200 space-y-1" aria-label="Quick links">
              {[
                { id: "cab", text: "Cab Rental Services" },
                { id: "air", text: "Air Ticketing" },
                { id: "tour", text: "Tour Packages" },
                { id: "train", text: "Train Ticketing" },
                { id: "bus", text: "Bus Booking Services" },
                { id: "passport", text: "Passport & Visa Services" },
              ].map((service) => (
                <Link
                  key={service.id}
                  to="/services"
                  onClick={() => handleServiceLinkClick(service.id)}
                  className="block hover:text-secondary"
                >
                  <FaGreaterThan className="inline-block mr-1 text-xs text-secondary" /> {service.text}
                </Link>
              ))}
            </nav>
          </div>

          {/* Address */}
          <address className="not-italic">
            <div className="text-xl font-semibold text-secondary mb-4">Contact Us</div>
            <p className="mt-1">
              <FaPhoneAlt className="inline-block mr-2" />
              <a href="tel:9935115786" aria-label="Call +91-9935115786">+91-9935115786</a>,{" "}
              <a href="tel:7860021583" aria-label="Call +91-7860021583">+91-7860021583</a>
            </p>
            <p className="mt-2">
              <GiRotaryPhone className="inline-block mr-2" />
              <a href="tel:05224077786" aria-label="Call 0522-4077786">0522-4077786</a>,{" "}
              <a href="tel:05222700786" aria-label="Call 0522-2700786">2700786</a>,{" "}
              <a href="tel:05222312786" aria-label="Call 0522-2312786">2312786</a>
            </p>
            <p className="mt-2">
              <FaEnvelope className="inline-block mr-2" />
              <a href="mailto:info@xpresstourtravels.com" aria-label="Email info@xpresstourtravels.com">
                info@xpresstourtravels.com
              </a>
            </p>
            <p className="mt-2">
              <FaLocationDot className="inline-block mr-2" />
              <a
                href="https://maps.app.goo.gl/5Xw2nRefpgtcrLiGA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View location on Google Maps"
              >
                45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, UP 226016
              </a>
            </p>
          </address>

          {/* Google Map */}
          <div>
            <div className="text-xl font-semibold text-secondary mb-4">Our Location</div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.671640149946!2d81.003404574093!3d26.88217166140491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdaddf88da7f%3A0x436ab4e6e38ea103!2sXpress%20Tour%20And%20Travels!5e0!3m2!1sen!2sin!4v1737034567545!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Xpress Tour & Travels Location"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-2 border-t border-gray-700  text-center text-sm text-gray-200">
          <BottomFooter />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
