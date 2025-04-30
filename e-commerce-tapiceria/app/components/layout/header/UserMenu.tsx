import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import { useCart } from "../../../hooks/useCart";
import { useFavorites } from "../../../hooks/useFavorites";
import { Button } from "../../ui/button";
import { Avatar } from "../../ui/avatar";

const UserMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const { cartItems } = useCart();
  const { favorites } = useFavorites();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="flex items-center space-x-4">
      {/* Favorites button */}
      <Link
        to="/favorites"
        className="relative p-2 text-gray-600 hover:text-primary"
      >
        <span className="sr-only">Favorites</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {favorites.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {favorites.length > 9 ? "9+" : favorites.length}
          </span>
        )}
      </Link>

      {/* Cart button */}
      <Link
        to="/cart"
        className="relative p-2 text-gray-600 hover:text-primary"
      >
        <span className="sr-only">Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.length > 9 ? "9+" : cartItems.length}
          </span>
        )}
      </Link>

      {/* User profile menu */}
      <div className="relative" ref={menuRef}>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
        >
          {user ? (
            <Avatar className="h-8 w-8">
              <span className="sr-only">{user.name}</span>
              {user.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-primary text-white text-sm font-medium uppercase">
                  {user.name.charAt(0)}
                </span>
              )}
            </Avatar>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          )}
        </Button>

        {isMenuOpen && (
          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {user ? (
              <>
                <div className="px-4 py-3">
                  <p className="text-sm">Signed in as</p>
                  <p className="truncate text-sm font-medium text-gray-900">
                    {user.email}
                  </p>
                </div>
                <hr className="border-gray-200" />
                <Link
                  to="/user/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Your Profile
                </Link>
                <Link
                  to="/user/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Orders
                </Link>
                <Link
                  to="/user/addresses"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Addresses
                </Link>
                <Link
                  to="/user/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <hr className="border-gray-200" />
                <button
                  type="button"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  to="/auth/register"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create account
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
