import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaCar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";

export const Header = () => {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== "MY ACCOUNT") {
      navigate(value);
    }
  };

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

     
          <div className="flex items-center gap-1">
            <MdAccountCircle className="text-blue-600" />
            <select 
              onChange={handleSelectChange} 
              className="font-bold px-4 py-2 focus:ring-2 focus:ring-sky-500"
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

          {/* Icons */}
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
  );
};
