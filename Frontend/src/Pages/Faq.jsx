import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData1 = [
  {
    question: "What is the cancellation policy?",
    answer:
      "Our cancellation policy allows free cancellations up to 48 hours before the tour. After that, a fee may apply.",
  },
  {
    question: "Do you offer custom tour packages?",
    answer:
      "Yes, we provide tailor-made packages to suit your preferences and budget. Contact us to create your dream itinerary.",
  },
  {
    question: "Are your tour guides experienced?",
    answer:
      "Absolutely! Our guides are certified, knowledgeable, and have years of experience in the travel industry.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, net banking, and digital wallets. For international travelers, PayPal is also an option.",
  },
  {
    question: "Do you provide airport pickup and drop services?",
    answer:
      "Yes, airport pickup and drop services are included in most of our packages. Please check the package details for confirmation.",
  },
];

const faqData2 = [
  {
    question: "Can I book group tours?",
    answer:
      "Yes, group tours are available. Discounts are offered for larger groups. Please contact us for details.",
  },
  {
    question: "What is the refund policy for cancelled tours?",
    answer:
      "Refunds depend on the time of cancellation. Full refunds are provided if canceled 48 hours before the tour date.",
  },
  {
    question: "Are meals included in the tour packages?",
    answer:
      "Some packages include meals, while others don't. The inclusions are detailed in the package information.",
  },
  {
    question: "What safety measures do you follow during the tours?",
    answer:
      "We prioritize safety with trained staff, first-aid kits, and compliance with local safety regulations.",
  },
  {
    question: "Do you have tours for solo travelers?",
    answer:
      "Yes, we offer tours specifically designed for solo travelers. You can explore destinations comfortably with our expert guides.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-secondary mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          Find answers to the most common questions about Xpress Tour & Travels.
        </p>

        {/* Section 1: Image Left, Questions Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <img
              src="car1.png"
              alt="FAQ Illustration 1"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            {faqData1.map((faq, index) => (
              <div
                key={index}
                className="border-b border-slate-600 pb-4 mb-4 last:border-none"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-lg font-medium text-white">
                    {faq.question}
                  </p>
                  <div>
                    {openIndex === index ? (
                      <FaChevronUp className="text-white text-xl" />
                    ) : (
                      <FaChevronDown className="text-white text-xl" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Questions Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-800 p-6 rounded-lg">
            {faqData2.map((faq, index) => (
              <div
                key={index}
                className="border-b border-slate-600 pb-4 mb-4 last:border-none"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index + faqData1.length)}
                >
                  <p className="text-lg font-medium text-white">
                    {faq.question}
                  </p>
                  <div>
                    {openIndex === index + faqData1.length ? (
                      <FaChevronUp className="text-white text-xl" />
                    ) : (
                      <FaChevronDown className="text-white text-xl" />
                    )}
                  </div>
                </div>
                {openIndex === index + faqData1.length && (
                  <p className="mt-4 text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div>
            <img
              src="car3.png"
              alt="FAQ Illustration 2"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
