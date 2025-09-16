import React from 'react'
import {FaSearch , FaCar} from 'react-icons/fa'


export const BoodmoUi = () => {
  return (
    <section className="bg-sky-300 py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Search Box */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="flex bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="text"
              placeholder='Search: "Maruti Oil Filter"'
              className="flex-1 px-4 py-6 outline-none text-gray-700"
            />
            <button className="bg-blue-900 text-white px-5 py-5 ">
              <FaSearch />
            </button>
          </div>
          <button className="bg-blue-900 text-white flex items-center justify-center gap-3 px-5 py-5 rounded-lg shadow-md hover:bg-blue-700 transition">
            <FaCar /> ADD CAR TO MY GARAGE
          </button>
        </div>

      
      </section>
  )
}
