import React from "react";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c213e] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Company Info */}
        <div className="md:col-span-3">
          <img
            src="/images/logo.png" // replace with your logo
            alt="Elonatech Logo"
            className="w-16 mb-3"
          />
          <h3 className="font-bold">ELONATECH NIGERIA LIMITED</h3>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            4 , Oluwakemi Street, Shasha Road, Egbeda, Lagos.
          </p>
          <p className="mt-2 text-sm text-gray-300">info@elonatech.com.ng</p>
          <p className="mt-2 text-sm text-gray-300">+234 901 454 4520</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-red-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Who We Are */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">Who We Are</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Company</li>
            <li>Team</li>
            <li>Portfolio</li>
          </ul>

          <h4 className="font-bold mt-6 mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Computers</li>
            <li>Printers</li>
            <li>Office Equipment</li>
            <li>POS Systems</li>
            <li>Network Devices</li>
          </ul>
        </div>

        {/* Our Services (double width) */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-4">Our Services</h4>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Computer Engineering</li>
              <li>Network Administration</li>
              <li>CCTV Installation</li>
              <li>Access Control</li>
              <li>IP Telephony</li>
              <li>Application Software</li>
              <li>Web Design/Dev</li>
              <li>Digital Marketing</li>
              <li>Social Media Marketing</li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Brand Development</li>
              <li>UI/UX & Prototyping</li>
              <li>Motion Graphics</li>
              <li>Livestreaming</li>
              <li>Network Support</li>
              <li>Remote Support</li>
              <li>Retainership</li>
              <li>Training</li>
              <li>Consumables</li>
            </ul>
          </div>
        </div>

        {/* Newsletter + FB Embed */}
        <div className="md:col-span-3">
          {/* Facebook Page Embed */}
          <div
            className="mb-5"
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/elonatechng&tabs=timeline&width=340&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" 
                width="340" height="150" style="border:none;overflow:hidden" scrolling="no" frameborder="0" 
                allowfullscreen="true"></iframe>`,
            }}
          />

          {/* Newsletter */}
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email*"
              className="w-full px-3 py-2 rounded text-black text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-medium"
            >
              Subscribe
            </button>
            <div className="flex items-center text-xs text-gray-300">
              <input type="checkbox" className="mr-2" />
              <p>
                I accept the{" "}
                <a href="#" className="underline text-white">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-12 border-t border-gray-700 pt-5">
        Copyright © 2025 All rights reserved | Designed & Developed by{" "}
        <span className="text-red-500">Elonatech Nigeria Limited</span>
      </div>
    </footer>
  );
};

export default Footer;
