import React from 'react';
import { Link } from 'react-router-dom';

const BookNow = () => {
  return (
    <div data-aos='fade-up' className="flex flex-col items-center my-6 justify-center bg-primary md:px-24 px-2 md:mx-24 mx-4 py-6 md:py-10 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">Book Your Ride with Us.</h1>
      <p className="text-center px-10 text-gray-200 mb-6">
        Join us in celebrating over 15 years of excellence in the travel industry. Choose Bangalore Cab Services for a journey that goes beyond transportation – it's an experience you can trust.
      </p>
      <Link to='/contact' className="px-6 py-3 bg-secondary text-white font-medium text-sm rounded shadow-md hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light">
        BOOK NOW
      </Link>
    </div>
  );
};

export default BookNow;
