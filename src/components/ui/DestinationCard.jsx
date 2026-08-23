import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

export const DestinationCard = ({ destination }) => {
  return (
    <div className="group relative overflow-hidden rounded-4xl h-96 w-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-medium bg-[#28364c] text-white/90">
          {destination.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 text-sm text-white">
          <FaStar className="text-yellow-400" />
          {destination.rating}
        </div>

        {/* Content */}
        <div className="absolute left-4 bottom-0 text-white">
          <h3 className="text-xl font-bold">{destination.name}</h3>

          <div className="mb-2 flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-red-500" />
            {destination.location}
          </div>
        </div>
      </div>
    </div>
  );
};
