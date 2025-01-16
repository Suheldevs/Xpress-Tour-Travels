import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BookNow from "../Components/BookNow";

const AboutUs = () => {
  AOS.init();

  return (
    <div>
      {/* Breadcrumb Section */}
      <h1 className="breadcrumb relative pt-32 pb-12 font-semibold text-center mb-12 text-white">
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
      <div
        data-aos="fade-right"
        className="flex flex-col-reverse md:flex-row border-t-4 rounded shadow-xl bg-white border-secondary mt-1 md:mx-10 mx-4 "
      >
        <div
          data-aos="fade-left"
          className="flex-[8] p-8 mb-8 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-6">
            About Xpress Tour & Travels
          </h2>
          <p className="text-lg" data-aos="fade-up">
            <span className="font-bold">Xpress Tour & Travels</span> is a
            complete travel management company formed by hardcore professionals
            with an average experience since 1998 in{" "}
            <span className="font-bold">taxi services Lucknow</span>,{" "}
            <span className="font-bold">flight booking</span>, and{" "}
            <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg" data-aos="fade-up">
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
          <p className="text-lg mt-1" data-aos="fade-up">
            <span className="font-bold">India</span>, the country of a thousand
            facets, offers everything – from the desert frontier of{" "}
            <span className="font-bold">Rajasthan</span> to splendid{" "}
            <span className="font-bold">Himalayan hideaways</span>, from the
            incredible southern landscapes to endless beaches, wildlife
            encounters, ancient sculpture on granite, rare art and crafts,
            serene landscapes, and monumental edifices awaiting exploration.
          </p>
          <p className="text-lg mt-1" data-aos="fade-up">
            That’s where we,{" "}
            <span className="font-bold">Xpress Tour & Travels</span>, experts in
            the field of <span className="font-bold">Indian tourism</span>, step
            in. We help you choose the right places to visit and assist you in
            reaching your dream destination.
          </p>
          <p className="text-lg mt-1" data-aos="fade-up">
            We are one of the best{" "}
            <span className="font-bold">ticketing agents in India</span>,
            providing confirmed <span className="font-bold">train tickets</span>{" "}
            even at the last moment when you think it's too late. We also offer
            the cheapest <span className="font-bold">airfares</span> for both
            domestic and international flights.
          </p>
          <p className="text-lg mt-1" data-aos="fade-up">
            Our executive team is available 365 days, 24/7, to assist with{" "}
            <span className="font-bold">flight bookings</span> and{" "}
            <span className="font-bold">train bookings</span>.
          </p>
        </div>
        <div className="flex-[4] border-2 rounded p-1 m-1 ">
          <img
            src="aboutUs.png"
            alt="Xpress Tour & Travels"
            className="w-full h-full  object-cover rounded-lg"
          />
        </div>
      </div>

     {/* Our Vision and Mission Section */}
<div
  className="md:flex border-t-4 rounded shadow-xl bg-white border-secondary md:mx-10 mx-4 gap-6 mt-10"
>
  {/* Our Vision Section */}
  <div className="flex-[6] p-8">
    <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
    <p className="text-lg">
      To provide safe and reliable transportation: We prioritize safety and
      reliability, striving to provide a high-quality transportation service
      that customers can trust.
    </p>
    <p className="text-lg mt-2">
      To offer convenient and accessible transportation: Our aim is to make
      transportation more convenient and accessible for people, by offering a
      variety of booking options, affordable prices, and vehicles that can
      accommodate different needs.
    </p>
  </div>

  {/* Our Mission Section */}
  <div className="flex-[6] p-8">
    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
    <p className="text-lg">
      To deliver exceptional travel experiences: Our mission is to ensure that
      every journey becomes a memorable and enriching experience for our
      customers, offering unique and tailored solutions to meet their needs.
    </p>
    <p className="text-lg mt-2">
      To promote sustainable tourism: We are committed to protecting the
      environment and supporting local communities by fostering responsible and
      sustainable tourism practices.
    </p>
    {/* <p className="text-lg mt-2">
      To provide unparalleled customer service: We prioritize customer
      satisfaction by being available 24/7 and addressing their travel
      requirements with professionalism and efficiency.
    </p>
    <p className="text-lg mt-2">
      To stay innovative and adaptive: Our mission includes staying ahead of
      the curve by adopting modern technologies and continuously improving our
      services to provide seamless and hassle-free travel experiences.
    </p> */}
  </div>
</div>


      <BookNow />
    </div>
  );
};

export default AboutUs;
