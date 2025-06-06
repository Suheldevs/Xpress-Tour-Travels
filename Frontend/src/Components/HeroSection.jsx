import Aos from "aos";
import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

import car1 from "../assets/Home/car1.webp";
import car2 from "../assets/Home/car5.webp";
import car3 from "../assets/Home/car3.webp";

const carImages = [car1, car2, car3];

const HeroSection = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 768) {
      Aos.init({ duration: 2000, once: true });
    }

    let frame;
    const cycleImages = () => {
      setCurrentCarIndex((prev) => (prev + 1) % carImages.length);
      frame = requestAnimationFrame(() => setTimeout(cycleImages, 1500));
    };
    cycleImages();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative md:h-[90vh] h-[60vh] w-full overflow-hidden bg-gradient-to-b from-gray-600 to-primary">
      <video
        className="absolute opacity-25 top-0 left-0 h-full w-full object-cover"
        src="https://res.cloudinary.com/diz0v7rws/video/upload/q_auto,f_auto/v1739359332/Express/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        crossOrigin="anonymous"
      >
        <track
          src="captions.vtt"
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row h-full items-center md:justify-start md:pt-10 md:mt-14 mt-10 md:px-8 px-0 justify-center md:text-left text-center">
        <div
          className="md:w-8/12 w-full flex flex-col justify-center md:pl-12 px-4 md:px-0 pb-10 items-center md:items-start text-white"
        >
          <p className="sm:text-lg lg:text-[2.5rem] md:text-[2rem] font-bold bg-opacity-70 py-4 pl-2 pr-4 lg:pr-6 md:pr-0 rounded-r-full w-fit flex justify-center items-center gap-2">
            <span>
              <FaCar className="text-secondary md:mr-4" />
            </span>{" "}
            Xpress Tour & Travels
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <div className="text-2xl md:text-[1.5rem] font-bold mt-2">
              Explore More, Pay Less
            </div>
            <div className="text-secondary md:mt-2 mt-1 text-xl font-bold">
              Hassle-Free Travel Services
            </div>
          </div>
          <div className="md:mt-8 mt-4 flex gap-4 flex-col md:flex-row items-center">
            <div className="border-4 p-1 lg:animate-bounce hover:animate-none border-gray-100 rounded-full">
              <Link
                to="/contact"
                aria-label="Book Now"
                title="Book Now"
                className=" bgcolor block text-white lg:text-xl text-lg font-semibold md:px-12 px-10 md:py-3 py-2 rounded-full shadow-md transition"
              >
                Book Now
              </Link>
            </div>
            <Link
              to="/services"
               aria-label="Explore our Services"
                title="Explore our Services"
              className="hidden md:inline-block border-4 p-1 border-gray-100 rounded-full cursor-pointer"
            >
              <div className="bg-primary hover:bg-primary/60 text-white lg:text-xl text-lg font-semibold px-12 py-3 rounded-full shadow-md transition">
                Explore Our Services
              </div>
            </Link>
          </div>
        </div>
        <div
          className="md:w-4/12 z-10 bg-black/5 shadow-sm hidden md:flex justify-start items-end"
        >
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
