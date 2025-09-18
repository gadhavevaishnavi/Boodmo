import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaCar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import logo from "./logo.png";



export const Header = () => {
  const navigate = useNavigate();

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

  const goToHomePage  = () => {
    navigate("/")
  }

  return (
    <div className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <img onClick={goToHomePage} src={logo} alt="Boodmo Logo"
          className="h-[80px] w-[160px]" />
        <div className="flex items-center gap-6 text-gray-700 font-medium">

          <Link to="/garage" className="hover:text-gray-700 text-blue-950 flex items-center font-bold gap-1">
            <FaCar className="text-blue-900" /> MY GARAGE
          </Link>

          <div className="flex items-center gap-1">
            <MdAccountCircle className="text-blue-600 text-xl" />
            <select
              onChange={handleSelectChange}
              className="font-bold text-sm px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            <FaHeart className="text-blue-600 text-xl" />
          </button>

          <button onClick={goToCart} className="hover:text-blue-700 hover:scale-110">
            <FaShoppingCart className="text-blue-600 text-xl" />
          </button>

          <button className="hover:text-blue-700 text-2xl hover:scale-110">
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>
    </div>
  );
};
