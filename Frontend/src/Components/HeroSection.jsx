import Aos from "aos";
import React, { useState, useEffect } from "react";
import { FaCar} from "react-icons/fa";
import { Link } from "react-router-dom";

import car1 from '../assets/Home/car1.webp'
import car2 from '../assets/Home/car5.webp'
import car3 from '../assets/Home/car3.webp'

const HeroSection = () => {
  const carImages = [
    `${car1}`, 
    `${car2}`, 
    `${car3}`, 
  ]

  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,     
    }); 
    const interval = setInterval(() => {
      setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <section  className="relative md:h-[90vh] h-[60vh] w-full overflow-hidden bg-gradient-to-b  from-gray-600 to-primary">
      <video
      data-aos='fade-up'
        className="absolute opacity-25 top-0 left-0 h-full   w-full object-cover"
        src="https://res.cloudinary.com/diz0v7rws/video/upload/v1739359332/Express/bg-video.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div  className="relative z-10 flex flex-col md:flex-row  md:pt-14  h-full items-center md:justify-start md:mt-14 mt-10  md:px-8 px-0 justify-center md:text-left text-center">
        <div data-aos='fade-down' className="md:w-8/12 w-full flex flex-col justify-center md:pl-12 px-4 md:px-0 pb-10 items-center md:items-start text-white">
          
          <p className=" sm:text-lg lg:text-[2.5rem] md:text-[2rem] font-bold bg-opacity-70  py-4 pl-2 pr-4 lg:pr-6 md:pr-0 rounded-r-full w-fit flex justify-center items-center gap-2 ">
         <span ><FaCar className="text-secondary md:mr-4"/></span>Xpress Tour & Travels
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2">
          <div className="text-2xl md:text-[1.5rem]  font-bold mt-2 ">
            Explore More, Pay Less 
          </div>
          <div className="text-secondary md:mt-2 mt-1 text-xl font-bold">Hassle-Free Travel Services</div>
          </div>
  
          
          <div className="md:mt-8 mt-4 flex gap-4 flex-col md:flex-row items-center">
            <div className="border-4 p-1 lg:animate-bounce hover:animate-none border-gray-100 rounded-full">
            <Link to='/contact' aria-label="Book Now" title="Book Now" className="bg-secondary block text-white lg:text-xl text-lg font-semibold md:px-12 px-10 md:py-3 py-2 rounded-full shadow-md transition">
              Book Now
            </Link>
            </div>
            <Link to='/services' className="md:block hidden border-4 p-1 border-gray-100 rounded-full">
            <button aria-label="Explore Our Services" title="Explore Our Services" className="bg-primary hover:bg-primary/60 text-white lg:text-xl text-lg font-semibold px-12 py-3 rounded-full shadow-md transition">
              Explore Our Services
            </button>
            </Link>
          </div>
        </div>

        <div data-aos='fade-left' className="md:w-4/12 m z-10 bg-black/5 shadow-sm transition-all ease-in-out duration-1000  hidden md:flex justify-start items-end">
          <img
            src={carImages[currentCarIndex]} 
            alt="Car"
            loading="eager"
            className="w-full h-auto scale-150 ml-[-50px] transition-all ease-in-out duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
