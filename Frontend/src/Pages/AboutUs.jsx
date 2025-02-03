import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BookNow from "../Components/BookNow";
import WhyChooseUs from "../Components/WhyChooseUs";
import { FaCar } from "react-icons/fa";
const AboutUs = () => {

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Breadcrumb Section */}
      <h1 className="breadcrumb relative md:pt-32 pt-24 pb-12 font-semibold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-2xl px-6 text-shadow-lg">
          About Xpress Tour & Travels
        </div>
        <div className="relative z-10 text-lg mt-2 text-secondary">
          <Link
            to="/"
            className="text-white hover:text-secondary hover:cursor-pointer"
          >
            Home /
          </Link>{" "}
          About Us
        </div>
      </h1>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row text-start rounded shadow-xl bg-white md:p-10 px-4  mt-4 md:mx-10 mx-2 overflow-hidden">
        <div className="flex-[6] md:p-6 p-0 text-left" data-aos="fade-right">
          {/* <h2 className="md:text-3xl text-2xl font-semibold mb-6">
            Best Cab Rental Services In Lucknow
          </h2> */}
          <div className="=">
            <p className="md:text-lg text-base text-gray-700 lg:text-start text-start">
              <span className="font-bold">
                Welcome to Xpress Tour & Travels
              </span>
              , your trusted partner for reliable and affordable cab rental
              services. Established with a passion for providing exceptional
              transportation solutions, we have built a reputation for safety,
              comfort, and customer satisfaction. We offer a range of services,
              including <strong>Best Cab Rental Services In Lucknow</strong>,{" "}
              <span className="font-bold">taxi services in Lucknow</span>,{" "}
              <span className="font-bold">flight booking</span>, and{" "}
              <span className="font-bold">tour packages</span>.
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-4">
          <p className="text-base text-gray-700 lg:text-start text-start  mt-4 md:text-lg">
  We are approved by the{" "}
  <span className="font-bold">
    Government of India, Department of Tourism
  </span>{" "}
  and are proud members of the{" "}
  <span className="font-bold">
    IATO (Indian Association of Tour Operators)
  </span>
  .
</p>

            <p className="text-base text-gray-700 lg:text-start text-start   md:text-lg ">
              Our fleet of well-maintained vehicles is designed to meet all your
              travel needs, whether you're commuting for business, exploring the
              city, or heading to the airport. With a team of professional
              drivers who are knowledgeable about local routes and dedicated to
              your safety, we guarantee a smooth and enjoyable ride every time.
            </p>
            <p className="text-base text-gray-700 lg:text-justify text-start mt-10 md:text-lg">
              That’s where we,{" "}
              <span className="font-bold">Xpress Tour & Travels</span>, step in
              to guide you to your dream destinations. With our expertise in{" "}
              <span className="font-bold">Indian tourism</span>, we ensure your
              journeys are seamless and memorable.
            </p>
          </div>

          <div className="border-0 p-1 mt-4 md:mb-0 mb-4 inline-block  border-primary rounded-full">
            <Link to="/contact" className="btn ">
              Know More
            </Link>
          </div>
        </div>
        <div className="flex-[6] md:block hidden md:p-2 p-0">
          <img
            src="about-us.jpg"
            data-aos="zoom-in"
            loading="lazy"
            alt="Xpress Tour & Travels"
            className="w-full h-full object-cover border-2 rounded sdw"
          />
        </div>
      </div>

      {/* Highlighted Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mx-10 mx-4">
        <div className="p-2 bg-white rounded shadow-xl" data-aos="fade-up">
          <img
            src="vision.jpg"
            alt="Vision"
            loading="lazy"
            data-aos="zoome-in"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-1 px-2">Our Vision</h3>
          <p className="md:text-lg text-base px-2">
            To provide safe, reliable, and high-quality transportation services
            that our customers can trust and depend on.
          </p>
        </div>
        <div className="p-2 bg-white rounded shadow-2xl" data-aos="fade-up">
          <img
            data-aos="zoome-in"
            src="mission.jpg"
            alt="Mission"
            loading="lazy"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-1 px-2">Our Mission</h3>
          <p className="md:text-lg text-base px-2">
            To deliver exceptional travel experiences by offering tailored
            solutions and promoting sustainable tourism practices.
          </p>
        </div>
        <div className="p-2 bg-white rounded shadow-xl" data-aos="fade-up">
          <img
            data-aos="zoom-in"
            loading="lazy"
            src="services.jpg"
            alt="Services"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-1 px-2">Core Values</h3>
          <p className="md:text-lg text-base px-2">
            From last-minute <span className="font-bold">train tickets</span> to
            affordable <span className="font-bold">airfares</span>, we provide
            round-the-clock assistance for all your travel needs.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div>
        <WhyChooseUs />
        <BookNow />
      </div>
    </div>
    // </div>
  );
};

export default AboutUs;
