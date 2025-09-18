"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [mailchimp, setMailChimp] = useState("");
  const [facebookSrc, setFacebookSrc] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Facebook SDK
  useEffect(() => {
    const loadFacebookSDK = () => {
      if (!(window as any).FB) {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          (window as any).FB.init({
            xfbml: true,
            version: "v15.0",
          });
        };
        document.body.appendChild(script);
      } else {
        (window as any).FB.XFBML.parse();
      }
    };
    loadFacebookSDK();
  }, []);

  // Facebook iframe responsive (mobile vs desktop)
  useEffect(() => {
    const checkDeviceType = () => {
      const isMobile = window.innerWidth <= 768;

      const mobileUrl =
        "https://m.facebook.com/v3.2/plugins/page.php?href=https%3A%2F%2Fm.facebook.com%2Felonatech&width=340&height=150&hide_cover=true&show_facepile=true";
      const desktopUrl =
        "https://web.facebook.com/v3.2/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Felonatech&width=340&height=150&hide_cover=true&show_facepile=true";

      setIsMobile(isMobile);
      setFacebookSrc(isMobile ? mobileUrl : desktopUrl);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  useEffect(() => {
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, [facebookSrc]);

  // Newsletter submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newData = { email };
      const mail = await axios.post(
        `http://localhost:3000/api/v1/email/mailchimp`,
        newData,
        { headers: { "Content-Type": "application/json" } }
      );
      if (mail) {
        setMailChimp("visible");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c213e] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Company Info */}
        <div className="md:col-span-3">
          <Image
            src="/images/logo.png"
            alt="Elonatech Logo"
            className="w-20 mb-3"
          />
          <h3 className="font-bold">ELONATECH NIGERIA LIMITED</h3>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            4 , Oluwakemi Street, Shasha Road, Egbeda, Lagos.
          </p>
          <p className="mt-2 text-sm text-gray-300">info@elonatech.com.ng</p>
          <p className="mt-2 text-sm text-gray-300">+234 901 454 4520</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5">
            <Link
              href="https://twitter.com/Elonatech"
              className="hover:text-red-500 transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/elonatech"
              className="hover:text-red-500 transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/elonatech"
              className="hover:text-red-500 transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/elonatech/posts"
              className="hover:text-red-500 transition"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@elonatech"
              className="hover:text-red-500 transition"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href="https://wa.me/message/NW4HSVIHRNRLA1"
              className="hover:text-red-500 transition"
            >
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>

        {/* Who We Are */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4">Who We Are</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/who-we-are">Company</Link>
            </li>
            <li>
              <Link href="/our-team">Team</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>

          <h4 className="font-bold mt-6 mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/computers">Computers</Link>
            </li>
            <li>
              <Link href="/printers">Printers</Link>
            </li>
            <li>
              <Link href="/office-equipment">Office Equipment</Link>
            </li>
            <li>
              <Link href="/pos-system">POS Systems</Link>
            </li>
            <li>
              <Link href="/network-devices">Network Devices</Link>
            </li>
          </ul>
        </div>

        {/* Our Services (double width) */}
        <div className="md:col-span-4">
          <h4 className="font-bold mb-4">Our Services</h4>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/hardware-engineering">Computer Engineering</Link>
              </li>
              <li>
                <Link href="/network-administration-implementation">
                  Network Administration
                </Link>
              </li>
              <li>
                <Link href="/cctv">CCTV Installation</Link>
              </li>
              <li>
                <Link href="/access-control">Access Control</Link>
              </li>
              <li>
                <Link href="/ip-telephony">IP Telephony</Link>
              </li>
              <li>
                <Link href="/application-software">Application Software</Link>
              </li>
              <li>
                <Link href="/web-design">Web Design/Dev</Link>
              </li>
              <li>
                <Link href="/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/social-media-marketing">
                  Social Media Marketing
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/brand-identity">Brand Development</Link>
              </li>
              <li>
                <Link href="/uiux">UI/UX & Prohreftyping</Link>
              </li>
              <li>
                <Link href="/motion-graphics">Motion Graphics</Link>
              </li>
              <li>
                <Link href="/livestreaming">Livestreaming</Link>
              </li>
              <li>
                <Link href="/network-support">Network Support</Link>
              </li>
              <li>
                <Link href="/remote-support">Remote Support</Link>
              </li>
              <li>
                <Link href="/retainer-partnership">Retainership</Link>
              </li>
              <li>
                <Link href="/training">Training</Link>
              </li>
              <li>
                <Link href="/consumables">Consumables</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter + FB Embed */}
        <div className="md:col-span-3">
          {/* Facebook Page Embed */}
          <div className="mb-5">
            {!isMobile && (
              <iframe
                className="w-full h-40 border-0 overflow-hidden"
                scrolling="no"
                allow="encrypted-media"
                src={facebookSrc}
              ></iframe>
            )}
          </div>

          {/* Newsletter */}
          {mailchimp === "visible" ? (
            <p className="text-red-500 text-sm">
              Thank you for subscribing to our newsletter!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Your email*"
                className="w-full px-3 py-2 rounded text-black text-sm focus:outline-none bg-white"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-medium"
              >
                Subscribe
              </button>
              <div className="flex items-center text-xs text-gray-300">
                <input type="checkbox" className="mr-2" required />
                <p>
                  I accept the{" "}
                  <Link href="/policy" className="underline text-white">
                    Privacy Policy<span className="text-red-500">*</span>
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-12 border-t border-gray-700 pt-5">
        Copyright © {currentYear} All rights reserved | Designed & Developed by{" "}
        <span className="text-red-500">Elonatech Nigeria Limited</span>
      </div>
    </footer>
  );
};

export default Footer;
