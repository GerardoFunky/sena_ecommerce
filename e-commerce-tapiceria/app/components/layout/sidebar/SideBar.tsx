import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../ui/button";
import { useUser } from "../../../hooks/useUser";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useUser();
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const sidebarNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/user",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      title: "My Profile",
      href: "/user/profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "My Orders",
      href: "/user/orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      title: "Addresses",
      href: "/user/addresses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      title: "Saved Items",
      href: "/favorites",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      title: "Settings",
      href: "/user/settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Product Categories",
      href: "/products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="6" height="6" x="3" y="3" rx="1" />
          <rect width="6" height="6" x="15" y="3" rx="1" />
          <rect width="6" height="6" x="3" y="15" rx="1" />
          <rect width="6" height="6" x="15" y="15" rx="1" />
        </svg>
      ),
      children: [
        {
          title: "Chairs",
          href: "/products/category/chairs",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Sofas",
          href: "/products/category/sofas",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Tables",
          href: "/products/category/tables",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Beds",
          href: "/products/category/beds",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Ottomans",
          href: "/products/category/ottomans",
          icon: <span className="ml-2">•</span>,
        },
      ],
    },
    {
      title: "Materials",
      href: "/materials",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 2v6m0 0H15m6 0-6-6" />
          <path d="M3 12v6m0 0h6m-6 0 6-6" />
          <path d="M12 7v6m0 0h6m-6 0 6-6" />
        </svg>
      ),
      children: [
        {
          title: "Leather",
          href: "/materials/leather",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Fabric",
          href: "/materials/fabric",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Velvet",
          href: "/materials/velvet",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Synthetic",
          href: "/materials/synthetic",
          icon: <span className="ml-2">•</span>,
        },
      ],
    },
    {
      title: "Design Tools",
      href: "/tools",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      children: [
        {
          title: "Size Calculator",
          href: "/tools/size-calculator",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Material Guide",
          href: "/tools/material-guide",
          icon: <span className="ml-2">•</span>,
        },
        {
          title: "Room Visualizer",
          href: "/tools/room-visualizer",
          icon: <span className="ml-2">•</span>,
        },
      ],
    },
  ];

  // If no user is logged in, filter out user-specific sections
  const filteredNavItems = user
    ? sidebarNavItems
    : sidebarNavItems.filter(
        (item) =>
          ![
            "Dashboard",
            "My Profile",
            "My Orders",
            "Addresses",
            "Settings",
          ].includes(item.title)
      );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Navigation</h2>
        <nav className="space-y-1">
          {filteredNavItems.map((item) => (
            <div key={item.title} className="mb-1">
              {item.children ? (
                <>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start py-2 px-3 text-left ${
                      isActive(item.href)
                        ? "bg-gray-100 text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => toggleExpand(item.title)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.title}</span>
                      </div>
                      <span>
                        {expandedItems.includes(item.title) ? (
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
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                        ) : (
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
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </Button>
                  {expandedItems.includes(item.title) && (
                    <div className="pl-2 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className={`flex items-center py-2 px-4 text-sm rounded-md ${
                            isActive(child.href)
                              ? "bg-gray-100 text-primary font-medium"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span className="mr-2">{child.icon}</span>
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center py-2 px-3 rounded-md ${
                    isActive(item.href)
                      ? "bg-gray-100 text-primary font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Help section at bottom */}
      <div className="p-4 mt-6 bg-gray-50 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Need Help?</h3>
        <Link
          to="/contact"
          className="flex items-center text-sm text-primary hover:underline"
        >
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
            className="mr-2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Contact Support
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
