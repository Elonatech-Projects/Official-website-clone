import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  icon,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />

      {/* Default Overlay */}
      <div className="absolute inset-0 bg-blue-900/70 flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-300 group-hover:opacity-0">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="font-semibold uppercase">{title}</h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-900/90 text-white flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-semibold uppercase mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
          See More
        </button>
      </div>
    </div>
  );
};

export default function ServicesGrid() {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "At Elonatech, we build websites that are not only visually beautiful but also functionally effective. Our team of web strategists.",
      image: "/images/services/web_design.png",
      icon: <span>🌐</span>,
    },
    {
      title: "Digital Marketing",
      description:
        "With Digital marketing, we have successfully changed the way brands and businesses use technology for marketing.",
      image: "/images/services/digital_marketing.png",
      icon: <span>📈</span>,
    },
    {
      title: "Graphics & Branding",
      description:
        "Brand identity is not limited to a specific mark or name. Branding can incorporate multiple touch points...",
      image: "/images/services/graphics_and_branding.png",
      icon: <span>🎨</span>,
    },
    {
      title: "Network Engineering/Administration",
      description:
        "Responsible for installing, implementing, and maintaining business applications for organizations...",
      image: "/images/services/networking.png",
      icon: <span>🔌</span>,
    },
    {
      title: "Computer Engineering",
      description:
        "While computer hardware configurations vary widely, we work on a broad range of hardware systems..",
      image: "/images/services/computer_engineering.png",
      icon: <span>💻</span>,
    },
    {
      title: "Access Control & Surveillance",
      description:
        "While network security should always be a prime concern for your business, you shouldn’t neglect your physical security either...",
      image: "/images/services/survellance.png",
      icon: <span>📹</span>,
    },
    {
      title: "Animations & Video Graphics",
      description:
        "Animations have the power to convey complex concepts, evoke emotions, and leave a lasting impression on your audience.",
      image: "/images/services/animation.png",
      icon: <span>🎬</span>,
    },
    {
      title: "Livestreaming & Video Conferencing",
      description:
        "As we adjust to the new normal, everyone is moving their social life online. Happy hours, concerts, events, seminars, late night talk shows...",
      image: "/images/services/live_streaming.png",
      icon: <span>🎥</span>,
    },
    {
      title: "Consulting",
      description:
        "We help brands & businesses gain a competitive advantage in the connected world helping business find the best solutions. With over 12 years of experience...",
      image: "/images/services/consulting.png",
      icon: <span>💼</span>,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-black border-b-4 border-red-600 inline-block mx-auto pb-2 mb-8">
        What We Do Best
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
