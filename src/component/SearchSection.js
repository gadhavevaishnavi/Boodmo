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
                <select className="border font-bold border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option class="font-bold">Select Car Maker</option>
                    <option >FIAT</option>
                    <option >FORD</option>
                    <option>HONDA</option>
                    <option>HYUNDAI</option>
                    <option >KIA</option>
                    <option >MAHINDRA</option>
                     <option >MARUTI</option>
                    <option >NISSAN</option>
                    <option >RENAULT</option>
                    <option >SKODA</option>
                    <option >TATA</option>
                    <option >TOYOTA</option>
                    <option >VW</option>

                </select>

                <select className="border font-bold border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Model Line</option>
                </select>

                <select className="border font-bold border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Year</option>
                </select>

                <select className="border font-bold border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500">
                    <option>Select Modification</option>
                </select>

                <button className="bg-sky-500 font-bold hover:bg-sky-600 text-white px-6 py-2 shadow">
                    Search Parts
                </button>
            </div>


            <div class="py-10" >
                <h2 className="text-4xl font-bold text-gray-800 mb-6 ">
                    Search by <span className="text-sky-500">Category</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <img src="https://boodmo.com/media/images/categories/ebba234.svg" />
                        <p className="font-medium text-gray-700">Maintainance Service parts</p>
                    </div>


                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <img src="https://boodmo.com/media/images/categories/fab8332.svg" />
                        <p className="font-medium text-gray-700">Filters</p>
                    </div>


                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <img src="https://boodmo.com/media/images/categories/d36974e.svg" />
                        <p className="font-medium text-gray-700">Windscreen Ceaning System</p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <img src="https://boodmo.com/media/images/categories/4372565.svg" />
                        <p className="font-medium text-gray-700">Headlights</p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <img src="https://boodmo.com/media/images/categories/c009512.svg" />
                        <p className="font-medium text-gray-700">Lighting</p>
                    </div>

                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-white hover:bg-green-50 text-black px-8 py-3 rounded-lg shadow font-bold border-2 border-gray-500">
                    Load More
                </button>
            </div>

            <div className="mt-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-left">
                    Why Choose <span className="text-sky-500">Aftermarket Products</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-9 text-center">
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <img src="" />

                        <h3 className="text-2xl text-left font-semibold text-blue-950 mb-2 ">Original Product</h3>
                        <p className="text-gray-600">Only reliable parts from trusted Aftermarket brands
                        </p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <img src=" " />
                        <h3 className="text-2xl font-semibold text-blue-950 mb-2 text-left">Affordable Rate</h3>
                        <p className="text-gray-600">Repairing a damaged vehicle can be expensive. Using the aftermarket products is a good solution if you're on a budget</p>
                    </div>

                    <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-2xl text-left font-semibold text-blue-950 mb-2">Wide Variety</h3>
                        <p className="text-gray-600">We have something for everyone when it comes to aftermarket products. Just apply the "Aftermarket" filter in the catalogue and check the offers</p>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default SearchSection;
