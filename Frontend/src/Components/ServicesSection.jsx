import React from "react";
import { Link } from "react-router-dom";

import air from '../assets/Home/services/air.webp';
import cab from '../assets/Home/services/cab.webp';
import tour from '../assets/Home/services/tour.webp';
import train from '../assets/Home/services/train.webp';
import bus from '../assets/cars/bus.webp';
import passport from '../assets/Home/services/passport.webp';

const services = [
  {
    id: 1,
    title: "Cab Rental Services",
    description:
      "Reliable cab rental services offering affordable rates, professional drivers, and 24/7 availability for your convenience.",
    price: "Starting @ just Rs 12/Km",
    buttonLabel: "Book Now",
    image: cab,
  },
  {
    id: 3,
    title: "Air Ticketing Services",
    description:
      "Convenient Air Ticketing Services offering competitive fares, easy booking, and real-time flight updates for travelers.",
    price: "Starting @ just Rs 1199/-",
    buttonLabel: "Book Now",
    image: air,
  },
  {
    id: 2,
    title: "Tour Packages",
    description:
      "Exciting tour packages featuring unique destinations and all-inclusive options for unforgettable adventures.",
    price: "Starting @ just Rs 499/-",
    buttonLabel: "Book Now",
    image: tour,
  },
  {
    id: 4,
    title: "Train Ticketing Services",
    description:
      "Efficient Train Ticketing services providing easy bookings and competitive pricing for hassle-free travel.",
    price: "Starting @ just Rs 199/-",
    buttonLabel: "Book Now",
    image: train,
  },
  {
    id: 6,
    title: "Bus Booking Services",
    description:
      "Affordable Bus Booking Services with easy online reservations and comfortable travel options available.",
    price: "Starting @ just Rs 20000/-",
    buttonLabel: "Book Now",
    image: bus,
  },
  {
    id: 5,
    title: "Passport & Visa Services",
    description:
      "Passport and Visa Services ensuring fast processing, and hassle-free travel documentation solutions.",
    price: "Starting @ just Rs 19999/-",
    buttonLabel: "Book Now",
    image: passport,
  },
];

const ServicesSection = React.memo(() => {
  return (
    <section className="bg-gray-50 py-12" data-aos="fade-up">
      {/* Section Header */}
      <header className="text-center mb-10">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-800">Our Services</h2>
       
      </header>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <article
            key={service.id}
            data-aos="fade-up"
            className="bg-gray-50 max-h-[380px] border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            aria-labelledby={`service-title-${service.id}`}
          >
            <div className="h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="text-center mt-4 mb-0">
                <p id={`service-title-${service.id}`} className="text-xl font-semibold text-gray-800">
                  {service.title}
                </p>
                <p className="text-gray-600 mt-2 text-sm px-5">{service.description}</p>
              </div>
              <div className="p-4 text-center" data-aos="fade-up">
                <Link to="/contact" aria-label={`Book service: ${service.title}`}>
                  <button className="btn1">{service.buttonLabel}</button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});

export default ServicesSection;
