"use client";

import { FiSearch, FiMessageSquare, FiMenu } from "react-icons/fi";
import { NAV_MENU } from "@/Constants/MenuItem";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void; 
}

export default function Navbar({ menuOpen, setMenuOpen, setIsSearchOpen }: NavbarProps) {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">

        <h1 className="text-white text-2xl font-bold">GYMTEAM</h1>


        <ul className="hidden md:flex space-x-6 text-white text-lg">
          {NAV_MENU.map((item) => (
            <li key={item.href} className="cursor-pointer hover:text-[#d7fb00]">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

  
        <div className="flex items-center space-x-4 text-white relative">

          <FiSearch
            className="w-6 h-6 cursor-pointer hover:text-[#d7fb00]"
            onClick={() => setIsSearchOpen(true)} 
          />

          
          <div className="relative">
            <FiMessageSquare className="w-6 h-6 cursor-pointer hover:text-[#d7fb00]" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </div>

          
          <FiMenu
            className="w-6 h-6 cursor-pointer hover:text-[#d7fb00]"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>


        {menuOpen && (
          <div className="absolute top-14 right-6 bg-black bg-opacity-80 text-white p-4 rounded-md md:hidden z-50">
            <ul className="flex flex-col space-y-3">
              {NAV_MENU.map((item) => (
                <li key={item.href} className="cursor-pointer hover:text-[#d7fb00]">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
