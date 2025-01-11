import Aos from "aos";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  // Car Images Array
  const carImages = [
    "car1.png", 
    "car2.png",
    "car3.png",
    "car4.webp",
    "car5.png",
    // "car6.webp",
    // "car7.jpg",
  ];

  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration (in ms)
      once: false,     // Whether animation should happen only once
    }); 
    const interval = setInterval(() => {
      setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <section  className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-gray-600 to-gray-900">
      <video
      data-aos='fade-up'
        className="absolute opacity-25 top-0 left-0 h-full w-full object-cover"
        src="bg-video.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div  className="relative z-10 flex flex-col md:flex-row h-full items-center md:justify-start justify-center md:text-left text-center">
        <div data-aos='fade-down' className="md:w-8/12 w-full flex flex-col justify-center pl-12 items-center md:items-start text-white">
          <p className=" sm:text-lg bg-opacity-70 bg-black py-2 px-4 rounded-full w-fit">
            Welcome to Xpress Tour & Travels
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6">
            Explore More, Pay Less <br />
            <span className="text-secondary">Hassle-Free Travel Services</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-medium">
            Your Trusted Travel Partner
          </p>
          <div className="mt-8 flex gap-4">
            <div className="border-4 p-1 animate-bounce border-gray-100 rounded-full">
            <button className="bg-secondary text-white text-xl font-semibold px-12 py-3 rounded-full shadow-md transition">
              Book Now
            </button>
            </div>
            <div className="border-4 p-1 border-gray-100 rounded-full">
            <button className="bg-gray-700 text-white text-xl font-semibold px-12 py-3 rounded-full shadow-md transition">
              Explore Our Services
            </button>
            </div>
          </div>
        </div>

        <div data-aos='fade-left' className="md:w-4/12 hidden md:flex justify-start items-center">
          <img
            src={carImages[currentCarIndex]} 
            alt="Car"
            className="w-full h-auto scale-125 transition-all ease-in-out duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
