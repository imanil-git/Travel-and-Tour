import React from "react";
import { DestinationCard } from "../../components/ui/DestinationCard";

export const DestinationGrid = ({ destinations }) => {
  if (destinations.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          No destination found
        </h3>

        <p className="mt-2 text-gray-500">Try selecting another category</p>
      </div>
    );
  }

  return (
    <div>
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};
