import React from "react";
import {
  FaMoneyBillAlt,
  FaShieldAlt,
  FaHeadset,
  FaClipboardList,
} from "react-icons/fa";

const features = [
  {
    icon: (
      <FaMoneyBillAlt className="text-5xl" aria-label="Best Pricing Icon" />
    ),
    title: "Best Pricing",
    description:
      "Get the best rates with transparent pricing, ensuring top value for every drive.",
  },
  {
    icon: <FaHeadset className="text-5xl" aria-label="24/7 Support Icon" />,
    title: "24/7 Support",
    description:
      "Our team is here for you anytime, offering assistance around the clock.",
  },
  {
    icon: <FaShieldAlt className="text-5xl" aria-label="Fully Insured Icon" />,
    title: "Fully Insured",
    description:
      "Drive worry-free with full insurance coverage for you and the vehicle.",
  },
  {
    icon: (
      <FaClipboardList className="text-5xl" aria-label="Easy Booking Icon" />
    ),
    title: "Easy Booking",
    description:
      "Enjoy a quick, hassle-free booking process—reserve your car in minutes.",
  },
];

const FeatureSection = React.memo(() => {
  return (
    <section className="bg-primary py-8 lg:py-12 md:py-10">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-2 sm:px-12 lg:px-16"
      >
        <div className="grid md:grid-cols-4 grid-cols-1 border rounded-2xl border-white/10 bg-white/5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex-1 text-center shadow-md p-6 border  
                        rounded-3xl transition-all duration-400 ease-in-out 
                        hover:border-gray-300 hover:bg-white/10 hover:cursor-pointer ${
                          index == 1
                            ? "border-gray-300 bg-white/10 cursor-pointer"
                            : "border-transparent bg-transparent"
                        }`}
            >
              <div className="flex justify-center items-center mx-auto text-white rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-white mb-1">{feature.title}</h3>
              <div className="opacity-50">
                <hr />
              </div>
              <p className="text-gray-400 mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeatureSection;
