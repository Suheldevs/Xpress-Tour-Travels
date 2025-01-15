import React from "react";
import { FaCarAlt, FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HowWeWork = () => {
  // Steps data
  const steps = [
    {
      icon: <FaCalendarAlt className="text-slate-800 text-4xl mx-auto mb-4" />,
      title: "Book Your Car",
      description:
        "Choose your vehicle and complete the booking process online with just a few clicks.",
      bgClass: "", // Optional: Customize background for each step
    },
    {
      icon: (
        <FaMoneyCheckAlt className="text-slate-800 text-4xl mx-auto mb-4" />
      ),
      title: "Booking Payment",
      description:
        "After reserving, finalize your booking with a secure payment.",
      bgClass: "bg-slate-200 rounded-xl py-4", // Example background class
    },
    {
      icon: <FaCarAlt className="text-slate-800 text-4xl mx-auto mb-4" />,
      title: "Pick-up Car",
      description: "Arrive at the scheduled time to pick up your car.",
      bgClass: "", // Optional: Customize background for each step
    },
  ];

  return (
    <div data-aos="fade-up" className="bg-primary py-16">
      <div className=" relative max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-200 p-2 rounded-full">
              <FaCarAlt className="text-gray-800 text-4xl" />
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-100  tracking-wide">
              How We Work
            </h2>
          </div>
          {/* <h3 className="text-xl font-semibold text-gray-200 mt-4">
            We Are The Best For You
          </h3> */}
        </div>

        {/* Steps Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-4">
          {/* Left Section */}
          <div className="bg-gray-200 p-6 rounded-l-lg shadow-md lg:flex flex-col justify-between hidden ">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              Top Cars
            </h4>
            <p className="text-gray-700 text-sm mb-6">
              Explore our top-rated, most popular cars, each maintained to the
              highest standards for comfort, safety, and performance.
            </p>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md flex items-center justify-center">
              <FaCarAlt className="mr-2" />
             <Link to='/contact'>Book Now</Link>
            </button>
          </div>

          {/* Right Steps */}
          <div className="col-span-3 bg-white p-6 lg:rounded-r-lg lg:rounded-l-none rounded-l-lg rounded-r-lg shadow-md mt-4 md:mt-0">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-justify p-4 ${step.bgClass || ""}`}
                >
                  <div className=" flex text-5xl font-bold text-gray-800/80 justify-start items-center gap-6"> 
                    <div className="">{index + 1}.</div>{" "}
                    <div className="pt-4"> {step.icon}</div>
                  </div>
                  <h4 className="text-2xl font-semibold text-gray-800">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Left Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col mt-4 justify-between lg:hidden ">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">
              Top Cars
            </h4>
            <p className="text-gray-700 text-sm mb-6">
              Explore our top-rated, most popular cars, each maintained to the
              highest standards for comfort, safety, and performance.
            </p>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md flex items-center justify-center">
              <FaCarAlt className="mr-2" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
