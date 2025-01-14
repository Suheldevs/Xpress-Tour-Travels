import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaGasPump } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

// Sample car data
const carData = [
  {
    id: 1,
    name: "CRETA (2024)",
    price: "10/- per km",
    image: "car1.png",
    description: "Best Experience Guaranteed",
    seats: 4,
    engine: "Petrol",
  },
  {
    id: 2,
    name: "THAR (2024)",
    price: "20/- per km",
    image: "car2.png",
    description: "Premium Comfort Assured",
    seats: 4,
    engine: "Petrol",
  },
  {
    id: 3,
    name: "SCORPIO N (2024)",
    price: "11/- per km",
    image: "car3.png",
    description: "Rugged Drive Experience",
    seats: 8,
    engine: "Petrol",
  },
  {
    id: 4,
    name: "FORTUNER (2024)",
    price: "14/- per km",
    image: "car4.webp",
    description: "Luxury Drive Experience",
    seats: 6,
    engine: "Petrol",
  },
];

const BookCar = () => {
  return (
    <div className="bg-slate-800 lg:py-12 md:py-10 py-8">
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-4">
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
            <h1 className="text-gray-100">Experience the Best Cars</h1>
          </div>
          <p className=" text-gray-200">
            Please choose your preferred car from below
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium">
              Pick From Lucknow
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="px-4 max-w-6xl mx-auto"
        >
          {carData.map((car) => (
            <SwiperSlide key={car.id}>
              <div
                data-aos="flip-left"
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-slate-200 rounded-xl">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {car.name}
                  </h3>
                  <div className="items-center text-gray-700">
                    <span>{car.description}</span>
                    <div className="mt-2">
                      <span>Start Price Per KM: </span>
                      <span className="font-semibold">{car.price}</span>
                      <div className="flex w-full justify-start gap-6  rounded font-bold py-1 px-1">
                        <div className="flex justify-center items-center gap-2 text-lg">
                          <TbAirConditioning className="text-2xl" />
                          <span>AC</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 text-lg">
                          <FaGasPump className="text-2xl" />
                          <span>{car.engine}</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 text-lg">
                          <MdAirlineSeatReclineNormal className="text-2xl" />
                          <span>{car.seats}</span>
                        </div>
                      </div>
                      <Link to='/contact' className="border-4 inline-block p-1 mt-4 w-full border-gray-800 rounded-full hover:scale-105 transition-all duration-100">
                        <button className="bg-gray-800 text-white text-xl hover:bg-secondary font-semibold w-full py-2 rounded-full shadow-md">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev bg-slate-800 absolute top-1/2 left-1 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer">
            <FaChevronLeft size={12} />
          </div>
          <div className="swiper-button-next bg-slate-800 absolute top-1/2 right-1 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer">
            <FaChevronRight size={12} />
          </div>
        </Swiper>
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
};

export default BookCar;
