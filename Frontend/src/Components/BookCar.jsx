import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons
import "swiper/css";
import "swiper/css/navigation";

// Sample car data
const carData = [
  {
    id: 1,
    name: "CRETA (2024)",
    price: "₹2,800 per day",
    image: "car1.png",
    description: "Best Experience Guaranteed",
  },
  {
    id: 2,
    name: "THAR (2024)",
    price: "₹4,500 per day",
    image: "car2.png", 
    description: "Premium Comfort Assured",
  },
  {
    id: 3,
    name: "SCORPIO N (2024)",
    price: "₹5,500 per day",
    image: "car3.png", // Replace with actual image URLs
    description: "Rugged Drive Experience",
  },
  {
    id: 4,
    name: "FORTUNER (2024)",
    price: "₹6,000 per day",
    image: "car4.webp", // Replace with actual image URLs
    description: "Luxury Drive Experience",
  },
];

const BookCar = () => {
  return (
    <div className="bg-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-6 text-center">
          <div className="flex justify-center items-center space-x-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <svg
                className="h-6 w-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M9 21h6M9 3h6"
                />
              </svg>
            </div>
            <h2 className="text-gray-100">Experience the Best Cars</h2>
          </div>
          <p className="mt-2 text-gray-600">
            Please choose your preferred car from below
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium">
              Pick From Lucknow
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          spaceBetween={30}
          slidesPerView = {1}
          modules={[Navigation , Pagination , Scrollbar]} // Add this
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          centeredSlides={true}
          pagination={{clickable:true}}
          breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
             
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
          }}
          className="relative mySwiper"
        >
          {carData.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-slate-200 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {car.name}
                  </h3>
                  <div className="mt-2  items-center text-gray-700">
                    <span>{car.description}</span>
                    <div className="">
                        <span>Start Price Per KM: </span><span>₹11/-</span>
                        <div className=" flex w-full justify-around">
                            <span>AC</span>
                            <span>Petrol</span>
                            <span>4</span>
                        </div>
                        <div className="bg-gray-800 text-white p-2 rounded-xl">
                            BOOK NOW
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className=" swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10  text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer">
            <FaChevronLeft size={12} />
          </div>
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10  text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer">
            <FaChevronRight size={12} />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BookCar;
