import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BookNow from "../Components/BookNow";

const AboutUs = () => {
  AOS.init();

  return (
    <div>
      {/* Breadcrumb Section */}
      <h1 className="breadcrumb relative pt-32 pb-12 font-semibold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-4xl text-shadow-lg">
          About Us
        </div>
        <div className="relative z-10 text-lg mt-2 text-gray-200">
          <Link to="/" className="hover:text-yellow-400 hover:cursor-pointer">
            Home
          </Link>{" "}
          / About Us
        </div>
      </h1>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row border-t-4 rounded shadow-xl bg-white border-secondary mt-4 md:mx-10 mx-4 overflow-hidden">
        <div className="flex-[6] p-6" data-aos="fade-right">
          <h2 className="text-3xl font-semibold mb-6">About Xpress Tour & Travels</h2>
          <p className="text-lg mb-4">
            <span className="font-bold">Xpress Tour & Travels</span> is a complete travel management company formed by professionals with extensive experience since 1998 in <span className="font-bold">taxi services Lucknow</span>, <span className="font-bold">flight booking</span>, and <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg mb-4">
            We are approved by the <span className="font-bold">Government of India, Department of Tourism</span> and are proud members of the <span className="font-bold">IATO (Indian Association of Tour Operators)</span>.
          </p>
          <p className="text-lg mb-4">
            From the desert frontiers of <span className="font-bold">Rajasthan</span> to the serene <span className="font-bold">Himalayan hideaways</span>, from incredible southern landscapes to endless beaches, wildlife encounters, ancient sculptures, rare art and crafts, and monumental edifices, India offers a wealth of travel experiences.
          </p>
          <p className="text-lg mb-4">
            That’s where we, <span className="font-bold">Xpress Tour & Travels</span>, step in to guide you to your dream destinations. With our expertise in <span className="font-bold">Indian tourism</span>, we ensure your journeys are seamless and memorable.
          </p>
        </div>
        <div className="flex-[6]">
          <img
            src="aboutUs.png"
            alt="Xpress Tour & Travels"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Highlighted Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mx-10 mx-4">
        <div className="p-2 bg-white rounded shadow-xl" data-aos="fade-up">
          <img
            src="vision.jpg"
            alt="Vision"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-lg">
            To provide safe, reliable, and high-quality transportation services that our customers can trust and depend on.
          </p>
        </div>
        <div className="p-2 bg-white rounded shadow-xl" data-aos="fade-up" data-aos-delay="100">
          <img
            src="mission.avif"
            alt="Mission"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-lg">
            To deliver exceptional travel experiences by offering tailored solutions and promoting sustainable tourism practices.
          </p>
        </div>
        <div className="p-2 bg-white rounded shadow-xl" data-aos="fade-up" data-aos-delay="200">
          <img
            src="services.jpg"
            alt="Services"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3">Our Services</h3>
          <p className="text-lg">
            From last-minute <span className="font-bold">train tickets</span> to affordable <span className="font-bold">airfares</span>, we provide round-the-clock assistance for all your travel needs.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        >
          <BookNow />
        </div>
      </div>
    // </div>
  );
};

export default AboutUs;
