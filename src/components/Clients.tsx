"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ClientsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const allClients = [
    "https://res.cloudinary.com/elonatech/image/upload/v1707234681/homePage/clientLogo/amp-featured-image_fincna.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234684/homePage/clientLogo/lsg_iph8mx.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234695/homePage/clientLogo/hv_nzxyt1.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234749/homePage/clientLogo/kosofe_yuqg5x.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234691/homePage/clientLogo/tru_h9afyy.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234742/homePage/clientLogo/feii_a8rzqg.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234686/homePage/clientLogo/ireti_whpffr.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234744/homePage/clientLogo/remaben_yljc8l.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234696/homePage/clientLogo/domino_i6flnw.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234746/homePage/clientLogo/olajide_e245yh.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234750/homePage/clientLogo/pentecostal_cutbi5.png",
    "https://res.cloudinary.com/elonatech/image/upload/v1707234690/homePage/clientLogo/home_mwhzd9.png",
  ];

  // Group clients into sets of 4 per slide (you can adjust number)
  const groupedClients: string[][] = [];
  for (let i = 0; i < allClients.length; i += 4) {
    groupedClients.push(allClients.slice(i, i + 4));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === groupedClients.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [groupedClients.length]);

  const goToPrev = () => {
    setActiveIndex(
      activeIndex === 0 ? groupedClients.length - 1 : activeIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex(
      activeIndex === groupedClients.length - 1 ? 0 : activeIndex + 1
    );
  };

  return (
    <div className="px-4 py-16 max-w-6xl mx-auto">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Some Of Our Clients
        </h2>
        <div className="h-[3px] w-20 bg-red-600 mx-auto"></div>
      </div>

      {/* Carousel Section */}
      <div className="relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          className="absolute left-[-25px] md:left-[-15px] bg-white w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          onClick={goToPrev}
        >
          <span className="text-2xl font-bold text-gray-700">&#8249;</span>
        </button>

        {/* Carousel Track */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {groupedClients.map((clientGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-full flex justify-center gap-6"
              >
                {clientGroup.map((src, clientIndex) => (
                  <div
                    key={clientIndex}
                    className="flex justify-center items-center h-28 sm:h-32 w-1/4 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-4"
                  >
                    <Image
                      src={src}
                      alt={`Client ${groupIndex * 4 + clientIndex + 1}`}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-[-25px] md:right-[-15px] bg-white w-12 h-12 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition"
          onClick={goToNext}
        >
          <span className="text-2xl font-bold text-gray-700">&#8250;</span>
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {groupedClients.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === activeIndex
                ? "bg-red-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
