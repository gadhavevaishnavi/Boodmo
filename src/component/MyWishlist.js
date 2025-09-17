import React from 'react'

export const MyWishlist = () => {
  return (
   <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          My <span className="text-sky-500">Wishlist</span>
        </h1>
        <div className="flex gap-6 text-gray-600 font-medium flex-wrap">
          <button className="hover:text-sky-600 ">My Profile</button>
          <button className="hover:text-sky-600">My orders</button>
          <button className="hover:text-sky-600 border-b-2 text-sky-600 border-sky-600 pb-2">My Wishlists</button>
          <button className="hover:text-sky-600">Addresses</button>
          <button className="hover:text-sky-600">Company/GST</button>
          <button className="hover:text-sky-600 ">My garage</button>
          <button className="hover:text-sky-600">My documents</button>
        </div>

      </div>
      </div>
  )
}
 