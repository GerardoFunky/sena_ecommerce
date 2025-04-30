import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../utils/helpers/stringHelpers";

interface NavigationProps {
  isMobile?: boolean;
}

interface NavigationItem {
  name: string;
  href: string;
  subItems?: Array<{ name: string; href: string }>;
}

const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
    subItems: [
      { name: "Chairs", href: "/products/category/chairs" },
      { name: "Sofas", href: "/products/category/sofas" },
      { name: "Tables", href: "/products/category/tables" },
      { name: "Beds", href: "/products/category/beds" },
      { name: "Ottomans", href: "/products/category/ottomans" },
    ],
  },
  {
    name: "Materials",
    href: "/materials",
    subItems: [
      { name: "Leather", href: "/materials/leather" },
      { name: "Fabric", href: "/materials/fabric" },
      { name: "Velvet", href: "/materials/velvet" },
      { name: "Synthetic", href: "/materials/synthetic" },
    ],
  },
  {
    name: "Tools",
    href: "/tools",
    subItems: [
      { name: "Size Calculator", href: "/tools/size-calculator" },
      { name: "Material Guide", href: "/tools/material-guide" },
      { name: "Room Visualizer", href: "/tools/room-visualizer" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navigation: React.FC<NavigationProps> = ({ isMobile = false }) => {
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  const handleSubMenuToggle = (itemName: string) => {
    setOpenSubMenu(openSubMenu === itemName ? null : itemName);
  };

  return (
    <nav className={cn("flex", isMobile ? "flex-col space-y-2" : "space-x-6")}>
      {navigationItems.map((item) => (
        <div
          key={item.name}
          className={cn("relative", isMobile ? "w-full" : "")}
        >
          {item.subItems ? (
            <>
              <button
                onClick={() => handleSubMenuToggle(item.name)}
                className={cn(
                  "flex items-center text-gray-700 hover:text-primary transition-colors",
                  isMobile ? "w-full justify-between py-2" : "",
                  openSubMenu === item.name ? "text-primary font-medium" : ""
                )}
              >
                {item.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "ml-1 transition-transform",
                    openSubMenu === item.name ? "rotate-180" : ""
                  )}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {openSubMenu === item.name && (
                <div
                  className={cn(
                    "z-20 bg-white py-2",
                    isMobile
                      ? "mt-1 w-full border-l-2 border-primary pl-4"
                      : "absolute left-0 top-full mt-1 min-w-[200px] rounded-md border border-gray-200 shadow-lg"
                  )}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={item.href}
              className={cn(
                "text-gray-700 hover:text-primary transition-colors",
                isMobile ? "block py-2" : ""
              )}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
