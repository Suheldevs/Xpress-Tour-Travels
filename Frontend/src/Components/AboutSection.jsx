import React from "react";
import { FaCar, FaClipboardCheck, FaCogs, FaThumbsUp } from "react-icons/fa";

const AboutComponent = () => {
  return (
    <section data-aos='fade-up' className="bg-bgcolor2 py-12 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-wrap lg:flex-nowrap gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-5/12 gap-6">
          {/* Main Image */}
          <div className="relative">
            <img
              src="aboutUs.jpg" 
              alt="Cars"
              className="rounded-xl w-full h-fit"
            />
            <div className="absolute top-4 animate-pulse right-[-15px] bg-secondary text-black  font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-4 shadow-md">
                <div className='flex items-center gap-2 justify-center text-xl'>
                  <FaThumbsUp className="bg-slate-800 text-slate-50  w-14 h-14 rounded-full p-1"/>
                Explore our top-rated cars
                  </div>
            </div>
            {/* <div className="absolute top-4 left-4 bg-gray-300 text-gray-700  font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-4 shadow-md">
              <FaClipboardCheck className="mr-2 text-xl text-secondary" />
              Explore the servises 
              <span className="text-gray-500 text-lg "> At Express Tour & Travels</span>
            </div> */}
          {/* <div className=" p-2 mt-2 w-full h-fit bg-gray-800  rounded-xl text-white shadow-md">
            <h2 className="text-4xl font-bold">87.9+</h2>
            <p className="text-sm font-semibold">Testimonials</p>
          </div> */}
          </div>

          {/* Testimonial Box */}
        </div>

        {/* Right Section */}
        <div className="lg:w-7/12 flex flex-col items-start gap-3">
          {/* Stats Row
          <div className="flex justify-between w-full px-3">
            <div className="text-center">
              <h2 className=" text-gray-800">20+ year</h2>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div className="text-center">
              <h2 className=" text-gray-800">14+</h2>
              <p className="text-sm text-gray-600">Cars</p>
            </div>
            <div className="text-center">
              <h2 className="text-gray-800">4.5+</h2>
              <p className="text-sm text-gray-600">Google Rating</p>
            </div>
          </div> */}

          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg w-full">
            <h2 className="flex md:text-4xl text-3xl items-center mb-4">
              <FaCar className=" mr-2 text-5xl" />
              <div className=" font-semibold">About Express Tour & Travels</div>
            </h2>

            <p className="text-lg">
            <span className="font-bold">Xpress Tour & Travels</span> is a
            complete travel management company formed by hardcore professionals
            with an average experience since 1998 in{" "}
            <span className="font-bold">taxi services Lucknow</span>,{" "}
            <span className="font-bold">flight booking</span>, and{" "}
            <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg mt-4">
            We are approved by the{" "}
            <span className="font-bold">
              Government of India, Department of Tourism
            </span>{" "}
            and also a member of{" "}
            <span className="font-bold">
              IATO (Indian Association of Tour Operators)
            </span>
            .
          </p>
          <p className="text-lg mt-4">
            <span className="font-bold">India</span>, the country of a thousand
            facets, offers everything – from the desert frontier of{" "}
            <span className="font-bold">Rajasthan</span> to splendid{" "}
            <span className="font-bold">Himalayan hideaways</span>, from the
            incredible southern landscapes to endless beaches, wildlife
            encounters, ancient sculpture on granite, rare art and crafts,
            serene landscapes, and monumental edifices awaiting exploration.
          </p>

            <ul className="list-none space-y-2 mt-2 text-xl font-semibold ">
              <li className="flex items-center">
                <FaCogs className="mr-2" /> Wide Range of Vehicles
              </li>
              <li className="flex items-center">
                <FaCogs className="mr-2" /> Flexible Rental Plans
              </li>
              <li className="flex items-center">
                <FaCogs className="mr-2" /> Seamless Pickup & Drop-off
              </li>
            </ul>

            {/* <button className="mt-4 bg-gray-500 px-6 py-3 rounded-lg font-semibold  shadow hover:bg-gray-400">Book Now</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
