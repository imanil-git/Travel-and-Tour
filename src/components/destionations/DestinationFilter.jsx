import React from "react";
import { FaTimes } from "react-icons/fa";

export const DestinationFilter = ({
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  categories,
  regions,
  isMobile = false,
  onClose,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2">
        <h3 className="text-lg font-bold text-slate-800">Filters</h3>

        {isMobile && (
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800"
            aria-label="Close filters"
          >
            <FaTimes className="text-xl" />
          </button>
        )}
      </div>

      {/* Sort */}
      <div>
        <label className="mb-2 block text-xl font-extrabold text-[#28364c]">
          Sort By
        </label>

        <div className="space-y-1 text-sm text-slate-700">
          {[
            "Popularity",
            "Price Low-High",
            "Price High-Low",
            "Rating",
          ].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="sortBy"
                value={option}
                checked={sortBy === option}
                onChange={(e) => setSortBy(e.target.value)}
                className="accent-[#28364c]"
              />

              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block text-xl font-extrabold text-[#28364c]">
          Destination Type
        </label>

        <div className="space-y-1 text-sm text-slate-700">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="accent-[#28364c]"
              />

              {category === "All" ? "All Types" : category}
            </label>
          ))}
        </div>
      </div>

      {/* Region */}
      <div>
        <label className="mb-2 block text-xl font-extrabold text-[#28364c]">
          Region
        </label>

        <div className="space-y-1 text-sm text-slate-700">
          {regions.map((region) => (
            <label
              key={region}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="region"
                value={region}
                checked={selectedRegion === region}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="accent-[#28364c]"
              />

              {region === "All" ? "All Regions" : region}
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <div className="mb-2 flex justify-between text-xl font-extrabold text-[#28364c]">
          <span>Price Range</span>

          <span className="text-[#28364c]">
            NPR {maxPrice.toLocaleString()}
          </span>
        </div>

        <input
          type="range"
          min="3000"
          max="15000"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full cursor-pointer accent-[#28364c]"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="mb-2 block text-xl font-extrabold text-[#28364c]">
          Rating
        </label>

        <div className="space-y-1 text-sm text-slate-700">
          {[4.9, 4.8, 4.7].map((rating) => (
            <label
              key={rating}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={minRating === rating}
                onChange={() => setMinRating(rating)}
                className="accent-[#28364c]"
              />

              ★ {rating} & above
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};