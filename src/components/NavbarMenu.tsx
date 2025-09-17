import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Define dropdown items
const dropdownItems = {
  solutions: [
    { name: "Enterprise Solutions", href: "#" },
    { name: "Cloud Services", href: "#" },
    { name: "Consulting", href: "#" },
  ],
  products: [
    { name: "Software", href: "#" },
    { name: "Hardware", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  support: [
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Contact Support", href: "#" },
  ],
};

interface NavbarMenuProps {
  title: string;
  openDropdown: string | null;
  toggleDropdown: (name: string) => void;
  setOpenDropdown: (name: string | null) => void;
}

const NavbarMenu = ({
  title,
  openDropdown,
  toggleDropdown,
  setOpenDropdown,
}: NavbarMenuProps) => {
  const items = dropdownItems[title as keyof typeof dropdownItems] || [];

  return (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(title)}
        className="flex items-center gap-1 hover:text-red-500 transition-colors focus:outline-none"
      >
        {title.charAt(0).toUpperCase() + title.slice(1)}
        <ChevronDown
          className={`transition-transform duration-200 ${
            openDropdown === title ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      {openDropdown === title && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-[#3c5678] rounded-md shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-text-light hover:bg-[#243a59] hover:border-l-4 hover:border-l-accent transition-colors"
              onClick={() => setOpenDropdown(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
