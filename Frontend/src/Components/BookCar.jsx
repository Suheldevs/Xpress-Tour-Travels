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
    id: 10,
    name: "Toyota Crysta",
    price: "16/- per km",
    image: "cars/ToyotaC.png",
    description: "Luxury and Performance",
    seats: 7,
    engine: "Diesel",
  },
  {
    id: 4,
    name: "Maruti Suzuki Dzire",
    price: "10/- per km",
    image: "cars/MarutiSuzukiDzire.png",
    description: "Affordable and Reliable",
    seats: 4,
    engine: "Petrol",
  },
  {
    id: 8,
    name: "Toyota Rumion",
    price: "14/- per km",
    image: "cars/ToyotaRumion.png",
    description: "Spacious Family Car",
    seats: 6,
    engine: "Petrol",
  },
  {
    id: 9,
    name: "Toyota Innova",
    price: "15/- per km",
    image: "cars/Toyota.png",
    description: "Trusted for Long Drives",
    seats: 7,
    engine: "Diesel",
  },
  {
    id: 5,
    name: "Toyota Glanza",
    price: "10/- per km",
    image: "cars/glance.png",
    description: "Compact and Comfortable",
    seats: 4,
    engine: "Petrol",
  },
  {
    id: 6,
    name: "Honda Amaze",
    price: "10/- per km",
    image: "cars/Honda.png",
    description: "Smooth and Stylish",
    seats: 4,
    engine: "Petrol",
  },
  {
    id: 7,
    name: "Tata Tigor",
    price: "10/- per km",
    image: "cars/TataTigore.png",
    description: "Value for Money",
    seats: 4,
    engine: "Petrol",
  },
 
  {
    id: 11,
    name: "Toyota Fortuner",
    price: "50/- per km",
    image: "cars/ToyotaFor.png",
    description: "Luxury SUV for Adventures",
    seats: 6,
    engine: "Diesel",
  },
  {
    id: 12,
    name: "Tempo Traveller (12/18/25 Seater)",
    price: "25-35/- per km",
    image: "cars/tempo.png",
    description: "Perfect for Group Travel",
    seats: 12,
    engine: "Diesel",
  },
  {
    id: 13,
    name: "Bus (AC / Non AC / Luxury)",
    price: "AS PER REQ.",
    image: "cars/bus.png",
    description: "Large Capacity for Long Journeys",
    seats: 50,
    engine: "Diesel",
  },
  {
    id: 1,
    name: "BMW",
    price: "90/- per km",
    image: "cars/bmw.png",
    description: "Luxury and Comfort Redefined",
    seats: 4,
    engine: "Petrol",
  },
  {
    id: 2,
    name: "Mercedes",
    price: "80/- per km",
    image: "cars/Mercedes.png",
    description: "Premium Driving Experience",
    seats: 4,
    engine: "Petrol",
  },
  
  {
    id: 3,
    name: "Audi",
    price: "85/- per km",
    image: "cars/audi.png",
    description: "Performance and Elegance",
    seats: 4,
    engine: "Petrol",
  },

];


const BookCar = () => {
  return (
    <div className="bg-primary lg:py-12 md:py-10 py-8">
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
            <h1 className="text-gray-100 text-xl md:text-4xl">Experience the Best Cars</h1>
          </div>
          <p className=" text-gray-200 md:text-base text-sm md:px-0 px-10">
            Please choose your preferred car from below
          </p>
          <div className="md:mt-4 mt-2 text-sm flex justify-center space-x-4">
            <a href="https://maps.app.goo.gl/5Xw2nRefpgtcrLiGA" className="px-4 py-2 cursor-pointer rounded-full bg-white text-primary font-medium">
              Pick From Lucknow
            </a>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar]}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          navigation={false}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          loop={true}
          centeredSlides={false}
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
                data-aos="flip-right"
                className="bg-gray-50 shadow-xl rounded-lg overflow-hidden cursor-grab "
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden object-cover"
                />
                <div className="p-4 bg-slate-200 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary">
                    {car.name}
                  </h3>
                  <div className="items-center text-primary/90">
                    <span>{car.description}</span>
                    <div className="">
                      <span>Start Price Per KM: </span>
                      <span className="font-semibold">{car.price}</span>
                      <div className="flex w-full justify-start gap-6  rounded font-bold pt-2 pb-1 px-1">
                        <div className="flex justify-center items-center gap-2  text-lg">
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
                      <Link to='/contact' className="border- inline-block p-1 mt-2 w-full border-primary rounded-full hover:scale-105 transition-all duration-100">
                        <button className="bg-primary text-white text-xl hover:bg-secondary font-semibold w-full py-2 rounded-full shadow-md">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <div className="swiper-button-prev bg-primary absolute top-1/2 left-1  transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer">
            <FaChevronLeft size={12} />
          </div>
          <div className="swiper-button-next bg-primary absolute top-1/2 right-1 transform -translate-y-1/2 z-10 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition cursor-pointer">
            <FaChevronRight size={12} />
          </div> */}
        </Swiper>
        <div className="custom-pagination flex justify-center md:mt-6 mt-2 mb-2  hover:cursor-pointer"></div>
      </div>
    </div>
  );
};

export default BookCar;
