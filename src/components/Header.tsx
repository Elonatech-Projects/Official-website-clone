import Image from "next/image";
import Navbar from "./Navbar";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <header className="bg-background shadow-sm py-6 px-4 flex items-center justify-between gap-10">
      <a href="#" className="flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="Elonatech Logo"
          width={200}
          height={150}
          className="h-auto w-40 object-contain"
        />
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Social links */}
      <div className="flex-shrink-0 flex gap-3 mr-3 [&>*]:transition-transform [&>*]:duration-200 [&>*]:ease-in-out [&>*]:hover:scale-110 [&>*]:h-10 [&>*]:w-10 md:[&>*]:h-20 md:[&>*]:w-20">
        <SocialIcon
          target="_blank"
          url="https://www.facebook.com/elonatech"
          style={{
            height: 35,
            width: 35,
          }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.linkedin.com/company/elonatech/"
          style={{
            height: 35,
            width: 35,
          }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/elonatech"
          style={{
            height: 35,
            width: 35,
          }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.youtube.com/@elonatech"
          style={{
            height: 35,
            width: 35,
          }}
        />
        <SocialIcon
          target="_blank"
          url="https://x.com/Elonatech"
          style={{
            height: 35,
            width: 35,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
