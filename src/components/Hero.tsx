"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText?: string;
}

const Hero = () => {
  const slides: Slide[] = [
    {
      id: 1,
      src: "/images/carousel/Digital_marketers_zreuxb.jpg",
      alt: "Digital marketers",
      title: "We are Digital Marketers",
      subtitle:
        "Experts in providing digital marketing strategies that convert engagement",
      buttonText: "Know More",
    },
    {
      id: 2,
      src: "/images/carousel/IT_consultants_ah07ai.jpg",
      alt: "IT Consultants",
      title: "We are IT Consultants",
      subtitle:
        "Information technology consulting services help improve the performance, scalability and competitiveness of your company through right technology enablement and usage",
      buttonText: "Learn More",
    },
    {
      id: 3,
      src: "/images/carousel/tech_support_jijajw.jpg",
      alt: "Tech support engineers",
      title: "We are Tech Support Engineers",
      subtitle:
        "We implement and design both complex and simple data/voice networks and maintenance of all types of computer systems",
      buttonText: "Get Started",
    },
    {
      id: 4,
      src: "/images/carousel/web_developers_sbyfha.jpg",
      alt: "Web developers",
      title: "We are Web Developers",
      subtitle:
        "We offer bespoke user experience, web design, app design, and software development services",
      buttonText: "Contact Us",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-screen md:h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } ${isTransitioning ? "opacity-70" : ""}`}
          >
            {/* Background Image with gradient overlay */}
            <div className="absolute inset-0">
              <Image
                width={200}
                height={200}
                src={slide.src}
                className="w-full h-full object-cover"
                alt={slide.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white">
              <div
                className={`transform transition-all duration-700 ease-out ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>
                {slide.buttonText && (
                  <button
                    type="button"
                    className="px-8 py-3 bg-accent hover:bg-white hover:text-accent text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
                  >
                    Know More
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-all duration-300 group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-6 h-6">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition-all duration-300 group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-6 h-6">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Hero;
