import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

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
    <div className=" min-h-screen ">
      {/* Header */}
      <h1 className="breadcrumb relative py-10 font-bold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">Contact Us</div>
        <div className="relative z-10 text-lg mt-2">
          <span className="hover:text-gray-300 cursor-pointer">Home</span> / Contact Us
        </div>
      </h1>

      {/* Form and Office Details Section */}
      <div className="container px-8 max-w-7xl  gap-6 mb-12">
        {/* Left Section: Form and Office Details */}
        <div className="flex md:mx-10 md:flex-row flex-col md:gap-0 gap-4">
          {/* Office Details */}
          <div className="bg-white border flex-1 text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
            <p className="mb-2 flex justify-start items-start gap-2">
              <FaLocationDot className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8"/>
              <div className="">
              <div className=" font-semibold text-secondary md:mt-[-7px]">Address</div> 45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh 226016</div>
            </p>
            <p className="mb-2 flex justify-start items-start gap-2 mt-4">
              <MdEmail className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8"/>
              <div className="">
              <div className=" font-semibold text-secondary md:mt-[-7px]">Mail For Information</div>xpresstt@yahoo.com </div>
            </p>
            <p className="mb-2 flex justify-start items-start gap-2 mt-4">
              <FaPhone className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8"/>
              <div className="">
              <div className=" font-semibold text-secondary md:mt-[-7px]">Call for Help</div>+91-8604778866 </div>
            </p>
            <p className="mb-2 flex justify-start items-start gap-2 mt-4">
              <GiRotaryPhone className="inline-block mr-2 p-1 bg-secondary text-white text-5xl rounded w-8 h-8"/>
              <div className="">
              <div className=" font-semibold text-secondary md:mt-[-7px]">Land Line help</div>0522-4077786, 4066686, 2312786 </div>
            </p>
            
          </div>

          {/* Enquiry Form */}
          <div className=" p-8 flex-2 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Enquiry Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>

                <div>
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
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
                    required
                  />
                </div>

                <div>
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
                    className="w-full p-3 border-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-secondary"
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
            className="w-full md:h-96 h-52  rounded-md"
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
