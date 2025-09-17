import React from "react";
import { Navbar } from "./Navbar"; // adjust the path if needed

export const MyWishlist = () => {
  return (
    <div className="px-10 py-10">
      {/* Title + Navbar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My <span className="text-sky-500">Wishlist</span>
        </h1>
        <Navbar />
      </div>

      {/* Content (unchanged) */}
      <div className="flex flex-col justify-center items-center min-h-[60vh] text-center px-6">
        <h2 className="text-cyan-800 font-semibold text-2xl mb-4">
          Your Wishlist is Empty
        </h2>
        <p className="text-gray-700 mb-6">
          Save items to your wishlist and find them easily when you come back!
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white rounded py-3 px-6 font-semibold">
          Start Shopping
        </button>
      </div>
    </div>
  );
};
