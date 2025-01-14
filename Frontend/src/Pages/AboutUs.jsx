import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" ">
        <div className=" bg-cover h-36 text-center">

     <h1 className="md:text-4xl text-3xl font-bold text-center  rounded-lg text-white ">About Us</h1>
     <div className="text-white font-semibold text-lg "> <Link to='/' className="underline underline-offset-4">Home</Link> - About us </div>
        </div>

      {/* About Us Section */}
      <div className="flex mt-4 mx-10 flex-col-reverse md:flex-row items-center px-4 gap-4 mb-4">
        {/* Image Section */}
        {/* <div className="flex-1 mt-0 border-2 p-2 rounded-lg border-gray-800">
          <img
            src="aboutUs.jpg"
            alt="Xpress Tour & Travels"
            className="w-full h-full object-cover rounded-lg"
          />
        </div> */}

        {/* Text Content Section */}
        <div data-aos='fade-up' className="flex-1 p-6  shadow rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to Xpress Tour & Travels
          </h2>
          <p className="text-lg">
            <span className="font-bold">Xpress Tour & Travels</span> is a
            complete travel management company formed by hardcore professionals
            with an average experience since 1998 in{" "}
            <span className="font-bold">taxi services Lucknow</span>,{" "}
            <span className="font-bold">flight booking</span>, and{" "}
            <span className="font-bold">tour packages</span>.
          </p>
          <p className="text-lg mt-4">
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
          <p className="text-lg mt-4">
            <span className="font-bold">India</span>, the country of a thousand
            facets, offers everything – from the desert frontier of{" "}
            <span className="font-bold">Rajasthan</span> to splendid{" "}
            <span className="font-bold">Himalayan hideaways</span>, from the
            incredible southern landscapes to endless beaches, wildlife
            encounters, ancient sculpture on granite, rare art and crafts,
            serene landscapes, and monumental edifices awaiting exploration.
          </p>
          <p className="text-lg mt-4">
            That’s where we,{" "}
            <span className="font-bold">Xpress Tour & Travels</span>, experts in
            the field of <span className="font-bold">Indian tourism</span>, step
            in. We help you choose the right places to visit and assist you in
            reaching your dream destination.
          </p>
          <p className="text-lg mt-4">
            <span className="font-bold">Xpress Tour & Travels</span> offers the
            best deals possible by providing affordable tour packages and
            minimal service charges on ticketing services and plan your entire
            vacation.
          </p>
          <p className="text-lg mt-4">
            <span className="font-bold">xpresstourtravels.com</span> has all the
            information you need to plan a trip to any destination. Our
            corporate culture of putting people first has given us an edge and
            made us stand out in the industry.
          </p>
          <p className="text-lg mt-4">
            We have been recognized as the best travel companion for consumers.
            We operate a variety of tours for both groups and individual
            tourists, organizing them efficiently and seamlessly.
          </p>
          <p className="text-lg mt-4">
            We are one of the best{" "}
            <span className="font-bold">ticketing agents in India</span>,
            providing confirmed <span className="font-bold">train tickets</span>{" "}
            even at the last moment when you think it's too late. We also offer
            the cheapest <span className="font-bold">airfares</span> for both
            domestic and international flights.
          </p>
          <p className="text-lg mt-4">
            Our executive team is available 365 days, 24/7, to assist with{" "}
            <span className="font-bold">flight bookings</span> and{" "}
            <span className="font-bold">train bookings</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
