import React from "react";
import { FaSearch } from 'react-icons/fa'

const SearchSection = () => {
    return (
        <section className="px-6 py-12 bg-gray-50">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                    Search by <span className="text-sky-500">Vehicle</span>
                </h2>


                <div className="flex items-center space-x-2 ">
                    <input
                        type="text"
                        placeholder="Search by number plate..."
                        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-4 rounded-lg shadow">
                        <FaSearch />
                    </button>
                </div>

            </div>


            <div className="flex flex-col md:flex-row items-center gap-4 bg-blue-900 p-4 rounded-lg shadow-md">
                <select className="border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Car Maker</option>
                </select>

                <select className="border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Model Line</option>
                </select>

                <select className="border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Year</option>
                </select>

                <select className="border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Modification</option>
                </select>

                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 shadow">
                    Search Parts
                </button>
            </div>


            <div >
                <h2 className="text-4xl font-bold text-gray-800 mb-6 ">
                    Search by <span className="text-sky-500">Category</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <p className="font-medium text-gray-700">Car Service</p>
                    </div>


                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <p className="font-medium text-gray-700">Filters</p>
                    </div>


                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <p className="font-medium text-gray-700">Windshield</p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <p className="font-medium text-gray-700">Headlights</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-white hover:bg-green-50 text-black px-8 py-3 rounded-lg shadow font-bold border-2 border-black">
                    Load More
                </button>
            </div>

            <div className="mt-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-left">
                    Why Choose <span className="text-sky-500">Aftermarket Products</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Original Product</h3>
                        <p className="text-gray-600">High-quality aftermarket parts designed to meet OEM standards.</p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Rate</h3>
                        <p className="text-gray-600">Get the best value without compromising on quality.</p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Variety</h3>
                        <p className="text-gray-600">Choose from a large selection of parts for all vehicle types.</p>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default SearchSection;
