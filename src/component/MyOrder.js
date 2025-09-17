import React from 'react'
import { Navbar } from './Navbar'

export const MyOrder = () => {
  return (
    <div>
      {/* Page Header */}
         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-5 py-5 pb-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            My <span className="text-sky-500">Orders</span>
          </h1>
          <Navbar />
        </div>
      </div>
  
  )
}
