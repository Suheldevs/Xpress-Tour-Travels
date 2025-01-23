// StatsComponent.jsx
import React from "react";
import { FaCog, FaProjectDiagram, FaUsers, FaSmile, FaCar } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";

const stats = [
    { id: 4, icon: <img src='statics/experience-4.svg'className="h-full w-full"/>, title: "Happy Clients", value: "100000+" },
  { id: 1, icon: <img src='statics/experience-1.svg'className="h-full w-full"/>, title: "Years Of Experience", value: "27+" },
  { id: 2, icon: <img src='statics/driver.png'className="h-full w-full"/>, title: "Professional Drivers", value: "100%" },
  { id: 3, icon: <AiOutlineSafety className="h-full w-full"/>, title: "Safety", value: "100%" },
];

const StatsComponent = () => {
  return (
    <div className="relative  text-gray-200 md:py-12 py-8 " data-aos='fade-up' style={{
        backgroundImage: "url('bmw-banner.webp')", 
        backgroundPosition:'center'
      }}>
        <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
      <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-10 px-2">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center space-y-1"
          >
            
            <div className="h-16 w-16 ">{stat.icon}</div>
            <div className="bg-white h-[1px] w-24"></div>
            <h5 className="text-base font-medium">{stat.title}</h5>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
