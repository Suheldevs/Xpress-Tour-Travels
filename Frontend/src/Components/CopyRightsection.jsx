import React from 'react';
import companyLogo from "../assets/cclogo.webp";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomFooter = () => {
  // Copyright 2024 Dr. Mamta || All Rights Reserved || Designed By
  return (
    <div className="bg-primary py-0">
      <div className="flex flex-col md:flex-row items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg text-white w-full gap-1">
        <div className='flex items-center justify-center gap-1'>
          <p className='text-white'>Copyright</p>
          <FaRegCopyright className='text-[1rem]' />
          <p className='text-white'>{new Date().getFullYear()} Express tour & Travels</p>
          <span>||</span>
          <p className='text-white'>All Rights Reserved</p>
          <span>||</span>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <span className="text-white">Designed by</span>  
          <Link to="https://www.codecrafter.co.in/" target="_blank" rel="noopener noreferrer" className="ml-2">
            <img src={companyLogo} alt="Designed by Company" className="h-auto w-[6rem] md:w-[8rem] lg:w-[10rem] inline-block" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;