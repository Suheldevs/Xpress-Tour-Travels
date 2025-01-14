import React from "react";
import { FaClock, FaSuitcaseRolling, FaPlaneDeparture, FaAward, FaCarSide, FaPassport } from "react-icons/fa"; // Add new icons for car rental and tour

const WhyChooseUs = () => {
  const reasons = [
    { icon: <FaClock size={40} />, title: "24/7 Availability" },
    { icon: <FaSuitcaseRolling size={40} />, title: "Customized Luxury Planning" },
    { icon: <FaPlaneDeparture size={40} />, title: "Cheapest Fares Guaranteed" },
    { icon: <FaAward size={40} />, title: "16+ Years of Expertise" },
    { icon: <FaCarSide size={40} />, title: "Hassle-Free Booking" },  // New feature
    { icon: <FaPassport size={40} />, title: "Exclusive Travel Packages" }, // New feature
  ];

  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 py-8 md:py-10 lg:py-12 ">
      <h2 className="text-center flex items-center justify-center text-4xl font-bold  ">

        Why Choose Us
       
      </h2>

      <div className="flex flex-col items-center justify-center lg:flex-row max-w-7xl">
        {/* Left-side text boxes */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <div
              key={index}
              className="relative w-full max-w-[20rem] flex items-center gap-4 p-4 bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl">{reason.icon}</div>
              <h2 className="text-xl font-semibold tracking-wide">{reason.title}</h2>
            </div>
          ))}
        </div>

        {/* Rotating circle with central image */}
        <div className="relative h-[25rem] w-[32rem] flex items-center justify-center sm:my-16">
          <div className="absolute animate-spin- duration-1000 sm:size-[24.5rem] size-[16.5rem] rounded-full border-4 border-yellow-500 flex items-center justify-center">
            {/* {reasons.map((reason, index) => (
              <div
                key={index}
                className="absolute bg-white shadow-[0px_0px_12px_-6px_#000] rounded-full p-2"
                style={{
                  transform: `rotate(${index * (360 / reasons.length)}deg) translate(8rem)`,
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    transform: `rotate(${-index * (360 / reasons.length)}deg)`,
                  }}
                >
                  {reason.icon}
                </div>
              </div>
            ))} */}
          <img src='why-choose-us1.webp' className="w-full rounded-full p-1 h-auto object-cover" alt="Car" />
          </div>
        </div>

        {/* Right-side text boxes */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {reasons.slice(3).map((reason, index) => (
            <div
              key={index}
              className="relative w-full max-w-[20rem] flex items-center gap-4 p-4 bg-gradient-to-r from-[#FFB800] to-[#FF8C00] text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl">{reason.icon}</div>
              <h2 className="text-xl font-semibold tracking-wide">{reason.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
