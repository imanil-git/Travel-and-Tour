import React, { useMemo, useState } from "react";
import { SectionTitle } from "../components/common/SectionTitle";
import { DestinationCard } from "../components/ui/DestinationCard";
import Pokhara from "../assets/destinations/Pokhara.jpg";
import Kathmandu from "../assets/destinations/Kathmandu.jpg";
import Mustang from "../assets/destinations/Mustang.jpg";
import Everest from "../assets/destinations/Everest.jpg";
import Chitwan from "../assets/destinations/Chitwan.jpg";
import Annapurna from "../assets/destinations/Annapurna.jpg";
import Lumbini from "../assets/destinations/Lumbini.jpg";
import { FaSlidersH, FaTimes } from "react-icons/fa";
import { DestinationFilter } from "../components/destionations/DestinationFilter";
import { booking } from "../data/bookingData";

export const Destination = () => {
  // Mobile drawer state
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    sortBy: "Popularity",
    category: "All",
    region: "All",
    activity: "All",
    maxPrice: 15000,
    minRating: 0,
  });

  const { sortBy, category, region, activity, maxPrice, minRating } = filters;

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const categories = useMemo(
    () => ["All", ...new Set(booking.map((d) => d.category))],
    [],
  );
  const regions = useMemo(
    () => ["All", ...new Set(booking.map((d) => d.region))],
    [],
  );

  const filteredDestinations = useMemo(() => {
    const result = booking.filter((destination) => {
      const matchesCategory =
        category === "All" || destination.category === category;

      const matchesRegion = region === "All" || destination.region === region;

      const matchesActivity =
        activity === "All" || destination.activities.includes(activity);

      const matchesPrice = destination.price <= maxPrice;

      const matchesRating = destination.rating >= minRating;

      return (
        matchesCategory &&
        matchesRegion &&
        matchesActivity &&
        matchesPrice &&
        matchesRating
      );
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "Price Low-High":
          return a.price - b.price;

        case "Price High-Low":
          return b.price - a.price;

        case "Rating":
          return b.rating - a.rating;

        case "Popularity":
        default:
          return b.reviews - a.reviews;
      }
    });
  }, [category, region, activity, maxPrice, minRating, sortBy]);

  const filterProps = {
    sortBy,
    setSortBy: (value) => updateFilter("sortBy", value),

    selectedCategory: category,
    setSelectedCategory: (value) => updateFilter("category", value),

    selectedRegion: region,
    setSelectedRegion: (value) => updateFilter("region", value),

    maxPrice,
    setMaxPrice: (value) => updateFilter("maxPrice", value),

    minRating,
    setMinRating: (value) => updateFilter("minRating", value),

    categories,
    regions,
  };

  return (
    <section className="py-6">
      <div className="w-full">
        {/* Section Header */}
        <SectionTitle
          title="Total Destinations"
          description="Find your own destination to choose your next journey and enjoy your journey with us"
          className="mb-6 text-slate-800 md:flex justify-between items-center"
        />

        {/* Mobile Filter Button */}
        <div className="mb-4 flex justify-end md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 rounded-full bg-[#28364c] px-4 py-2 text-sm font-semibold text-white shadow-md"
          >
            <FaSlidersH />
            <span>Filter & Sort</span>
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-8">
          {/* Desktop Filters */}
          <aside className="hidden h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2 md:block">
            <DestinationFilter {...filterProps} />
          </aside>

          {/* Destination Cards */}
          <div className="md:col-span-6">
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDestinations.map((destination) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white py-12 text-center">
                <p className="font-medium text-slate-500">
                  No destinations match your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm md:hidden">
          <div className="h-full w-4/5 max-w-xs overflow-y-auto bg-white p-6 shadow-2xl">
            <DestinationFilter
              {...filterProps}
              isMobile
              onClose={() => setIsFilterOpen(false)}
            />

            <button
              onClick={() => setIsFilterOpen(false)}
              className="mt-6 w-full rounded-full bg-[#28364c] py-3 text-sm font-semibold text-white"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
