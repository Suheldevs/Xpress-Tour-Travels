import React from "react";
import { FaMoneyBillAlt, FaShieldAlt, FaHeadset, FaClipboardList } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="bg-primary py-8 lg:py-12 md:py-10">
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-2 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-4 grid-cols-1 border rounded-2xl  border-white/10 bg-white/5">
          <div className="flex-1 text-center shadow-md p-6 hover:border hover:border-gray-300 hover:bg-white/10 rounded-3xl transition-all ease-in-out duration-400 hover:cursor-pointer">
            <div className="flex justify-center items-center mx-auto  text-white rounded-full mb-4">
              <FaMoneyBillAlt className="text-5xl"/>
            </div>
            <h2 className="text-white  mb-1">Best Pricing</h2>
            <div className="opacity-50"><hr/></div>
            <p className="text-gray-400 mt-4">
              Get the best rates with transparent pricing, ensuring top value for every drive.
            </p>
          </div>

          <div className="flex-1  text-center  shadow-md p-6 hover:border hover:border-gray-300 hover:bg-white/10 rounded-3xl transition-all ease-in-out duration-400 hover:cursor-pointer">
            <div className="flex justify-center items-center mx-auto  text-white rounded-full mb-4">
              <FaShieldAlt className="text-5xl"/>
            </div>
            <h2 className="text-white mb-1">Fully Insured</h2>
            <div className="opacity-50"><hr/></div>
            <p className="text-gray-400 mt-4">
              Drive worry-free with full insurance coverage for you and the vehicle.
            </p>
          </div>

          <div className="flex-1 text-center  shadow-md p-6 hover:border hover:border-gray-300 hover:bg-white/10 rounded-3xl transition-all ease-in-out duration-400 hover:cursor-pointer">
            <div className="flex justify-center items-center w-14 h-14 mx-auto  text-white rounded-full mb-4">
              <FaHeadset className="text-5xl" />
            </div>
            <h2 className="text-white font-bold  mb-1">24/7 Support</h2>
            <div className="opacity-50"><hr/></div>
            <p className="text-gray-400 mt-4">
              Our team is here for you anytime, offering assistance around the clock.
            </p>
          </div>

          <div className="flex-1 text-center  shadow-md p-6 hover:border hover:border-gray-300 hover:bg-white/10 rounded-3xl transition-all ease-in-out duration-400 hover:cursor-pointer">
            <div className="flex justify-center items-center w-14 h-14 mx-auto text-white rounded-full mb-4">
              <FaClipboardList className="text-5xl"/>
            </div>
            <h2 className="text-white mb-1">Easy Booking</h2>
            <div className="opacity-50"><hr/></div>
            <p className="text-gray-400  mt-4">
              Enjoy a quick, hassle-free booking process—reserve your car in minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
