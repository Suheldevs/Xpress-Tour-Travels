import React from 'react';
import companyLogo from "../assets/cclogo.webp";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomFooter = () => {
  // Copyright 2024 Dr. Mamta || All Rights Reserved || Designed By
  return (
    <div className="bg-primary ">
  <div className="flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg text-white w-full gap-1 px-4">
    <div className="flex flex-wrap items-center justify-center gap-1 text-center">
      <p className="text-white">Copyright</p>
      <FaRegCopyright className="text-[1rem]" />
      <p className="text-white">{new Date().getFullYear()} Express Tour & Travels</p>
      <span className="hidden sm:inline-block">||</span>
      <p className="text-white">All Rights Reserved</p>
      <span className="hidden sm:inline-block">||</span>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-1 text-center">
      <span className="text-white">Designed by</span>
      <Link
        to="https://www.codecrafter.co.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <img
          src={companyLogo}
          alt="Designed by Company"
          className="h-auto w-[6rem] md:w-[8rem] lg:w-[10rem] inline-block"
        />
      </Link>
    </div>
  </div>
</div>

  );
}

export default BottomFooter;