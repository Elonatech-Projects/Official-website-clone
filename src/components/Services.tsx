import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white max-w-[65%] m-auto flex flex-col items-center">
      {/* What We Do Best Section */}
      <div className="mb-12 w-full">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          What We Do Best
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/web-design.jpg"
              width={150}
              height={100}
              alt="Web Design & Development"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              WEB DESIGN & DEVELOPMENT
            </h3>
            <p className="mb-4">
              Innovative and user-friendly website solutions.
            </p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/digital-marketing.jpg"
              width={150}
              height={100}
              alt="Digital Marketing"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">DIGITAL MARKETING</h3>
            <p className="mb-4">
              With Digital marketing, we have successfully changed the way
              brands and businesses use technology for marketing the Digital
              platforms are.
            </p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/graphics-branding.jpg"
              width={150}
              height={100}
              alt="Graphics & Branding"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">GRAPHICS & BRANDING</h3>
            <p className="mb-4">
              Creative designs to enhance your brand identity.
            </p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/network-engineering.jpg"
              width={150}
              height={100}
              alt="Network Engineering / Administration"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              NETWORK ENGINEERING / ADMINISTRATION
            </h3>
            <p className="mb-4">Expert management of network infrastructure.</p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/computer-engineering.jpg"
              width={150}
              height={100}
              alt="Computer Engineering"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">COMPUTER ENGINEERING</h3>
            <p className="mb-4">Advanced hardware and software solutions.</p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/access-control.jpg"
              width={150}
              height={100}
              alt="Access Control & Surveillance"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              ACCESS CONTROL & SURVEILLANCE
            </h3>
            <p className="mb-4">
              Secure and monitor your premises effectively.
            </p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/animations-video.jpg"
              width={150}
              height={100}
              alt="Animations & Video"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">ANIMATIONS & VIDEO</h3>
            <p className="mb-4">Engaging visual content for your brand.</p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/livestreaming.jpg"
              width={150}
              height={100}
              alt="Livestreaming & Videoconferencing"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              LIVESTREAMING & VIDEOCONFERENCING
            </h3>
            <p className="mb-4">Seamless virtual communication solutions.</p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
          <div className="group bg-blue-700 text-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative overflow-hidden">
            <Image
              src="/images/consulting.jpg"
              width={150}
              height={100}
              alt="Consulting"
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">CONSULTING</h3>
            <p className="mb-4">Expert advice to optimize your IT strategy.</p>
            <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
