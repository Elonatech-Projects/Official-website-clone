"use client";

import { House } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Effect to close dropdown on click outside
  useEffect(() => {
    if (!openDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav
      ref={dropdownRef}
      className="flex flex-1 gap-7 items-center justify-between w-full max-w-fit text-text-light font-medium text-xl relative"
    >
      <Link href={"#"} className="hover:text-red-500 transition-colors">
        <House />
      </Link>

      <NavbarMenu
        title="solutions"
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <NavbarMenu
        title="support"
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <NavbarMenu
        title="strategicServices"
        displayName="Strategic Services"
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <NavbarMenu
        title="products"
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <NavbarMenu
        title="whoWeAre"
        displayName="Who we are"
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <Link href={"#"} className="hover:text-red-500 transition-colors">
        Get In Touch
      </Link>
    </nav>
  );
};

export default Navbar;
