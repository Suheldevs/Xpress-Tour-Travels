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
    const interval = setInterval(() => {
      setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 1500);
    return () => clearInterval(interval); 
  }, [carImages.length]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-800">
      <video
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
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center text-center">
        <div className="md:w-8/12 w-full flex flex-col  justify-center pl-12 items-center text-white">
          <p className="text-sm sm:text-lg bg-opacity-70 bg-black py-2 px-4 rounded-full w-fit">
            Welcome to Xpress Tour & Travels
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6">
            Explore More, Pay Less <br />
            <span className="text-blue-500">Hassle-Free Travel Services</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-medium">
            Your Trusted Travel Partner
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold px-12 py-3 rounded-full shadow-md transition">
              Book Now
            </button>
          </div>
        </div>

        <div className="md:w-4/12 hidden md:flex justify-center items-center">
          <img
            src={carImages[currentCarIndex]} 
            alt="Car"
            className="w-full h-auto  transition-all ease-in-out duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
