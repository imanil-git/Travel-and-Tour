import React from "react";
import { FaSearch } from "react-icons/fa";

export const HeroSearch = () => {
  return (
    <div className="mt-12 bg-white rounded-xl shadow-xl p-5">
      <div className="grid md:grid-cols-4 gap-5">
        <input
          type="text"
          placeholder="Destination"
          className="border rounded-lg p-3"
        />
        <input type="date" className="border rounded-lg p-3" />
        <input type="date" className="border rounded-lg p-3" />
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};
