import Image from "next/image";
import React from "react";

const FreeConsultation: React.FC = () => {
  return (
    <section className="bg-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How about a FREE Consultation on the Best Digital Marketing Strategy
            for your Business?
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Want to know how to increase your brand visibility, boost audience
            engagement, drive traffic, increase social media followers, promote
            your products and services online, and increase sales for your
            business? Elonatech offers tailored advice on how to reach and
            engage your audience better, increase conversions, and maximize
            profit through a bespoke monthly/ yearly digital marketing plan for
            your business.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Get Free Consultation
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/people/Ceo1.png"
            alt="Consultation"
            className="w-64 md:w-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
