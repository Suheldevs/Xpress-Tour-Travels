import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BookNow from "../Components/BookNow";
import BookCar from "../Components/BookCar";

const AboutUs = () => {
  AOS.init();

  return (
    <div>
      {/* Breadcrumb Section */}
      <h1 className="breadcrumb relative py-16 font-semibold text-center mb-12 text-white">
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
      
      <div data-aos='fade-right' className="flex flex-col-reverse md:flex-row mt-1 md:mx-10 mx-4 gap-6">
        <div className="flex-1  border-gray-800">
          <img
            src="aboutUs.png"
            alt="Xpress Tour & Travels"
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="md:px-10 px-4 mt-4" data-aos='fade-up'>
        <div className="text-3xl font-bold mb-2">Our mission</div>
        <div className="text-justify text-lg" data-aos='fade-up'>
          To provide safe and reliable transportation: We prioritize safety and
          reliability, striving to provide a high-quality transportation service
          that customers can trust. To offer convenient and accessible
          transportation: Our aim to make transportation more convenient and
          accessible for people, by offering a variety of booking options,
          affordable prices, and vehicles that can accommodate different needs.
          {/* To promote sustainability and reduce emissions: We prioritize
          sustainability and work to reduce their environmental impact by using
          low-emission vehicles or supporting other environmentally friendly
          initiatives. To provide exceptional customer service: We prioritize
          customer service, aiming to provide a positive and enjoyable
          experience for passengers from the moment they book a ride to the
          moment they reach their destination. */}
        </div>
      </div>
         
        </div>

        <div
          data-aos="fade-left"
          className="flex-1 p-8 mb-8 border-t-4 rounded shadow-xl bg-white  border-secondary hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-6">
            About Xpress Tour & Travels
          </h2>
          <p className="text-lg" data-aos='fade-up'>
            <span className="font-bold">Xpress Tour & Travels</span> is a
            complete travel management company formed by hardcore professionals
            with an average experience since 1998 in{" "}
            <span className="font-bold">taxi services Lucknow</span>,{" "}
            <span className="font-bold">flight booking</span>, and{" "}
            <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg " data-aos='fade-up'>
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
          <p className="text-lg   mt-1" data-aos='fade-up'>
            <span className="font-bold">India</span>, the country of a thousand
            facets, offers everything – from the desert frontier of{" "}
            <span className="font-bold">Rajasthan</span> to splendid{" "}
            <span className="font-bold">Himalayan hideaways</span>, from the
            incredible southern landscapes to endless beaches, wildlife
            encounters, ancient sculpture on granite, rare art and crafts,
            serene landscapes, and monumental edifices awaiting exploration.
          </p>
          <p className="text-lg   mt-1" data-aos='fade-up'>
            That’s where we,{" "}
            <span className="font-bold">Xpress Tour & Travels</span>, experts in
            the field of <span className="font-bold">Indian tourism</span>, step
            in. We help you choose the right places to visit and assist you in
            reaching your dream destination.
          </p>
          {/* <p className="text-lg   mt-1">
            <span className="font-bold">Xpress Tour & Travels</span> offers the
            best deals possible by providing affordable tour packages and
            minimal service charges on ticketing services and planning your
            entire vacation.
          </p> */}
          {/* <p className="text-lg   mt-1">
            <span className="font-bold">xpresstourtravels.com</span> has all the
            information you need to plan a trip to any destination. Our
            corporate culture of putting people first has given us an edge and
            made us stand out in the industry.
          </p> */}
          {/* <p className="text-lg   mt-1">
            We have been recognized as the best travel companion for consumers.
            We operate a variety of tours for both groups and individual
            tourists, organizing them efficiently and seamlessly.
          </p> */}
          <p className="text-lg   mt-1" data-aos='fade-up'>
            We are one of the best{" "}
            <span className="font-bold">ticketing agents in India</span>,
            providing confirmed <span className="font-bold">train tickets</span>{" "}
            even at the last moment when you think it's too late. We also offer
            the cheapest <span className="font-bold">airfares</span> for both
            domestic and international flights.
          </p>
          <p className="text-lg   mt-1" data-aos='fade-up'>
            Our executive team is available 365 days, 24/7, to assist with{" "}
            <span className="font-bold">flight bookings</span> and{" "}
            <span className="font-bold">train bookings</span>.
          </p>
        </div>
      </div>
      <BookNow />
    </div>
  );
};

export default AboutUs;
