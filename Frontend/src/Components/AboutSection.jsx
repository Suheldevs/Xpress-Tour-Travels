import React from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section data-aos="fade-up" className="relative bg-bgcolor2 py-12">
      <div className="max-w-7xl  mx-auto px-4 lg:px-8 flex flex-col gap-1">
        {/* Heading Section */}
        {/* <div className=""> */}
          <h2 className="md:text-4xl text-lg font-bold text-slate-800 mb-4">
            <FaCar className="inline-block mr-1 text-white bg-primary p-2 rounded-full md:text-5xl text-4xl mb-1" />{" "}
            About Xpress Tour & Travels
          </h2>
          <p className="md:text-lg text-base text-gray-700 text-justify ">
            Welcome to<span className="font-bold"> Xpress Tour & Travels</span>,
            your trusted partner for reliable and affordable cab rental
            services. Established with a passion for providing exceptional
            transportation solutions, we have built a reputation for safety,
            comfort, and customer satisfaction.
          </p>
        {/* </div> */}

        {/* Content Section */}
        {/* <div className=" w-full border border-red-500"> */}
  <p className="md:text-lg text-base text-gray-700 whitespace-normal w-full text-justify">
    Our fleet of well-maintained vehicles is designed to meet all your travel needs, whether you're commuting for business, exploring the city, or heading to the airport. With a team of professional drivers who are knowledgeable about local routes and dedicated to your safety, we guarantee a smooth and enjoyable ride every time.
  </p>
  <p className="md:text-lg text-[1rem] text-justify text-gray-700 mt-1 w-full">
    At <strong>Xpress Tour & Travels</strong>, we prioritize convenience and flexibility. Our easy booking system and <strong>24/7 customer support</strong> ensure that you can reserve your cab whenever you need it. We believe in <strong>transparent pricing</strong>, with no hidden fees, so you can travel with peace of mind.
  </p>
{/* </div> */}





        {/* Features Section */}
        <div className="text-left md:mt-0 mt-2" data-aos="fade-up">
          <ul className="grid md:grid-cols-4 grid-cols-2  gap-10 text-lg text-gray-700">
            <li className="flex items-center gap-0 flex-col">
              <img src="About/car.png" className="h-24" />
              Wide Range of Vehicles
            </li>
            <li className="flex items-center  gap-0 flex-col">
              <img src="About/flexibility.png" className="h-24" />
              Flexible Rental Plans
            </li>
            <li className="flex items-center gap-0 flex-col">
              <img src="About/delivery-location.png" className="h-24" />
              Seamless Pickup & Drop-off
            </li>
            <li className="flex items-center gap-0 flex-col">
              <img src="About/tour-bus.png" className="h-24" />
              Customized Tour Packages
            </li>
          </ul>
        </div>

        {/* Button Section */}
        <div
          data-aos="fade-up"
          className="md:inline md:text-left text-center mt-7"
        >
          <div className="border-0 p-1  inline-block  border-primary rounded-full">
            <Link to="/about" className="btn ">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
