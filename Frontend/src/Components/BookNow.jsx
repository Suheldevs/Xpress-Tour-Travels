import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white flex items-center h-64 md:h-80 rounded-lg shadow-lg m-4"
      style={{
        backgroundImage: "url('bmw-banner.webp')", // Replace with the actual URL or path of the image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">For any Queries</h1>
        <p className="text-lg md:text-xl mb-6">
          For assistance with your booking or if you have any questions, please
          contact the number provided below.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-secondary text-white font-medium text-sm rounded-full shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default BookNow;
