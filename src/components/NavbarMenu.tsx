import {
  ChevronDown,
  ChevronRight,
  Network,
  Shield,
  Database,
  Cog,
  Globe,
  Cable,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define the type for menu items to support deep nesting and icons
type MenuItem = {
  name: string;
  href: string;
  subItems?: MenuItem[];
  icon?: React.ComponentType<{ size?: number; className?: string }>;
};

// Define dropdown items with nested structure, including third-level items with icons for "solutions"
const dropdownItems: Record<string, MenuItem[]> = {
  solutions: [
    {
      name: "Tech Solutions",
      href: "#",
      subItems: [
        {
          name: "Hardware Solutions",
          href: "#",
          subItems: [
            { name: "Computer Engineering", href: "#", icon: Network },
            { name: "Printers", href: "#", icon: Network },
            { name: "Mobile Devices", href: "#", icon: Network },
            { name: "Networking Equipment", href: "#", icon: Network },
          ],
        },
        {
          name: "Network Solutions",
          href: "#",
          subItems: [
            { name: "Network Admin/Implementation", href: "#", icon: Shield },
            { name: "Network Security", href: "#", icon: Shield },
            { name: "Server Administration", href: "#", icon: Shield },
            {
              name: "Infrastructure / System Integration",
              href: "#",
              icon: Shield,
            },
            { name: "Structured Cabling", href: "#", icon: Shield },
            { name: "CCTV Installation", href: "#", icon: Shield },
            { name: "Network Admin/Implementation", href: "#", icon: Shield },
          ],
        },
        {
          name: "Software Solutions",
          href: "#",
          subItems: [
            { name: "System Software", href: "#", icon: Database },
            { name: "Applicaiton Software", href: "#", icon: Database },
            {
              name: "Business Application Software",
              href: "#",
              icon: Database,
            },
          ],
        },
        {
          name: "Communication",
          href: "#",
          subItems: [
            {
              name: "IP Telephony & PBX systems",
              href: "#",
              icon: Cog,
            },
            { name: "VoIP", href: "#", icon: Globe },
          ],
        },
        {
          name: "Access & Security",
          href: "#",
          subItems: [
            { name: "Access Control", href: "#", icon: Cable },
            { name: "Time Management Solutions", href: "#", icon: Camera },
            { name: "Surveillance", href: "#", icon: Camera },
          ],
        },
      ],
    },
    {
      name: "Digital Solutions",
      href: "#",
      subItems: [
        {
          name: "Web & App solutions",
          href: "#",
          subItems: [
            { name: "Web Design/Dev", href: "#", icon: Cable },
            { name: "App Design/Dev", href: "#", icon: Camera },
            { name: "Domain Reg/DNS Mgt", href: "#", icon: Camera },
            { name: "Web Hosting", href: "#", icon: Camera },
          ],
        },
        {
          name: "Digital marketing",
          href: "#",
          subItems: [
            { name: "Digital Marketing", href: "#", icon: Cable },
            { name: "Social Media Marketing", href: "#", icon: Camera },
            { name: "Email Marketing", href: "#", icon: Camera },
            { name: "SEO", href: "#", icon: Camera },
            { name: "Content Marketing", href: "#", icon: Camera },
            { name: "PPC/CPI", href: "#", icon: Camera },
          ],
        },
        {
          name: "Graphics",
          href: "#",
          subItems: [
            { name: "Graphic", href: "#", icon: Cable },
            { name: "Brand Development", href: "#", icon: Camera },
            { name: "UI/UX & Prototyping", href: "#", icon: Camera },
          ],
        },
        {
          name: "Video Animations",
          href: "#",
          subItems: [
            { name: "2D/3D Animations", href: "#", icon: Cable },
            { name: "Motion Graphics", href: "#", icon: Camera },
            { name: "Video Editing", href: "#", icon: Camera },
          ],
        },
        {
          name: "Teleconfrencing",
          href: "#",
          subItems: [
            { name: "Livestreaming", href: "#", icon: Cable },
            { name: "Videoconferencing", href: "#", icon: Camera },
          ],
        },
      ],
    },
    {
      name: "Sales/Supply",
      href: "#",
      subItems: [
        {
          name: "Communication",
          href: "#",
          subItems: [
            { name: "Hardware", href: "#", icon: Cable },
            { name: "Software", href: "#", icon: Camera },
            { name: "Consumables", href: "#", icon: Camera },
          ],
        },
      ],
    },
  ],
  products: [
    { name: "Shop", href: "#" },
    { name: "Computers", href: "#" },
    { name: "Printers", href: "#" },
    { name: "Office Equipments", href: "#" },
    { name: "POS Systems", href: "#" },
    { name: "Network Devices", href: "#" },
  ],
  support: [
    { name: "Technical support", href: "#" },
    { name: "Network support", href: "#" },
    { name: "Remote Support", href: "#" },
  ],
  strategicServices: [
    { name: "Consulting", href: "#" },
    { name: "Retainership", href: "#" },
    { name: "Training", href: "#" },
  ],
  whoWeAre: [
    { name: "Company", href: "#" },
    { name: "Team", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Career", href: "#" },
  ],
};

interface NavbarMenuProps {
  title: string;
  displayName?: string;
  openDropdown: string | null;
  toggleDropdown: (name: string) => void;
  setOpenDropdown: (name: string | null) => void;
}

const NavbarMenu = ({
  title,
  openDropdown,
  displayName,
  toggleDropdown,
  setOpenDropdown,
}: NavbarMenuProps) => {
  const items = dropdownItems[title as keyof typeof dropdownItems] || [];
  const isMega = title === "solutions"; // Special mega menu styling for "solutions"
  const [hoveredItem, setHoveredItem] = useState<number | null>(
    isMega ? 0 : null
  ); // Default to first item for mega menu
  const [hoveredSubItem, setHoveredSubItem] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Main menu button */}
      <button
        onClick={() => toggleDropdown(title)}
        className="flex items-center gap-1 hover:text-red-500 transition-colors focus:outline-none"
      >
        {displayName
          ? displayName
          : title.charAt(0).toUpperCase() + title.slice(1)}
        <ChevronDown
          className={`transition-transform duration-200 ${
            openDropdown === title ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      {openDropdown === title && (
        <div
          className={`absolute top-full left-0 mt-2 ${
            isMega ? "w-48" : "w-60"
          } bg-[#3c5678] rounded-md shadow-lg py-2 z-50`}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Main level item link, with special styling for mega menu selected item */}
              <Link
                href={item.href}
                className={`flex justify-between items-center px-4 py-2 text-text-light hover:bg-[#243a59] hover:border-l-4 hover:border-l-accent transition-colors`}
                // onClick={() => setOpenDropdown(null)}
              >
                {item.name}
                {item.subItems && item.subItems.length > 0 && (
                  <ChevronRight size={16} />
                )}
              </Link>

              {/* Second level submenu */}
              {item.subItems &&
                item.subItems.length > 0 &&
                hoveredItem === index && (
                  <div
                    className={`absolute top-0 left-full ml-0.5 bg-[#3c5678] rounded-md shadow-lg p-2 z-50 flex flex-row w-auto gap-3`}
                    onMouseLeave={() => setHoveredSubItem(null)}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="relative"
                        onMouseEnter={() => setHoveredSubItem(subIndex)}
                        onMouseLeave={() => setHoveredSubItem(null)}
                      >
                        {/* Second level item link, with red text for mega menu */}
                        <Link
                          href={subItem.href}
                          className={`flex gap-2 items-center py-2 text-text-light hover:bg-[#243a59] hover:border-b-4 hover:border-b-accent transition-colors whitespace-nowrap `}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                          {subItem.subItems && subItem.subItems.length > 0 && (
                            <ChevronRight
                              size={16}
                              className={`${
                                hoveredSubItem === subIndex ? "rotate-90" : ""
                              }`}
                            />
                          )}
                        </Link>

                        {/* Third level submenu with icons below (icon above name in column) */}
                        {subItem.subItems &&
                          subItem.subItems.length > 0 &&
                          hoveredSubItem === subIndex && (
                            <div
                              className={`absolute bg-[#3c5678] rounded-md shadow-lg p-2 z-50 top-full left-0 mt-1 w-max flex flex-row gap-4
                              `}
                            >
                              {subItem.subItems.map(
                                (subSubItem, subSubIndex) => (
                                  <Link
                                    key={subSubIndex}
                                    href={subSubItem.href}
                                    className={`px-4 py-2 text-text-light hover:bg-[#243a59] transition-colors flex flex-col items-center text-center text-sm`}
                                    onClick={() => setOpenDropdown(null)}
                                  >
                                    {subSubItem.icon && (
                                      <subSubItem.icon size={20} />
                                    )}
                                    <span>{subSubItem.name}</span>
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
