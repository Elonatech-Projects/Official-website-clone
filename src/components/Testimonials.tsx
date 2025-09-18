"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const TestimonialsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mary Ephraim Egbas",
      position: "CEO",
      company: "Okhma Consult",
      content:
        "The challenge we face is that we are big enough to need a network with specific functionality, but not necessarily requiring a full-time IT staff person. Elonatech Nigeria Ltd. provided the perfect solution; they have the technical expertise and mindshare we needed coupled with flexibility in the level of support. They are really responsive, prioritizing important issues that arise and dealing with them quickly and effectively. I also appreciate their detailed follow-up and preventive maintenance; more than once this has helped us avoid a major problem with our network. A lot of companies these days make claims about customer service and looking out for the best interest of their clients, but Elonatech can be trusted to do what they say—and for a competitive price.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1709571472/TestimonialSection/Mary-Ephraim-Egbas_kcv6sr.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Benjamin Miachi",
      position: "CEO/Chief Analyst",
      company: "Remaben Scientific Services Ltd.",
      content:
        "In the past, I've been 'held hostage' by techie people who talk over my head. I clicked with Elonatech Nigeria Ltd. from the start because they are so down to earth and more than willing to do a great job for their clients. Elonatech Nigeria Ltd. is a professional company with a real commitment to provide excellent technical expertise and incredibly good customer service. I haven't found this from many other providers.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1709571469/TestimonialSection/Remeben-MD-1_mueqml.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Chinyere Iziogu",
      position: "Admin Manager",
      company: "Shepherd Specialist Hospital",
      content:
        "We really needed a company that could handle the computer issues we no longer had the time or experience to deal with. Elonatech Nigeria Ltd. is a perfect solution for us because we have the same IT Professional with us every week who is very familiar with our network, and we don't have to worry about dealing with computer problems on our own anymore. The fact that Elonatech Nigeria Ltd uses Microsoft best practices is very important to us, too. We are confident that if someone else had to manage our network down the road, it would be easy to do because of the systems that are in place.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1709571470/TestimonialSection/Chunyere-Nganwuchu_thzpc7.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Abayomi Akakanfo",
      position: "Business Dev. Manager",
      company: "Hyperthread Ventures Limited",
      content:
        "I have worked with other web designers before but was never satisfied with the end result. From start to finish my interaction with the team at Elonatech was professional, stress-free and I had complete trust in their ability to deliver. Their difference is: They took the time to listen to what I wanted but also brought their own ideas, experience and creativity so that the end design was more rounded. They understood that I needed to see things in a visual context and have some flexibility to 'play' around with a few ideas. All of this was done face to face at their office making the process highly personal.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1709571469/TestimonialSection/Abayomi-Kakanfo_mmqbbt.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "Mr. Yahaya Olajide",
      position: "Managing Partner",
      company: "Olajide & Associates Ltd",
      content:
        "Every organization relies on computers, laptops, and workstations to perform their duties, and when your equipment goes down, you lose productivity. Elonatech Nigeria Ltd allows us to focus on our core business, They evaluated our existing hardware, initiated a master plan to incrementally improve our systems. We never have to look over our shoulders any more, when it comes to our computer systems.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1709571473/TestimonialSection/Mr._Yahaya_Olajide_upu7uz.jpg",
      rating: 5,
    },
    {
      id: 6,
      name: "Gabriel Osondu",
      position: "COO/Water Specialist",
      company: "Safebrooks Nig. Ltd.",
      content:
        "Safebrooks Nigeria Limited relies on Elonatech for it's digital marketing and web development expertise, with a particular focus on the area of social media marketing and digital advertising. Elonatech provides the best advice and is superbly knowledgeable as well as being fully committed and responsive to our needs and supporting the ideas and initiatives we have presented. Oreva and all of the team at Elonatech have become invaluable partners for our company in creating brand awareness and being instrumental in generating new business ideas.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1709571471/TestimonialSection/Gabriel-Osondu_jvgsjv.jpg",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrev = () => {
    setActiveIndex(
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex(
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
    );
  };

  const goToSlide = (index: number) => setActiveIndex(index);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${
          i < rating ? "text-yellow-400" : "text-gray-400"
        }`}
      >
        ★
      </span>
    ));

  return (
    <div className="bg-[#11253D] py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Testimonials</h2>
          <div className="h-[3px] w-20 bg-red-600 mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center max-w-4xl mx-auto">
          {/* Prev */}
          <button
            onClick={goToPrev}
            className="absolute -left-10 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-red-600/80 text-white text-xl transition"
          >
            &#8249;
          </button>

          {/* Slides */}
          <div className="w-full overflow-hidden">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`${
                  index === activeIndex ? "block animate-fadeIn" : "hidden"
                }`}
              >
                <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white/5 rounded-xl backdrop-blur-md shadow-xl">
                  <div className="mb-5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-red-600"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://img.freepik.com/premium-vector/blurred-mosaic-censor-blur-effect-texture_540598-61.jpg";
                      }}
                    />
                  </div>

                  <div className="max-w-3xl">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1">
                      {t.name}
                    </h3>
                    <h4 className="text-gray-300 text-sm md:text-base mb-4">
                      {t.position}, {t.company}
                    </h4>

                    <div className="mb-5">{renderStars(t.rating)}</div>

                    <div className="relative italic text-lg leading-relaxed">
                      <span className="absolute -left-5 -top-3 text-3xl text-red-600 font-bold">
                        "
                      </span>
                      <p>{t.content}</p>
                      <span className="absolute -right-5 -bottom-3 text-3xl text-red-600 font-bold">
                        "
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={goToNext}
            className="absolute -right-10 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-red-600/80 text-white text-xl transition"
          >
            &#8250;
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === activeIndex
                  ? "bg-red-600"
                  : "bg-white/30 hover:bg-red-600/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
