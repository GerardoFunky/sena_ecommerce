import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

interface FooterLink {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const footerLinks: FooterLink[] = [
  {
    title: "Products",
    links: [
      { label: "Chairs", href: "/products/category/chairs" },
      { label: "Sofas", href: "/products/category/sofas" },
      { label: "Tables", href: "/products/category/tables" },
      { label: "Beds", href: "/products/category/beds" },
      { label: "Ottomans", href: "/products/category/ottomans" },
    ],
  },
  {
    title: "Materials",
    links: [
      { label: "Leather", href: "/materials/leather" },
      { label: "Fabric", href: "/materials/fabric" },
      { label: "Velvet", href: "/materials/velvet" },
      { label: "Synthetic", href: "/materials/synthetic" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/policy/returns" },
      { label: "Order Tracking", href: "/order-tracking" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/policy/privacy" },
      { label: "Terms of Service", href: "/policy/terms" },
    ],
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with newsletter and social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest trends, exclusive offers, and
              upholstery tips.
            </p>
            <Newsletter />
          </div>
          <div className="md:flex md:flex-col md:items-end">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connect With Us
            </h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media for inspiration, updates, and more.
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-200">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-gray-900 mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and logo */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Tapicería</span>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            <p>&copy; {currentYear} Tapicería. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            <Link
              to="/policy/privacy"
              className="hover:text-primary transition-colors mr-4"
            >
              Privacy Policy
            </Link>
            <Link
              to="/policy/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
