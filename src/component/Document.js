import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Document = () => {
    const navigate = useNavigate();

    const handleDocument = (e) => {
      e.preventDefault();
      navigate('/document'); 
    }

  return (
   <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
         <span className="text-sky-500">Documents</span>
        </h1>
        <div className="flex gap-6 text-gray-600 font-medium flex-wrap">
          <button className="hover:text-sky-600"> My profile</button>
          <button className="hover:text-sky-600">My orders</button>
          <button className="hover:text-sky-600">My Wishlists</button>
          <button className="hover:text-sky-600">Addresses</button>
          <button className="hover:text-sky-600">Company/GST</button>
          <button className="hover:text-sky-600 ">My garage</button>
          <button className="hover:text-sky-600 text-sky-600 border-b-2 border-sky-600 pb-2">My documents</button>
        </div>

      </div>

    </div>
  )
}
