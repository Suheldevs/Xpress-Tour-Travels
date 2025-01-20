// StatsComponent.jsx
import React from "react";
import { FaCog, FaProjectDiagram, FaUsers, FaSmile, FaCar } from "react-icons/fa";

const stats = [
    { id: 4, icon: <FaSmile className="text-6xl text-secondary" />, title: "Happy Clients", value: "1000+" },
  { id: 1, icon: <FaCog className="text-6xl text-secondary" />, title: "Years Of Experience", value: "16+" },
  { id: 2, icon: <FaCar className="text-6xl text-secondary" />, title: "Sanitized Cars for Your Safety", value: "12+" },
  { id: 3, icon: <FaUsers className="text-6xl text-secondary" />, title: "Team Members", value: "10+" },
];

const StatsComponent = () => {
  return (
    <div className="relative  text-gray-200 md:py-8 py-6"  style={{
        backgroundImage: "url('bmw-banner.webp')", 
      }}>
        <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
      <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:px-10 px-2">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center text-center space-y-2"
          >
            
            <div className="icon p-4 rounded-full">{stat.icon}</div>
            <h3 className="text-base font-semibold">{stat.title}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
