import React from 'react'
import { Link } from "react-router-dom";
import { FaCar, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">

        <img
          src=""
          alt="Boodmo Logo"
          className="h-8 md:h-10"
        />

        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/garage" className="hover:text-blue-700 flex items-center font-bold gap-1">
            <FaCar className="text-blue-600" /> MY GARAGE
          </Link>

          <a href="#" className="hover:text-blue-700 flex items-center gap-1">
            <MdAccountCircle className="text-blue-600" />
            <select className="font-bold px-4 py-2 focus:ring-2 focus:ring-sky-500">
              <option value="MY ACCOUNT">MY ACCOUNT</option>
              <option value="My Profile"> My Profile</option>
              <option value="My Order">My Order</option>
              <option value="Document">Document</option>
              <option value="Company/GST">Company/GST</option>
              <option value="Adderesses">Adderesses</option>
              <option value="My Wishlist">My Wishlist</option>
            </select>

          </a>

          <button className="hover:text-blue-700">
            <FaHeart className="text-blue-600" />
          </button>
          <button className="hover:text-blue-700">
            <FaShoppingCart className="text-blue-600" />
          </button>
          <button className="hover:text-blue-700 text-2xl">
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>
    </div>
  )
}
