import React from "react";
import { FaCarAlt, FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";

const HowWeWork = () => {
  return (
    <div className="bg-slate-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-200 p-2 rounded-full">
              <FaCarAlt className="text-gray-800 text-lg" />
            </div>
            <h2 className=" text-gray-100 uppercase tracking-wide">
              How We Work
            </h2>
          </div>
          <h3 className="text-xl font-semisbold text-gray-200 mt-4">
            We Are The Best For You
          </h3>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6 ">
          {/* Left Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Top Cars</h4>
            <p className="text-gray-700 text-sm mb-6">
              Explore our top-rated, most popular cars, each maintained to the
              highest standards for comfort, safety, and performance.
            </p>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md flex items-center justify-center">
              <FaCarAlt className="mr-2" />
              Book Now
            </button>
          </div>

          {/* Right Steps */}
          <div className="col-span-3 bg-white p-6 rounded-lg shadow-md mt-4 md:mt-0">
            <div className="grid grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="text-center">
                <FaCalendarAlt className="text-slate-800 text-4xl mx-auto mb-4" />
                <h4 className="text-2xl font-semibold text-gray-800">
                  Book Your Car
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Choose your vehicle and complete the booking process online
                  with just a few clicks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center rounded-2xl bg-slate-200">
                <FaMoneyCheckAlt className="text-slate-800 text-4xl mx-auto mb-4" />
                <h4 className="text-2xl font-semibold text-gray-800">
                  Booking Payment
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  After reserving, finalize your booking with a secure payment.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <FaCarAlt className="text-slate-800 text-4xl mx-auto mb-4" />
                <h4 className="text-2xl font-semibold text-gray-800">
                  Pick-up Car
                </h4>
                <p className="text-gray-600 text-sm mt-2">
                  Arrive at the scheduled time to pick up your car.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HowWeWork;
