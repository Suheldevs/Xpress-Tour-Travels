import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    services: [],
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
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        services: checked
          ? [...formData.services, value]
          : formData.services.filter((service) => service !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="">
      {/* Header */}
      <h1 className="breadcrumb relative py-10  font-bold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">Contact Us</div>
        <div className="relative z-10 text-lg mt-2">
          <span className="hover:text-secondary hover:cursor-pointer">
            Home
          </span>{" "}
          / Contact Us
        </div>
      </h1>

      {/* Office Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12  px-8 container max-w-7xl">
        <div className="bg-white border text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Head Office</h2>
          <p className="mb-2">
            45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh
            226016
          </p>
          <p className="mb-1">
            Email: <span className="font-semibold">xpresstt@yahoo.com</span>
          </p>
        </div>
        <div className="bg-white shadow-lg text-black border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Call Us</h2>
          <p className="mb-1">
            <FaPhone className="inline-block mr-2" /> +91-8604778866
          </p>
          <p className="mb-1">
            {" "}
            <GiRotaryPhone className="inline-block mr-2" /> 0522-4077786
          </p>
        </div>
      </div>
<div className="container px-8 max-w-7xl flex gap-4 mb-8 md:flex-row flex-col">
      {/* Enquiry Form */}
      <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Enquiry Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <label
                className="block text-sm font-medium  text-gray-700 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                required
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                required
              />
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services Interested In
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesList.map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={service} className="text-gray-800">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary/80 text-white py-3 px-12 text-lg font-semibold rounded-full shadow-lg hover:bg-secondary-dark transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1 ">
        {/* Google Map */}
        <iframe
          className=" w-full h-full rounded-md shadow-lg"
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
