import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white max-w-[65%] m-auto flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-black border-b-4 border-red-600 inline-block mx-auto pb-2">
        Why Elonatech
      </h1>
      <p className="text-xl text-center text-gray-700 mt-2 mb-8">
        Top-Notch Technology Service Provider.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Card 1 */}
        <div
          className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/elonatech/image/upload/v1709804949/homePage/main/Scalable_IT_left-min_c8po5r.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4">
              Website and App Applications
            </h2>
            <p className="mb-6">
              At Elonatech, we build Apps that are not only visually beautiful
              but functionally effective. Our team of web strategists,
              designers, developers, and project managers work together to help
              clients meet their business objective.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative bg-gray-900 text-white p-6 rounded-lg shadow-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/elonatech/image/upload/v1709804949/homePage/main/Scalable_IT_right-min_cjn5fe.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4">
              Flexible, Scalable IT Solutions
            </h2>
            <p className="mb-6">
              Having the right company behind your system is as important as the
              network itself. Implementing a well-designed, secured enterprise
              network and utilizing the right combination of IT solutions will
              drive your business to the desired level.
            </p>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Services List and Logo */}
      <div className="flex w-full md:flex-row justify-between items-start mb-12 ">
        <ul className="space-y-6 text-gray-800 md:w-1/2 ">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 ">🎧</span>
            <div>
              <h3 className="font-semibold">
                Onsite Support And Installations
              </h3>
              <p>Expertise. Convenience. Customer Experience.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 ">📞</span>
            <div>
              <h3 className="font-semibold">Contact Support</h3>
              <p>Let us assist you with any product or service questions.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 ">💻</span>
            <div>
              <h3 className="font-semibold">
                Laptops. Network Servers. Workstations
              </h3>
              <p>Get what you need to run your business</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 ">🛡️</span>
            <div>
              <h3 className="font-semibold">
                Premium Software Retail & Installation
              </h3>
              <p>Ensures users perform tasks more effectively</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 ">🖨️</span>
            <div>
              <h3 className="font-semibold">Printer and Print Solutions</h3>
              <p>Efficient running of business operations</p>
            </div>
          </li>
        </ul>
        <Image
          src={"/images/about/support.png"}
          width={200}
          height={200}
          alt="Get your questions answered"
          className="md:w-[40%] mt-6 md:mt-0 self-center"
        />
      </div>

      {/* Company Description */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg gap-4">
        <div className="md:w-1/2 pr-4">
          <h2 className="text-3xl font-bold mb-4">
            The IT Solutions and Corporate Consultant Company
          </h2>
          <p className="mb-4">
            We at Elonatech are aware of your need for quality IT Services.
            Beyond reasonable doubt, the management of information technology
            for business is not inherently a do-it-yourself project. Business
            owners who aren&apos;t tech-savvy need to find quality IT solution
            providers. We are experts in IT related matters, poised to shape the
            industry, by helping clients solve complex IT challenges.
          </p>
          <p className="mb-4">
            Our Company&apos;s logistical services are designed for the
            top-of-the-market corporate clientele; we serve as an interface
            keeping you above the turmoil of working in today&apos;s Nigeria
            with minimum hassle. We strive to be the leading provider of
            innovative information technologies that improve the quality of
            lives.
          </p>
          <p>
            We delight in satisfying our clients through the provision of
            innovative, quality, timely, relevant and affordable solutions to
            their needs. &quot;Our concept is to provide One-Stop IT
            Solution&quot;
          </p>
        </div>

        <Image
          src={"/images/about/advert.png"}
          width={200}
          height={200}
          alt="one stop it solution"
          className="md:w-[40%] mt-6 md:mt-0"
        />
      </div>
    </section>
  );
};

export default About;
