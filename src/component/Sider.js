import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
// import { X } from "lucide-react";

export const Sider = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Search by Vehicle",
    "Search by Number Plate",
    "Brands",
    "Car Makers",
    "Contact Us",
    "Sell Your Car",
    "FAQ",
    "Discovery Points",
    "Boodmo API Solution",
    "Return Policy",
    "Disclaimer",
    "Terms of Use",
    "Sellers Policy",
    "Supplier Relations",
    "Anti-Corruption Policy",
    "Remove Account",
    "Become a Vendor",
    "Logout",
  ];

  return (
    <div className="flex justify-end mr-10 py-4">
      {/* Three Dots Button */}
      <button
        className="hover:text-blue-700 text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <IoReorderThreeOutline />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold text-gray-700">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-500"
          >
            {/* <X size={24} /> */}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col p-4 space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
