import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Car Rental",
    image: "car-rental.webp", // Use the uploaded image for Car Rental service
    content: `We provide a wide range of vehicles to suit every need and budget. From compact city cars like Tata Indica to luxury vehicles such as Toyota Innova, Honda Civic, Skoda, and Fortuner, our fleet is well-maintained and ready for your journey. All vehicles come with professional drivers who are trained to ensure comfort, safety, and an enjoyable experience. We also offer additional services such as GPS navigation, air conditioning, and child safety seats for family travel. Whether you are on a business trip, family vacation, or special occasion, we have the perfect vehicle for you.`,
  },
  {
    title: "Tour Packages",
    image: "tour-package-services.jpg", // Use the uploaded image for Tour Packages service
    content: `Our Tour Packages are designed to make your vacations extraordinary. We offer a variety of international and domestic holiday packages, including leisure holidays, honeymoon trips, family holidays, group holidays, and more. Our destinations span across the globe—Bangkok, Thailand, Dubai, Maldives, Sri Lanka, Europe, the US, and beyond. Every package includes comfortable accommodations, guided tours to major attractions, transportation, and personalized itineraries. Our goal is to help you relax, explore, and experience new cultures while handling all the details of your trip, from start to finish.`,
  },
  {
    title: "Air Ticketing",
    image: "Air-Ticketing-services.jpg", // Use the uploaded image for Air Ticketing service
    content: `We provide air ticket booking services for both domestic and international flights. Whether you're flying for business, leisure, or an emergency, we ensure you get the best prices with our special rates. Our team works with all major airlines, allowing you to book your flights with ease and convenience. Additionally, we offer services like seat selection, web check-in, and booking management. If you're traveling during peak seasons, our team can assist with securing tickets for hard-to-get flights, ensuring a smooth and hassle-free booking experience. Our commitment is to provide timely, affordable, and reliable travel solutions.`,
  },
  {
    title: "Train Ticketing",
    image: "Train-Ticketing-services.jpg", // Use the uploaded image for Train Ticketing service
    content: `Our train ticketing service simplifies the booking process through the Indian Railways platform, IRCTC. With over 15 years of experience in handling bookings during peak travel seasons, we ensure a seamless process. We assist with both advance and emergency bookings, and we specialize in securing tickets for holidays and festival rushes when availability is low. Whether you're planning a long-distance journey or a short weekend getaway, we ensure you get the best seat, every time. We also provide assistance with ticket-related queries and offer comprehensive support to make your train travel comfortable.`,
  },
  {
    title: "Passport & Visa Services",
    image: "Passport-Visa-services.jpg", // Use the uploaded image for Passport & Visa Services
    content: `Our expert passport and visa services ensure that you have all the necessary documents to travel internationally. From handling passport renewals, corrections, and new applications to assisting with visa applications for various countries, we make the process quick and easy. We specialize in tourist, business, and student visas and offer personalized consultation for your specific needs. Our team handles all the paperwork, appointments, and submission, ensuring that your visa application is processed smoothly and efficiently. We also provide guidance on the latest visa requirements, helping you stay up-to-date with changing immigration laws.`,
  },
  {
    title: "Helicopter & Charter Services",
    image: "Helicopter-Services.jpg", // Use the uploaded image for Helicopter & Charter Services
    content: `We offer premium helicopter and charter services for both domestic and international travel. Whether you need a private helicopter for sightseeing, an emergency air ambulance service, or a chartered plane for business trips, we have the solutions to fit your needs. Our fleet of helicopters and private jets is maintained to the highest standards, offering you comfort, luxury, and safety. These services are ideal for time-sensitive travel, VIP clients, or anyone seeking a more exclusive and private travel experience. We also handle logistics for event transportation, weddings, and group travel, ensuring that every detail is taken care of.`,
  },
];

const Services = () => {
  return (
    <div className="">
     <h1 className="breadcrumb relative py-10  font-bold text-center mb-12 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">Our Services</div>
        <div className="relative z-10 text-lg mt-2">
          <Link to='/' className="hover:text-secondary hover:cursor-pointer">
            Home
          </Link>{" "}
          / Our Services
        </div>
      </h1>
    <div className="space-y-6 px-8 mb-8">
        {services.map((service, index) => (
          <div
          data-aos='fade-up'
            key={index}
            className={`flex flex-col items-center p-6 border rounded-lg shadow-lg hover:shadow-md transition-shadow duration-200  ${index % 2 != 0 ? 'md:flex-row-reverse bg-gray-800 text-white' : 'md:flex-row text-black'}`}
          >
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Side (Content) */}
            <div className="w-full md:w-1/2 pl-6 ">
              <h2 className="text-4xl font-semibold mb-4">{service.title}</h2>
              <p className=" leading-relaxed">{service.content}</p>
              <div className={`border-4 p-1 text-center hover:scale-105 inline-block mt-4 ${index % 2 != 0 ? 'border-gray-100':'border-gray-800'} rounded-full`}>
            <button className="bg-secondary  lg:text-xl text-lg font-semibold px-8 py-2 hover:px-11 rounded-full shadow-md transition">
              Enquire Now
            </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
