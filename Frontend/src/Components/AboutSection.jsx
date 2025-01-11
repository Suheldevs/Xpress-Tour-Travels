import React from "react";
import { FaCar, FaClipboardCheck, FaCogs } from "react-icons/fa";

const AboutComponent = () => {
  return (
    <section data-aos='fade-up' className="bg-bgcolor2 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-wrap lg:flex-nowrap gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          {/* Main Image */}
          <div className="relative">
            <img
              src="about.jpg" 
              alt="Cars"
              className="rounded-xl w-full h-96 "
            />
            <div className="absolute top-4 left-4 bg-gray-300 text-gray-700  font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-4 shadow-md">
              <FaClipboardCheck className="mr-2 text-xl text-secondary" />
              Explore the servises 
              <span className="text-gray-500 text-lg "> At Express Tour & Travels</span>
            </div>
          <div className=" p-2 mt-2 w-full h-fit bg-gray-800  rounded-xl text-white shadow-md">
            <h2 className="text-4xl font-bold">87.9+</h2>
            <p className="text-sm font-semibold">Testimonials</p>
          </div>
          </div>

          {/* Testimonial Box */}
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col items-start gap-3">
          {/* Stats Row */}
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
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg w-full">
            <h2 className="flex items-center mb-4">
              <FaCar className=" text-gray-300 mr-2" />
              <div className=" font-semibold">About Express Tour & Travels</div>
            </h2>

            <p className=" mb-4">
              Experience the freedom of driving your way with reliable, well-maintained vehicles and flexible rental plans. At VCar, we’re committed to delivering convenience and quality, making every journey effortless.
            </p>

            <ul className="list-none space-y-2 ">
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

            <button className="mt-4 bg-gray-500 px-6 py-3 rounded-lg font-semibold  shadow hover:bg-gray-400">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
