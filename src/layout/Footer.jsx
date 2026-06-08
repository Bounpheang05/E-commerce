import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 border-t border-gray-200 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h1 className="text-xl font-semibold mb-3">ModernShop</h1>
            <p className="text-sm leading-7 text-gray-600">
              High-end minimalism for the digital age. Curating the world's most
              refined essentials for work, home, and travel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3">
                Shop
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>All products</li>
                <li>Collections</li>
                <li>New Arrivals</li>
                <li>Best Sellers</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3">
                Support
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Shipping & Returns</li>
                <li>Sustainability</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="sm:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-3">
                Follow
              </h2>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-800">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-800">
                  Twitter
                </a>
                <a href="#" className="hover:text-gray-800">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
