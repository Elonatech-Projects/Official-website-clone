import React from "react";

const ServiceGoals: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "User Experience",
      description:
        "We offer bespoke user experience, web design, app design and software development services.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1707488914/homePage/main/User_experience_t6dbvw.png",
    },
    {
      id: 2,
      title: "Client Expectations",
      description:
        "We endeavor to exceed our clients' expectations with the solutions we provide, at competitive prices.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1707488913/homePage/main/Solution_client_expectation_doxygk.png",
    },
    {
      id: 3,
      title: "Timely Delivery",
      description:
        "We deliver projects within budget and deadline while continuously maintain quality & standard.",
      image:
        "https://res.cloudinary.com/elonatech/image/upload/v1707488915/homePage/main/budget_and_time_xv2dk6.png",
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2 bg-no-repeat bg-contain bg-center"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 text-white">
                <h3 className="text-xl font-bold mb-3 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed drop-shadow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGoals;
