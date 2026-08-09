import { useState } from "react";

export const DestinationFilters = ({ onFilter }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Adventure",
    "Nature",
    "Culture",
    "Trekking",
    "Wildfire",
  ];

  const handleFilter = (category) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilter(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
            activeCategory === category
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
