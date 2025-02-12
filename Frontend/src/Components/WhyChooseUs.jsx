import React from "react";
import { FaClock, FaSuitcaseRolling, FaPlaneDeparture, FaAward, FaCarSide, FaPassport } from "react-icons/fa"; // Add new icons for car rental and tour
import { FaCarAlt } from "react-icons/fa";
import wcu from '../assets/Home/wcu.webp'
const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaCarAlt size={40} />, title: "Variety of Vehicles" },
    { icon: <FaSuitcaseRolling size={40} />, title: "Customized Luxury Planning" },
    { icon: <FaPlaneDeparture size={40} />, title: "Cheapest Fares Guaranteed" },
    { icon: <FaAward size={40} />, title: "Reliability" },
    { icon: <FaCarSide size={40} />, title: "Hassle-Free Booking" }, 
    { icon: <FaPassport size={40} />, title: "Exclusive Travel Packages" }, 
  ];

  return (
    <div data-aos='fade-up' className="relative flex flex-col items-center justify-center w-full gap-4 py-8 md:py-10 lg:py-10">
      <h2 className="text-center text-primary flex items-center justify-center md:text-4xl text-2xl font-bold  ">
        Why Choose Us
      </h2>
      <div className="flex flex-col mt-2 items-center justify-center lg:flex-row max-w-7xl">
        {/* Left-side text boxes */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <div
            data-aos='fade-up'
              key={index}
              className="relative w-full max-w-[20rem] flex items-center gap-4 p-4 bg-gradient-to-r bg-primary text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl">{reason.icon}</div>
              <h2 className="md:text-xl text-lg font-semibold tracking-wide">{reason.title}</h2>
            </div>
          ))}
        </div>

        {/* Rotating circle with central image */}
        <div className="relative md:h-[25rem] h-[20rem] md:w-[32rem] w-[20rem] flex items-center justify-center ">
          <div className="absolute animate-spin- duration-1000 sm:size-[24.5rem] size-[16.5rem] rounded-full border-4 border-primary flex items-center justify-center">
           
          <img src={wcu} loading="lazy" className="w-full rounded-full p-1 h-full object-cover" alt="Car" />
          </div>
        </div>

        {/* Right-side text boxes */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {reasons.slice(3).map((reason, index) => (
            <div
            data-aos='fade-up'
              key={index}
              className="relative w-full max-w-[20rem] flex items-center gap-4 p-4 bg-primary text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl">{reason.icon}</div>
              <h2 className="md:text-xl text-lg font-semibold tracking-wide">{reason.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
