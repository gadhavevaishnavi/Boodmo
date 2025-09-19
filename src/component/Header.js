import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaCar, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import logo from "./logo.png";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== "MY ACCOUNT") {
      navigate(value);
    }
  };

  const goToWishlist = () => {
    navigate("/mywishlist");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const goToHomePage = () => {
    navigate("/");
  };

  const isHomePage = location.pathname === "/"; // ✅ check if on home

  // Sidebar menu items
  const menuItems = [
    "Search by Vehicle ",
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
    <div className="w-full bg-white shadow-md px-6 py-4 relative">
      <div className="flex justify-between items-center">

        {/* Left: Logo + Search */}
        <div className="flex items-center gap-6">
          <img
            onClick={goToHomePage}
            src={logo}
            alt="Boodmo Logo"
            className="h-[70px] w-[150px] cursor-pointer"
          />

          {/* ✅ Show search bar only when NOT on home */}
          {!isHomePage && (
            <div className="flex bg-gray-100 rounded-lg overflow-hidden shadow-sm text-sm w-[450px] md:w-[600px]">
              <input
                type="text"
                placeholder='Search: "Maruti Alto Oil Filter"'
                className="flex-1 px-4 py-3 md:py-3 text-gray-700 text-base md:text-lg outline-none"
              />
              <button className="bg-sky-500 text-white px-5 flex items-center justify-center">
                <FaSearch className="text-lg md:text-xl" />
              </button>
            </div>
          )}
        </div>


        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link
            to="/garage"
            className="hover:text-gray-700 text-blue-950 flex items-center font-bold gap-1"
          >
            <FaCar className="text-sky-500" /> MY GARAGE
          </Link>

          <div className="flex items-center gap-1">
            <MdAccountCircle className="text-sky-500 text-xl" />
            <select
              onChange={handleSelectChange}
              className="font-bold text-sm px-3 py-1 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="MY ACCOUNT">MY ACCOUNT</option>
              <option value="/myprofile">My Profile</option>
              <option value="/myorder">My Order</option>
              <option value="/document">Document</option>
              <option value="/company_gst">Company/GST</option>
              <option value="/addresses">Addresses</option>
              <option value="/mywishlist">My Wishlist</option>
            </select>
          </div>

          <button onClick={goToWishlist} className="hover:text-blue-700 hover:scale-110">
            <FaHeart className="text-blue-900 text-xl" />
          </button>

          <button onClick={goToCart} className="hover:text-blue-700 hover:scale-110">
            <FaShoppingCart className="text-blue-900 text-xl" />
          </button>

          {/* Three dots button opens sidebar */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hover:text-blue-700 text-2xl hover:scale-110"
          >
            <IoReorderThreeOutline className="text-blue-900" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-bold text-gray-700">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-600 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Sidebar menu items */}
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
