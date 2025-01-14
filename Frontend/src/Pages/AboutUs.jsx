import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  AOS.init();

  return (
    <div>
      {/* Breadcrumb Section */}
      <h1 className="breadcrumb relative py-16 font-semibold text-center mb-12 text-white">
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
      <div className="flex flex-col md:flex-row mt-6 md:mx-10 mx-4 gap-6">
        {/* Image Section (optional) */}
        {/* <div className="flex-1 border-2 p-2 rounded-lg border-gray-800">
          <img
            src="aboutUs.jpg"
            alt="Xpress Tour & Travels"
            className="w-full h-full object-cover rounded-lg"
          />
        </div> */}

        {/* Text Content Section */}
        <div
          data-aos="fade-up"
          className="flex-1 p-8 mb-8 shadow-xl rounded-lg bg-white border-2 border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Welcome to Xpress Tour & Travels
          </h2>
          <p className="text-lg">
            <span className="font-bold">Xpress Tour & Travels</span> is a complete travel management company formed by hardcore professionals with an average experience since 1998 in{" "}
            <span className="font-bold">taxi services Lucknow</span>,{" "}
            <span className="font-bold">flight booking</span>, and{" "}
            <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg mt-6">
            We are approved by the{" "}
            <span className="font-bold">
              Government of India, Department of Tourism
            </span> and also a member of{" "}
            <span className="font-bold">
              IATO (Indian Association of Tour Operators)
            </span>.
          </p>
          <p className="text-lg mt-6">
            <span className="font-bold">India</span>, the country of a thousand facets, offers everything – from the desert frontier of{" "}
            <span className="font-bold">Rajasthan</span> to splendid{" "}
            <span className="font-bold">Himalayan hideaways</span>, from the incredible southern landscapes to endless beaches, wildlife encounters, ancient sculpture on granite, rare art and crafts, serene landscapes, and monumental edifices awaiting exploration.
          </p>
          <p className="text-lg mt-6">
            That’s where we,{" "}
            <span className="font-bold">Xpress Tour & Travels</span>, experts in the field of <span className="font-bold">Indian tourism</span>, step in. We help you choose the right places to visit and assist you in reaching your dream destination.
          </p>
          <p className="text-lg mt-6">
            <span className="font-bold">Xpress Tour & Travels</span> offers the best deals possible by providing affordable tour packages and minimal service charges on ticketing services and planning your entire vacation.
          </p>
          <p className="text-lg mt-6">
            <span className="font-bold">xpresstourtravels.com</span> has all the information you need to plan a trip to any destination. Our corporate culture of putting people first has given us an edge and made us stand out in the industry.
          </p>
          <p className="text-lg mt-6">
            We have been recognized as the best travel companion for consumers. We operate a variety of tours for both groups and individual tourists, organizing them efficiently and seamlessly.
          </p>
          <p className="text-lg mt-6">
            We are one of the best{" "}
            <span className="font-bold">ticketing agents in India</span>, providing confirmed{" "}
            <span className="font-bold">train tickets</span> even at the last moment when you think it's too late. We also offer the cheapest{" "}
            <span className="font-bold">airfares</span> for both domestic and international flights.
          </p>
          <p className="text-lg mt-6">
            Our executive team is available 365 days, 24/7, to assist with{" "}
            <span className="font-bold">flight bookings</span> and{" "}
            <span className="font-bold">train bookings</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
