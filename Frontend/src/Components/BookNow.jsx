import React, { useEffect ,memo} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import contactus from '../assets/bmw-banner.webp';

const BookNow = () => {
  useEffect(() => {
    import('aos/dist/aos.css'); // Lazy load AOS styles
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center h-64 md:h-80 shadow-lg"
      data-aos="zoom-in"
      style={{ backgroundImage: `url(${contactus})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">For any Queries</h1>
        <p className="text-lg md:text-xl mb-6">
          Need assistance with your booking? Contact us for quick support.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 text-lg bg-secondary text-white font-medium rounded-full shadow-md hover:bg-secondary-dark focus:ring-2 focus:ring-secondary-light"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default memo(BookNow);
