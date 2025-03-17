"use client";

import React, { useEffect, useRef } from "react";

interface ISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<ISearchModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div
        ref={modalRef}
        className="bg-[#d7fb00] w-full flex flex-col items-center max-w-2xl px-6 py-8 rounded-lg shadow-lg relative"
      >

        <button
          className="absolute top-0 right-2 text-2xl text-black hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-lg text-black font-bold mb-4 mt-2 text-center">
          Find the Best Workout Plan for You!
        </h2>


        <input
          type="text"
          placeholder="Search for workouts, trainers, or gym tips..."
          className="px-8 py-4 bg-[#242424] rounded-[40px] focus:outline-none focus:ring-2 focus:ring-black placeholder-white w-full"
        />

 
        <h2 className="text-md text-black font-bold mt-4 text-center">
          Explore personalized workout plans, fitness guides, and expert tips to reach your goals.
        </h2>
      </div>
    </div>
  );
};

export default SearchModal;
