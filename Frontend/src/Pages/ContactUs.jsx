import React, { useState } from "react";

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
    console.log(formData); // Handle form submission logic here (e.g., send to API)
  };

  return (
    <div className="container mx-auto p-6 mt-10">
      <h1 className="text-4xl text-center font-bold mb-8">Get In Touch</h1>

      {/* Office Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-white">
        <div className="p-6 bg-slate-800 shadow rounded">
          <h2 className="text-2xl font-semibold">Head Office</h2>
          <p className="mt-4 font-semibold">
            45A, Dayal Enclave, Sector 9, Indira Nagar, Lucknow, Uttar Pradesh
            226016
          </p>
          <p>
            Email: <strong>xpresstt@yahoo.com</strong>
          </p>
        </div>
        <div className="p-6 bg-slate-800 shadow rounded font-semibold">
          <h2 className="text-2xl font-semibold">Call Us</h2>
          <p className="mt-4">Phone: +91-8604778866</p>
          <p>0522-4077786</p>
          <p>9935115786</p>
        </div>

        {/* <div className="p-6 bg-white shadow rounded">
                    <h2 className="text-2xl font-semibold">Branch Office</h2>
                    <p className="mt-4">456 Branch Ave, Townsville, Country</p>
                    <p>Phone: +098 765 4321</p>
                    <p>Email: branch.office@xpresstour.com</p>
                </div> */}
      </div>

      {/* Enquiry Form Section */}
      <div className="bg-slate-50 p-6 shadow rounded">
        <h2 className="text-2xl font-semibold mb-4">Enquiry Now</h2>
        <form data-aos='fade-up' onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Services Interested In
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
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
                    <label htmlFor={service}>{service}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center lg:mx-96 mx-16">
            <div className="border-4 p-1 border-gray-800 rounded-full">
              <button className="bg-secondary text-white lg:text-xl text-lg font-semibold px-12 lg:hover:px-36 py-1 transition-all duration-700  lg:py-3 rounded-full shadow-md ease-in-out">
                Book Now
              </button>
            </div>
          </div>
        </form>

        <iframe
        className="mt-4 border"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.827146649382!2d80.99930401504472!3d26.886608583140214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd45bf6d4b9f%3A0xb85f5db3bb7075dc!2s45A%2C%20Dayal%20Enclave%2C%20Sector%209%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!5e0!3m2!1sen!2sin!4v1673521834185!5m2!1sen!2sin"
  width="100%"
  height="400"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

      </div>
    </div>
  );
};

export default ContactUs;
