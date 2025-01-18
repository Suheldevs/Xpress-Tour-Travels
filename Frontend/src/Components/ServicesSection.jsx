// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
// import { FaCar, FaPlane, FaPassport, FaTrain, FaGlobe } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const services = [
//   {
//     id: 1,
//     title: "Car Rental Services",
//     description: "Affordable, reliable cars for every journey.",
//     icon: <FaCar className="text-gray-800 text-5xl" />,
//   },
//   {
//     id: 2,
//     title: "Air Ticketing",
//     description: "Seamless flight bookings for all your destinations.",
//     icon: <FaPlane className="text-gray-800 text-5xl" />,
//   },
//   {
//     id: 3,
//     title: "Passport & Visa Assistance",
//     description: "Fast and hassle-free passport and visa services.",
//     icon: <FaPassport className="text-gray-800 text-5xl" />,
//   },
//   {
//     id: 4,
//     title: "Train Ticketing",
//     description: "Convenient train ticket bookings nationwide.",
//     icon: <FaTrain className="text-gray-800 text-5xl" />,
//   },
//   {
//     id: 5,
//     title: "Tour Packages",
//     description: "Customizable tours for families, couples, and solo travelers.",
//     icon: <FaGlobe className="text-gray-800 text-5xl" />,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <div data-aos="fade-up" className="bg-gray-50 lg:py-12 md:py-10 py-8">
//       {/* Section Header */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
//         <p className="text-gray-600 mt-4">
//           Explore our range of premium services designed to make your journey
//           seamless and memorable.
//         </p>
//       </div>

//       {/* Swiper Component */}
//       <Swiper
//         spaceBetween={20}
//         autoplay={{
//           delay: 500,
//           disableOnInteraction: true,
//         }}
//         slidesPerView={1.2}
//         modules={[Pagination, Scrollbar, Autoplay, Navigation]}
//         pagination={{ clickable: true }}
//         loop={true}
//         navigation={true} 
//         centeredSlides={true}
//         breakpoints={{
//           640: {
//             slidesPerView: 1.2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//         }}
//         className="max-w-6xl mx-auto px-4"
//       >
//         {services.map((service) => (
//           <SwiperSlide key={service.id}>
//             <div className="bg-white border-2 mx-2 border-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//               <div className="flex flex-col items-center text-center p-6">
//                 <div className="mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mt-2">{service.description}</p>
//               </div>
//               <div className="text-white text-center py-3 mx-10 mb-2 bg-slate-800 rounded-full transition">
//                 <button className="text-sm font-medium uppercase">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
      
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Cab Rental Services",
   description: "Reliable cab rental services offering affordable rates, professional drivers, and 24/7 availability for your convenience.",
    price: "Starting @ just Rs 12/Km",
    buttonLabel: "Book Now",
    image: "services/cab.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Tour Packages",
    description: "Exciting tour packages featuring unique destinations, curated experiences, and all-inclusive options for unforgettable adventures.",
    price: "Starting @ just Rs 499/-",
    buttonLabel: "Book Now",
    image: "services/tour.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Air Ticketing",
    description: "Convenient Air Ticketing Services offering competitive fares, easy booking, and real-time flight updates for travelers.",
    price: "Starting @ just Rs 1199/-",
    buttonLabel: "Book Now",
    image: "services/air.jpg", // Replace with actual image path
  },
  {
    id: 4,
    title: "Train Ticketing Services",
    description: "Efficient Train Ticketing services providing easy bookings, real-time updates, and competitive pricing for hassle-free travel.",
    price: "Starting @ just Rs 199/-",
    buttonLabel: "Book Now",
    image: "services/Train-Ticketing-services.jpg", // Replace with actual image path
  },
  {
    id: 5,
    title: "Passport & Visa Services",
    description: "Comprehensive Passport and Visa Services ensuring fast processing, expert guidance, and hassle-free travel documentation solutions.",
    price: "Starting @ just Rs 19999/-",
    buttonLabel: "Book Now",
    image: "services/Passport-Visa-services.jpg", // Replace with actual image path
  },
  {
    id: 6,
    title: "Bus Booking Services",
    description: "Affordable Bus Booking Services with easy online reservations, real-time tracking, and comfortable travel options available.",
    price: "Starting @ just Rs 20000/-",
    buttonLabel: "Book Now",
    image: "cars/bus.png", // Replace with actual image path
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gray-50 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="md:text-4xl text-3xl font-bold text-gray-800">Our Services</h2>
        {/* <p className="text-gray-600 mt-4">
          Explore our range of premium services designed to make your journey seamless and memorable.
        </p> */}
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto md:px-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service,index) => (
    <div
      key={service.id}
      className={` bg-gray-50 max-h-[350px] border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}
    >
      <div className="h-40">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full  object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className=" text-center mt-4 mb-0">
          <h3 className="text-xl font-semibold text-gray-800">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm px-5">{service.description}</p>
          {/* <p className="text-red-500 font-bold mt-4">{service.price}</p> */}
        </div>
        <div className="p-4  text-center" dat-aos='fade-up'>
          <Link to="/contact">
          <div className="">
            <button className=" btn1 ">
              {service.buttonLabel}
            </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
