"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { sampleData } from "@/Constants/MockData";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import Button from "../Components/Button";
import Image from "next/image";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

const Carousel = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const slidesPerGroup = 3;

  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    axis: "x",
  });
  const totalSlides = Math.ceil(sampleData.length / slidesPerGroup);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      const groupIndex =
        Math.floor(embla.selectedScrollSnap() / slidesPerGroup) % totalSlides;
      setSelectedIndex(groupIndex);
    };
    embla.on("select", onSelect);
    onSelect();
  }, [embla, totalSlides]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
  }, [embla]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!embla) return;
      embla.scrollTo(index * slidesPerGroup);
    },
    [embla]
  );

  return (
    <section className="w-full py-10 bg-black text-black">
      <div className="max-w-6xl mx-auto relative">
        <p className="text-white text-6xl pl-4 mb-4">Why choose us</p>

        {isMobile ? (
          <div className="overflow-y-scroll h-[900px]">
            {sampleData.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#242424] rounded-lg py-2 px-4 h-[300px] relative group hover:bg-[#D7FB00] hover:text-black transition-all duration-300">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={100}
                    height={30}
                  />
                  <div className="ml-4">
                    <h3 className="text-xl text-white font-bold group-hover:text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white mt-2 group-hover:text-black">
                      {item.description}
                    </p>
                    <div className="flex absolute w-full bottom-[30px] pr-12 justify-between items-center">
                      <Button
                        label="LEARN MORE"
                        className="text-white text-sm !p-0 rounded-3xl group-hover:text-black"
                        icon={<FiArrowUpRight size={20} />}
                      />
                      <div className="p-2 bg-[#D7FB00] text-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <BsLightningCharge size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /////////////////////////////////////////////////////////////////////////////
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {sampleData.map((item, index) => (
                  <div key={index} className="flex-none w-1/3 p-4">
                    <div className="bg-[#242424] rounded-lg py-2 px-4 h-[300px] relative group hover:bg-[#D7FB00] hover:text-black transition-all duration-300">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={100}
                        height={30}
                      />
                      <div className="ml-4">
                        <h3 className="text-xl text-white font-bold group-hover:text-black">
                          {item.name}
                        </h3>
                        <p className="text-sm text-white mt-2 group-hover:text-black">
                          {item.description}
                        </p>
                        <div className="flex absolute w-full bottom-[30px] pr-12 justify-between items-center">
                          <Button
                            label="LEARN MORE"
                            className="text-white text-sm !p-0 rounded-3xl group-hover:text-black"
                            icon={<FiArrowUpRight size={20} />}
                          />
                          <div className="p-2 bg-[#D7FB00] text-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                            <BsLightningCharge size={30} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-[-50px] mt-8 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-200 border-2 border-white"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-[-50px] mt-8 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-200 border-2 border-white"
            >
              <FiChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    i === selectedIndex ? "bg-white scale-110" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Carousel;
