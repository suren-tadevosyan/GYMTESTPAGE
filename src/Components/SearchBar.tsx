"use client";

import React, { useState } from "react";
import SearchModal from "@/Components/SearchModal";

const SearchBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full flex justify-center items-center  ">
      <button
        className="px-6 py-3 bg-[#B02B29] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all"
        onClick={() => setIsModalOpen(true)}
      >
       Search for Cocktails
      </button>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default SearchBar;
