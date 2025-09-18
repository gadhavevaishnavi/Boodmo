import React, { useState } from 'react';
import { FaSearch, FaCar } from 'react-icons/fa';

// ✅ Search Section (Car selection form)
const SearchSection = () => {
  const [selectedMaker, setSelectedMaker] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [modifications, setModifications] = useState([]);

  const carData = {
    CHEVROLET: {
      AVEO: { 2022: ["Base", "Mid"], 2023: ["Top"] },
      BEAT: { 2022: ["Base", "LS"], 2023: ["LT", "Diesel"] },
    },
    HONDA: {
      City: { 2022: ["SV", "V"], 2023: ["VX", "ZX"] },
      Civic: { 2022: ["V", "VX"], 2023: ["ZX"] },
    },
    MARUTI: {
      Swift: { 2022: ["LXI", "VXI"], 2023: ["ZXI", "ZXI+"] },
      Alto: { 2022: ["Std", "LXI"], 2023: ["VXI+"] },
    }
  };

  const handleMakerChange = (e) => {
    const maker = e.target.value;
    setSelectedMaker(maker);
    setModels(maker ? Object.keys(carData[maker]) : []);
    setSelectedModel("");
    setSelectedYear("");
    setYears([]);
    setModifications([]);
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setSelectedModel(model);
    setYears(model ? Object.keys(carData[selectedMaker][model]) : []);
    setSelectedYear("");
    setModifications([]);
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setModifications(year ? carData[selectedMaker][selectedModel][year] : []);
  };

  return (
    <div className="text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Add new <span className="text-sky-500">Car</span>
      </h2>
      <h2 className="text-lg mb-4">Find your car by Number Plate:</h2>

      <div className="flex items-center border rounded-lg px-3 py-2 shadow-md mb-4">
        <span className="bg-gray-200 px-3 py-2 rounded-l">IND</span>
        <input
          type="text"
          placeholder="DL1AA2345"
          className="flex-1 px-3 py-2 outline-none text-gray-700"
        />
        <FaSearch className="text-gray-500 text-xl cursor-pointer" />
      </div>

      <p className="text-gray-500 my-4">OR</p>

      {/* Dropdowns */}
      <div className="flex flex-col gap-3 mb-4">
        {/* Maker */}
        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          value={selectedMaker}
          onChange={handleMakerChange}
        >
          <option value="">Select Car Maker</option>
          {Object.keys(carData).map((maker) => (
            <option key={maker} value={maker}>{maker}</option>
          ))}
        </select>

        {/* Model */}
        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          value={selectedModel}
          onChange={handleModelChange}
          disabled={!selectedMaker}
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>

        {/* Year */}
        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          value={selectedYear}
          onChange={handleYearChange}
          disabled={!selectedModel}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        {/* Modification */}
        <select
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
          disabled={!selectedYear}
        >
          <option value="">Select Modification</option>
          {modifications.map((mod) => (
            <option key={mod} value={mod}>{mod}</option>
          ))}
        </select>

        {/* VIN Input */}
        <input
          type="text"
          placeholder="Enter VIN"
          className="border px-4 py-2 rounded focus:ring-2 focus:ring-sky-500"
        />
      </div>

      {/* Save Button */}
      <button className="bg-sky-500 font-bold hover:bg-sky-600 text-white px-8 py-3 shadow rounded w-full">
        Save
      </button>
    </div>
  );
};


export const BoodmoUi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-sky-300 py-12 px-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col gap-4 w-full md:w-1/2">

        <div className="flex bg-white rounded-lg overflow-hidden shadow-md text-xl w-full">
          <input
            type="text"
            placeholder='Search: "Maruti Oil Filter"'
            className="flex-1 px-4 py-6 outline-none text-gray-700"
          />
          <button className="bg-blue-900 text-white px-5 py-5 ">
            <FaSearch />
          </button>
        </div>


        <button
          className="bg-blue-900 text-xl text-white flex items-center justify-center gap-3 px-5 py-5 rounded-lg shadow-md hover:bg-blue-700 transition w-1/2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaCar /> ADD CAR TO MY GARAGE
        </button>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] lg:w-[30%] shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
           
            <SearchSection />
          </div>
        </div>
      )}
    </section>
  );
};
