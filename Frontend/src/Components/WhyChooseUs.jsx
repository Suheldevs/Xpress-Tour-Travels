import React from "react";
import { FaClock, FaSuitcaseRolling, FaPlaneDeparture, FaAward, FaHandshake } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaClock />,
      title: "24/7 Availability",
      description:
        "We work on a 24*7 schedule. Call us anytime, anywhere, for happy and safe traveling. We take care of everything from boarding to landing.",
    },
    {
      icon: <FaSuitcaseRolling />,
      title: "Customized Luxury Planning",
      description:
        "We plan your journey according to your needs, keeping luxury in mind for 100% tension-free and comfortable travel.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Cheapest Fares Guaranteed",
      description:
        "We offer the lowest fares for international & domestic flights. Compare us with platforms like YATRA.COM, and you'll see the difference.",
    },
    {
      icon: <FaAward />,
      title: "16+ Years of Expertise",
      description:
        "With over 16 years of experience, we are experts in ticketing and travel-related services, ensuring a hassle-free experience.",
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Commitment",
      description:
        "We deliver on our promises with no hidden activities or false claims, ensuring smooth and trustworthy service.",
    },
  ];

  return (
    <section className="bg-slate-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <p className="text-lg mb-12">
          Here's why Express Tour & Travel stands out from the rest:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-secondary rounded-full p-4 mb-4">
                <div className="text-3xl">{reason.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-base">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
