import React from 'react'
import { useNavigate } from 'react-router-dom';


export const Garage = () => {

  const navigate = useNavigate();
  const handleGarage = (e) => {
    e.preventDefault();
    navigate('/garage');
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 border-b pb-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          My <span className="text-sky-500">Garage</span>
        </h1>
        <div className="flex gap-6 text-gray-600 font-medium flex-wrap">
          <button className="hover:text-sky-600 "> My profile</button>
          <button className="hover:text-sky-600">My orders</button>
          <button className="hover:text-sky-600">My Wishlists</button>
          <button className="hover:text-sky-600">Addresses</button>
          <button className="hover:text-sky-600">Company/GST</button>
          <button className="hover:text-sky-600 text-sky-600 border-b-2 border-sky-600 pb-2">My garage</button>
          <button className="hover:text-sky-600">My documents</button>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-6">
        <h2 className="text-cyan-800 font-semibold text-3xl mb-4">No Cars Added</h2>
        <p className="text-gray-700 mb-6">
          Save your cars to My Garage and find spare parts for them in the catalogue with just one click!
        </p>
        <button className="bg-sky-500 hover:bg-sky-600 text-white rounded py-3 px-6 font-semibold">
          Add Cars Now
        </button>
      </div>


    </div>
  )
}
