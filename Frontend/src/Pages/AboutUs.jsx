import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BookNow from "../Components/BookNow";
import WhyChooseUs from "../Components/WhyChooseUs";
const AboutUs = () => {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
     }, []);

  return (
    <div>
      {/* Breadcrumb Section */}
      <h1 className="breadcrumb relative pt-32 pb-12 font-semibold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-4xl text-shadow-lg">
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
      <div className="flex flex-col md:flex-row border-t-4 text-justify rounded shadow-xl bg-white border-secondar p-10 mt-4 md:mx-10 mx-4 overflow-hidden">
        <div className="flex-[6] p-6" data-aos="fade-right">
          <h2 className="text-3xl font-semibold mb-6">
            Best Cab Rental Services In Lucknow
          </h2>
          <p className="text-lg mb-2">
            Welcome to <span className="font-bold">Xpress Tour & Travels</span>{" "}
            your trusted partner for reliable and affordable cab rental
            services. Established with a passion for providing exceptional
            transportation solutions, we have built a reputation for safety,
            comfort, and customer satisfaction.
            <span className="font-bold">taxi services Lucknow</span>,{" "}
            <span className="font-bold">flight booking</span>, and{" "}
            <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg mb-2">
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
          <p className="text-lg mb-2">
            Our fleet of
            well-maintained vehicles is designed to meet all your travel needs,
            whether you're commuting for business, exploring the city, or
            heading to the airport. With a team of professional drivers who are
            knowledgeable about local routes and dedicated to your safety, we
            guarantee a smooth and enjoyable ride every time.
          </p>
          <p className="text-lg mb-4">
            That’s where we,{" "}
            <span className="font-bold">Xpress Tour & Travels</span>, step in to
            guide you to your dream destinations. With our expertise in{" "}
            <span className="font-bold">Indian tourism</span>, we ensure your
            journeys are seamless and memorable.
          </p>
          <div className="border-0 p-1 mt-3 inline-block  border-primary rounded-full">
            <Link to="/contact" className="btn ">
              Know More
            </Link>
          </div>
        </div>
        <div className="flex-[6] p-2">
          <img
            src="about-us.jpg"
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
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-1 px-2">Our Vision</h3>
          <p className="text-lg px-2">
            To provide safe, reliable, and high-quality transportation services
            that our customers can trust and depend on.
          </p>
        </div>
        <div
          className="p-2 bg-white rounded shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="mission.avif"
            alt="Mission"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-1 px-2">Our Mission</h3>
          <p className="text-lg px-2">
            To deliver exceptional travel experiences by offering tailored
            solutions and promoting sustainable tourism practices.
          </p>
        </div>
        <div
          className="p-2 bg-white rounded shadow-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="services.jpg"
            alt="Services"
            className="w-full h-52 object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold mb-1 px-2">Core Values</h3>
          <p className="text-lg px-2">
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
