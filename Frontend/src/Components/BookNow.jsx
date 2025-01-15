import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => {
  return (
    <div data-aos='fade-up' className="flex flex-col items-center my-6 justify-center bg-white">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Book your ride with us.</h1>
      <p className="text-center px-4 text-gray-600 mb-6">
        Join us in celebrating over 15 years of excellence in the travel industry. Choose Bangalore Cab Services for a journey that goes beyond transportation – it's an experience you can trust.
      </p>
      <Link to='/contact' className="px-6 py-3 bg-secondary text-white font-medium text-sm rounded shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light">
        BOOK NOW
      </Link>
    </div>
  );
};

export default BookNow;
