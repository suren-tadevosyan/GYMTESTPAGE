import About from "@/Components/AboutGYM";
import Carousel from "@/Utils/Carousel";
import React from "react";

const MainSection = function () {
  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel />
      <About />
    </div>
  );
};

export default MainSection;
