import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    category: "General Information",
    faqs: [
      {
        question: "What types of vehicles are available for rent?",
        answer: "We offer a wide variety of vehicles including cars, SUVs, and trucks.",
      },
      {
        question: "Where are your rental locations?",
        answer: "Our rental locations are available in all major cities across the country.",
      },
      {
        question: "What are your hours of operation?",
        answer: "We are open 7 days a week from 8:00 AM to 8:00 PM.",
      },
      {
        question: "Do you provide customer support?",
        answer: "Yes, our customer support is available 24/7 for assistance.",
      },
    ],
  },
  {
    category: "Booking and Reservations",
    faqs: [
      {
        question: "How do I make a reservation?",
        answer: "Reservations can be made online through our website or by calling our customer support.",
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer: "Yes, you can modify or cancel your reservation up to 24 hours before your booking.",
      },
      {
        question: "What happens if I miss my booking time?",
        answer: "If you miss your booking time, you can reschedule based on availability.",
      },
      {
        question: "Do I need an account to book a vehicle?",
        answer: "Yes, you need to create an account to make a reservation.",
      },
    ],
  },
  {
    category: "Pricing and Payment",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards and digital wallets.",
      },
      {
        question: "Are there any hidden charges?",
        answer: "No, all charges are clearly mentioned in the booking summary.",
      },
      {
        question: "Do you offer discounts for long-term rentals?",
        answer: "Yes, we offer discounts for rentals exceeding 7 days.",
      },
      {
        question: "Can I get a refund for cancellations?",
        answer: "Refunds are processed for cancellations made 24 hours prior to booking.",
      },
    ],
  },
  {
    category: "Vehicle Information",
    faqs: [
      {
        question: "Are the vehicles insured?",
        answer: "Yes, all our vehicles are fully insured.",
      },
      {
        question: "Can I choose a specific vehicle model?",
        answer: "You can request a specific model, but it depends on availability.",
      },
      {
        question: "What if the vehicle breaks down?",
        answer: "In case of breakdowns, we provide 24/7 roadside assistance.",
      },
      {
        question: "Do you offer electric vehicles?",
        answer: "Yes, we have a selection of electric vehicles available.",
      },
    ],
  },
];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
     }, []);
  return (
    <div>
      <h1 className="breadcrumb relative pt-32 pb-12 font-bold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">Frequently Asked Questions</div>
        <div className="relative z-10 text-lg mt-2 text-secondary">
          <Link to="/" className="text-white hover:text-secondary hover:cursor-pointer">
            Home /
          </Link>{" "}
           FAQ
        </div>
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-4 space-x-4 mb-8">
        {faqCategories.map((category, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedCategory === idx ? "bg-secondary text-white" : "bg-primary text-white"
            }`}
            onClick={() => setSelectedCategory(idx)}
          >
            {category.category}
          </button>
        ))}
      </div>

<div className="w-full flex px-6 md:px-10 flex-col md:flex-row gap-6 mb-6">
      <div className="flex-1 ">
        <h2 className="text-3xl font-semibold tex-white mb-4">
          {faqCategories[selectedCategory].category}
        </h2>
        {faqCategories[selectedCategory].faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 p-4 rounded-lg mb-2 bg-primary  transition-all duration-700 ease-in-out"
          >
            <div
              className="flex justify-between items-center cursor-pointer transition-all duration-1000"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-md font-medium text-white">{faq.question}</p>
              {openIndex === index ? (
                <FaMinus className="text-secondary text-2xl transition-transform duration-300" />
              ) : (
                <FaPlus className="text-secondary text-2xl transition-transform duration-300" />
              )}
            </div>
            {openIndex === index && <p className="mt-2 text-white border-t pt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <div className="flex-1 rounded md:p-6 p-0 mt-[-10px]">
        <img src="faq.webp" className="rounded"/>
      </div>
      </div>
    </div>
  );
};

export default FAQ;
