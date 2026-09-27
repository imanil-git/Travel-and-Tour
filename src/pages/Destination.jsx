import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { SectionTitle } from "../components/common/SectionTitle";
import { DestinationCard } from "../components/ui/DestinationCard";
import { FaSlidersH } from "react-icons/fa";
import { DestinationFilter } from "../components/destinations/DestinationFilter";
import { filterDestinations } from "../utils/filterDestinations";
import { FilterDrawer } from "../components/destinations/FilterDrawer";
import { destinations } from "../data/destinations";

export const Destination = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();
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

  const { sortBy, category, region, maxPrice, minRating } = filters;

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const categories = ["All", ...new Set(destinations.map((item) => item.category))];
  const regions = ["All", ...new Set(destinations.map((item) => item.region))];
  const filteredDestinations = filterDestinations(destinations, { ...filters, query });

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
          as="h1"
          title="Destinations"
          description="Find your own destination to choose your next journey and enjoy your journey with us"
          className="mb-6 text-slate-800 md:flex justify-between items-center"
        />

        {/* Mobile Filter Button */}
        <div className="mb-4 flex justify-end md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md"
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

      <FilterDrawer open={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
        <DestinationFilter {...filterProps} isMobile onClose={() => setIsFilterOpen(false)} />
        <button type="button" onClick={() => setIsFilterOpen(false)}
          className="mt-6 w-full rounded-full bg-brand py-3 text-sm font-semibold text-white">
          Apply Filters
        </button>
      </FilterDrawer>
    </section>
  );
};
