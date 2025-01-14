import React from "react";
import { FaCogs, FaArrowRight, FaCar, FaRoute, FaMapMarkedAlt, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section data-aos='fade-up' className="bg-bgcolor2 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
        {/* Heading Section */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
           <FaCar className="inline-block mr-2 text-secondary"/> About Express Tour & Travels
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Xpress Tour & Travels</span> is a complete travel management company
            formed by hardcore professionals with an average experience since 1998 in
            <span className="font-bold"> taxi services Lucknow</span>,
            <span className="font-bold"> flight booking</span>, and
            <span className="font-bold"> tour packages</span>.
          </p>
        </div>

        {/* Content Section */}
        <div className="text-left">
          <p className="text-lg text-gray-700">
            We are approved by the
            <span className="font-bold"> Government of India, Department of Tourism</span> and also a member of
            <span className="font-bold"> IATO (Indian Association of Tour Operators)</span>.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <span className="font-bold">India</span>, the country of a thousand facets, offers everything – from the
            desert frontier of <span className="font-bold">Rajasthan</span> to splendid
            <span className="font-bold"> Himalayan hideaways</span>, from the incredible southern landscapes to
            endless beaches, wildlife encounters, ancient sculpture on granite, rare art and crafts, serene landscapes,
            and monumental edifices awaiting exploration.
          </p>
        </div>

        {/* Features Section */}
        <div className="text-left">
          <ul className="grid md:grid-cols-4 grid-cols-2  gap-4 text-lg text-gray-700">
            <li className="flex items-center gap-4 flex-col">
              <FaCar className="text-5xl text-secondary" /> Wide Range of Vehicles
            </li>
            <li className="flex items-center gap-4 flex-col">
              <FaRoute className="text-5xl text-secondary" /> Flexible Rental Plans
            </li>
            <li className="flex items-center gap-4 flex-col">
              <FaMapMarkedAlt className="text-5xl text-secondary" /> Seamless Pickup & Drop-off
            </li>
            <li className="flex items-center gap-4 flex-col">
              <FaGlobe className="text-5xl text-secondary" /> Customized Tour Packages
            </li>
          </ul>
        </div>

        {/* Button Section */}
        <div className="text-left mt-6">
          <Link to='/about' className="bg-secondary inline-block text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-secondary-dark items-center gap-2">
            Know More About Us <FaArrowRight className="inline-block ml-2 " />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
