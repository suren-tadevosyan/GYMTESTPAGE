"use client";

import Marquee from "react-fast-marquee";

const RunningLine = () => {
  return (
    <div className="w-full bg-[#D7FB00] py-4">
      <Marquee
        speed={150}
        gradient={false}
        className="text-black font-bold bg-[#D7FB00]"
      >
        <span className="mx-4 text-2xl relative top-[-5px]">★</span>
        <span className="mx-4 text-4xl ">
          DRAWING UP AN INDIVIDUAL TRAINING PROGRAM BEST PROFESSIONAL CONVINENT
          LOCATION & SCHEDULE
        </span>
      </Marquee>
    </div>
  );
};

export default RunningLine;
