import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    message: "",
  });

  const servicesList = [
    "Tour Package",
    "Car Rental",
    "Flight Booking",
    "Rail Ticketing",
    "Passport & Visa",
    "Other Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <h1 className="breadcrumb relative py-10 font-bold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">Contact Us</div>
        <div className="relative z-10 text-lg mt-2">
          <span className="hover:text-gray-300 cursor-pointer">Home</span> /
          Contact Us
        </div>
      </h1>

      {/* Form and Office Details Section */}
      <div className="container px-8  max-w-7xl gap-6 mb-12">
        <div className="flex md:mx-10 md:flex-row flex-col md:gap-0 gap-4">
          {/* Office Details */}
          <div className="border flex-2 bg-white md:bg-transparent text-gray-800 p-6 rounded-lg shadow-2xl z-10 ">
            <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
            <p className="mb-2 flex justify-start items-start gap-2">
              <FaLocationDot className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8" />
              <div>
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Address
                </div>
                45A, Dayal Enclave, Sector 9, Indira Nagar, <br /> Lucknow, Uttar Pradesh 226016
              </div>
            </p>
            <p className="mb-2 flex justify-start items-start gap-2 mt-4">
              <MdEmail className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8" />
              <div>
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Mail For Information
                </div>
                xpresstt@yahoo.com
              </div>
            </p>
            <p className="mb-2 flex justify-start items-start gap-2 mt-4">
              <FaPhone className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rotate-90 rounded w-8 h-8" />
              <div>
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Call for Help
                </div>
                +91-8604778866
              </div>
            </p>
            <p className="mb-2 flex justify-start items-start gap-2 mt-4">
              <GiRotaryPhone className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8" />
              <div>
                <div className="text-lg font-semibold text-secondary md:mt-[-7px]">
                  Land Line help
                </div>
                0522-4077786, 4066686, 2312786
              </div>
            </p>
            <p className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 p-2 rounded-full text-white transition-transform transform hover:scale-110"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-t to-red-500 from-pink-600 p-2 rounded-full text-white transition-transform transform hover:scale-110"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="tel:+91-9935115786"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 text-white rounded-full transition-transform transform hover:scale-110"
              >
                <FaPhone className="rotate-90" size={23} />
              </a>
            </p>
          </div>
          <div class="absolute z-[-10] w-[500px] h-[500px] bg-secondary rounded-full transform translate-x-[40%] translate-y-[40%] md:opacity-50 opacity-100"></div>
          <div class="absolute top-0 right-0 z-[-10] w-[500px] h-[500px] md:bg-secondary bg-primary rounded-full transform translate-x-[0%] translate-y-[0%] md:opacity-50 opacity-100"></div>

          {/* Enquiry Form */}
          <div className="p-8 flex-1 bg-primary   border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Enquiry Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold text-gray-100 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-100 mb-2" htmlFor="number">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    placeholder="Enter your phone number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-100 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-100 mb-2" htmlFor="service">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    placeholder="Select a service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    required
                  >
                    <option value="" disabled>Select a Service</option>
                    {servicesList.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="block text-lg font-semibold text-gray-100 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    placeholder="Enter your message here..."
                    required
                  ></textarea>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-secondary text-white py-3 px-12 text-lg font-semibold rounded-full shadow-lg transition hover:bg-secondary/80"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Google Map */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <iframe
            className="w-full md:h-96 h-52 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.827146649382!2d80.99930401504472!3d26.886608583140214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd45bf6d4b9f%3A0xb85f5db3bb7075dc!2s45A%2C%20Dayal%20Enclave%2C%20Sector%209%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!5e0!3m2!1sen!2sin!4v1673521834185!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
