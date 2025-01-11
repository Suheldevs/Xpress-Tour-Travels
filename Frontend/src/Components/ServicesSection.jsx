import React from "react";
import { FaCar, FaPlane, FaPassport, FaTrain, FaGlobe } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Car Rental Services",
    description: "Affordable, reliable cars for every journey.",
    icon: <FaCar className="  text-gray-800 text-5xl" />,
  },
  {
    id: 2,
    title: "Air Ticketing",
    description: "Seamless flight bookings for all your destinations.",
    icon: <FaPlane className="  text-gray-800 text-5xl" />,
  },
  {
    id: 3,
    title: "Passport & Visa Assistance",
    description: "Fast and hassle-free passport and visa services.",
    icon: <FaPassport className="  text-gray-800 text-5xl" />,
  },
  {
    id: 4,
    title: "Train Ticketing",
    description: "Convenient train ticket bookings nationwide.",
    icon: <FaTrain className="  text-gray-800 text-5xl" />,
  },
  {
    id: 5,
    title: "Tour Packages",
    description: "Customizable tours for families, couples, and solo travelers.",
    icon: <FaGlobe className="  text-gray-800 text-5xl" />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-50 lg:py-12 md:py-10 py-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-4">
          Explore our range of premium services designed to make your journey
          seamless and memorable.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex flex-col items-center text-center p-6">
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
            {/* CTA Button */}
            <div className=" text-white text-center py-3 bg-slate-800 transition">
              <button className="text-sm font-medium uppercase">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
