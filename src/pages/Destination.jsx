import { useState } from "react";
import { DestinationHero } from "../sections/destination/DestinationHero";
import { DestinationFilters } from "../sections/destination/DestinationFilters";
import { DestinationGrid } from "../sections/destination/DestinationGrid";

import { destinations } from "../data/destination.js";

export const Destination = () => {
  const [filterdDestinations, setFilteredDestinations] = useState(destinations);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredDestinations(destinations);
      return;
    }

    const filtered = destinations.filter(
      (destination) => destination.category === category,
    );

    setFilteredDestinations(filtered);
  };
  return (
    <div className="bg-gray-50">
      <DestinationHero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-blue-300">
            Find Your place
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Destinations
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore some of the most beautiful and exciting destinations Nepal
            has to offer.
          </p>
        </div>

        <DestinationFilters onFilter={handleFilter} />

        <DestinationGrid destinations={filterdDestinations} />
      </section>
    </div>
  );
};
