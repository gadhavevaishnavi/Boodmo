import React, { useState } from "react";

export const Company_GST = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="px-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-10 py-10 pb-3">
        <h1 className="text-3xl font-semibold text-blue-950 mb-4 md:mb-0">
          Company <span className="text-sky-500">/GST</span>
        </h1>
        <div className="flex gap-6 text-gray-600 font-medium flex-wrap">
          <button className="hover:text-sky-600"> My profile</button>
          <button className="hover:text-sky-600">My orders</button>
          <button className="hover:text-sky-600">My Wishlists</button>
          <button className="hover:text-sky-600 "> Addresses </button>
          <button className="hover:text-sky-600  text-sky-600 border-b-2 border-sky-600 pb-2">Company/GST</button>
          <button className="hover:text-sky-600 ">My garage</button>
          <button className="hover:text-sky-600">My documents</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">
        Billing information
      </h2>

      {/* Form */}
      <form className="space-y-8 max-w-2xl">
        {/* Company + Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company name"
            className="border rounded px-6 py-3 w-full focus:ring-2"
          />
          <div className="flex gap-2">
            <span className="flex items-center border rounded px-6 py-3 bg-gray-100">
              +91
            </span>
            <input
              type="text"
              placeholder="Mobile"
              className="border rounded px-6 py-3 w-full focus:ring-2"
            />
          </div>
        </div>

        {/* GST Number */}
        <div>
          <input
            type="text"
            placeholder="GST number"
            className="border rounded px-6 py-3 w-full focus:ring-2"
          />
          <label className="flex items-center gap-2 mt-2 text-gray-600">
            <input type="checkbox" className="h-4 w-4" />
            My company is not GST registered
          </label>
        </div>

        {/* Address */}
        <div>
          <textarea
            placeholder="Address"
            maxLength={110}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded px-4 py-3 w-full min-h-[100px] resize focus:ring-2 focus:ring-sky-500"
          />
          <p className="text-xs text-gray-500 text-right">
            {address.length}/110
          </p>
        </div>

        {/* Pincode + Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Pincode"
            className="border rounded px-6 py-3 w-full focus:ring-2"
          />
          <input
            type="text"
            value="India"
            readOnly
            className="border rounded px-6 py-3 w-full bg-gray-100"
          />
        </div>

        {/* Address Title */}
        <input
          type="text"
          placeholder="Address Title (Optional)"
          className="border rounded px-6 py-3 w-full focus:ring-2 focus:ring-sky-500"
        />

        {/* Save Button */}
        <button
          type="submit"
          className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  );
};
