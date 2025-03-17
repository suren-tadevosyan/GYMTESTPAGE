"use client";

import { useState } from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Button from "@/Components/Button";
import Navbar from "@/Components/Navbar";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen flex flex-col ">

      <Image
        src="/gym-bg.jpg"
        alt="Gym Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="absolute inset-0 -z-0"
      />


      <div className="absolute inset-0 bg-black bg-opacity-80 -z-1"></div>


      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow px-6">
        <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase max-w-[90%] md:max-w-3xl">
          Work with <br /> Professionals
        </h2>
        <p className="text-gray-300 mt-4 text-xs  md:text-sm lg:text-lg max-w-[50%] lg:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet
          facilisis tristique placerat sit
        </p>
        <div className="mt-6 flex flex-col items-center md:flex-row space-x-4">
          <Button
            label="START NOW"
            className="text-white mt-4 hover:text-black hover:bg-[#D6FE50] rounded-3xl"
          />
          <Button
            label="LEARN MORE"
            className="text-white mt-4 hover:text-black hover:bg-[#D6FE50] rounded-3xl"
            icon={<FiArrowUpRight size={25} />}
          />
        </div>


        <div className="mt-12 md:mr-12 flex space-x-8">
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all">
            <FiChevronLeft size={24} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-all">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
