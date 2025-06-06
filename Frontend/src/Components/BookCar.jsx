import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { FaGasPump } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import "swiper/css"; // Default Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import { Link } from "react-router-dom";

//car images
import ToyotaC from '../assets/cars/ToyotaC.webp'
import Toyota from '../assets/cars/Toyota.webp'
import ToyotaRumion from '../assets/cars/ToyotaRumion.webp'
import MarutiSuzukiDzire from '../assets/cars/MarutiSuzukiDzire.webp'
import glance from '../assets/cars/glance.webp'
import Honda from '../assets/cars/Honda.webp'
import TataTigore from '../assets/cars/TataTigore.webp'
import ToyotaFor from '../assets/cars/ToyotaFor.webp'
import Tempo from '../assets/cars/tempo.webp'
import bus from '../assets/cars/bus.webp'
import bmw from '../assets/cars/bmw.webp'
import Mercedes from '../assets/cars/Mercedes.webp'
import audi from '../assets/cars/audi.webp'
// Sample car data
const carData = [
  {
    id: 10,
    name: "Toyota Crysta",
    price: "16/- per km",
    image:`${ToyotaC}`,
    description: "Luxury and Performance",
    seats: "7/8",
    engine: "Diesel",
  },
  {
    id: 9,
    name: "Toyota Innova",
    price: "15/- per km",
    image:`${Toyota}`,
    description: "Trusted for Long Drives",
    seats: "7/8",
    engine: "Diesel",
  },
  {
    id: 8,
    name: "Toyota Rumion",
    price: "14/- per km",
    image:`${ToyotaRumion}`,
    description: "Spacious Family Car",
    seats: "7/8",
    engine: "Petrol",
  },
  {
    id: 4,
    name: "Maruti Suzuki Dzire",
    price: "10/- per km",
    image:`${MarutiSuzukiDzire}`,
    description: "Affordable and Reliable",
    seats: "5",
    engine: "Petrol",
  },
  {
    id: 5,
    name: "Toyota Glanza",
    price: "10/- per km",
    image:`${glance}`,
    description: "Compact and Comfortable",
    seats: "5",
    engine: "Petrol",
  },
  {
    id: 6,
    name: "Honda Amaze",
    price: "10/- per km",
    image:`${Honda}`,
    description: "Smooth and Stylish",
    seats: "5",
    engine: "Petrol",
  },
  {
    id: 7,
    name: "Tata Tigor",
    price: "10/- per km",
    image:`${TataTigore}`,
    description: "Value for Money",
    seats: "5",
    engine: "Petrol",
  },
  {
    id: 11,
    name: "Toyota Fortuner",
    price: "50/- per km",
    image:`${ToyotaFor}`,
    description: "Luxury SUV for Adventures",
    seats: "7/8",
    engine: "Diesel",
  },
  {
    id: 12,
    name: "Tempo Traveller",
    price: "25-35/- per km",
    image:`${Tempo}`,
    description: "Perfect for Group Travel",
    seats: "12/18/25",
    engine: "Diesel",
  },
  {
    id: 13,
    name: "Bus (AC / Non AC / Luxury)",
    price: "AS PER REQ.",
    image:`${bus}`,
    description: "Large Capacity for Long Journeys",
    seats: "40/50/60",
    engine: "Diesel",
  },
  {
    id: 1,
    name: "BMW",
    price: "90/- per km",
    image:`${bmw}`,
    description: "Luxury and Comfort Redefined",
    seats: "5/7",
    engine: "Petrol",
  },
  {
    id: 2,
    name: "Mercedes",
    price: "80/- per km",
    image:`${Mercedes}`,
    description: "Premium Driving Experience",
    seats: "5/7",
    engine: "Petrol",
  },
  {
    id: 3,
    name: "Audi",
    price: "85/- per km",
    image:`${audi}`,
    description: "Performance and Elegance",
    seats: "4 + 1",
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
            <h1 className="text-gray-100 text-xl md:text-4xl">
              Experience the Best Cars
            </h1>
          </div>
          <p className=" text-gray-200 md:text-base text-sm md:px-0 px-10">
            Please choose your preferred car from below
          </p>
          <div className="md:mt-4 mt-2 text-sm flex justify-center space-x-4">
            <a
              href="https://maps.app.goo.gl/5Xw2nRefpgtcrLiGA"
              className="px-4 py-2 cursor-pointer rounded-full bg-white text-primary font-medium"
            >
              Pick From Lucknow
            </a>
          </div>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={false}
          pagination={{
            clickable: true, // Enable clickable dots
          }}
          loop={false} // Ensure no looping happens
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="px-4 max-w-6xl mx-auto h-[30rem] relative"
        >
          {carData.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="bg-gray-50 shadow-xl rounded-lg overflow-hidden  border border-green-500">
                <img
                  src={car.image}
                  alt={car.name}
                  loading="lazy"
                  className="w-full h-[15rem] hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden object-cover"
                />
                <div className="p-4 bg-slate-200 rounded-xl">
                  <div className="text-xl font-semibold text-primary">{car.name}</div>
                  <div className="items-center text-primary/90">
                    <span>{car.description}</span>
                    <div>
                      <span>Start Price Per KM: </span>
                      <span className="font-semibold">{car.price}</span>
                      <div className="flex w-full justify-start gap-6 rounded font-bold pt-2 pb-1 px-1">
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
                      <Link
                        to="/contact"
                        className="border- inline-block p-1 mt-2 w-full border-primary rounded-full hover:scale-105 transition-all duration-100"
                      >
                        <button aria-label="Book Now" title="Book Now" className="bg-primary text-white text-xl hover:bg-secondary font-semibold w-full py-2 rounded-full shadow-md">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};



export default BookCar;
