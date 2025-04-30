import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { Button } from "../../ui/button";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Tapicería</span>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="ml-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </Button>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 mx-8">
            <Search />
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            <UserMenu />
          </div>
        </div>

        {/* Mobile Navigation - Shown when menu is open */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden mt-4`}
        >
          <div className="mb-4">
            <Search />
          </div>
          <Navigation isMobile={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
