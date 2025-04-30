import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  X,
  Menu,
  Home,
  ShoppingBag,
  Heart,
  User,
  Info,
  Phone,
  FileText,
  Tool,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Products", path: "/products", icon: <ShoppingBag size={20} /> },
  { name: "Favorites", path: "/favorites", icon: <Heart size={20} /> },
  { name: "My Account", path: "/user/profile", icon: <User size={20} /> },
  { name: "About Us", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
  { name: "Tools", path: "/tools", icon: <Tool size={20} /> },
  { name: "Blog", path: "/blog", icon: <FileText size={20} /> },
];

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useOutsideClick(menuRef, () => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    // Close menu when route changes
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Don't render on desktop
  if (!isMobile) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
        <div ref={menuRef} className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h2 className="font-semibold text-lg">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </Button>
          </div>

          <nav className="flex-grow overflow-y-auto">
            <ul className="py-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Button
                    variant={
                      router.pathname === item.path ? "secondary" : "ghost"
                    }
                    className={`w-full justify-start px-4 py-3 mb-1 ${
                      router.pathname === item.path ? "bg-slate-100" : ""
                    }`}
                    onClick={() => {
                      router.push(item.path);
                      setIsOpen(false);
                    }}
                  >
                    <span className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t p-4">
            <div className="flex flex-col space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  router.push("/auth/login");
                  setIsOpen(false);
                }}
              >
                Log In
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  router.push("/auth/register");
                  setIsOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
