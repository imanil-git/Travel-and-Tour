import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DestinationCard = ({ destination }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white mb-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-100 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-blue-600">
          {destination.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
          <FaStar className="text-yellow-400" />
          {destination.rating}
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <FaMapMarkerAlt className="text-blue-500" />
          {destination.location}
        </div>

        <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>

        <p className="mt-2 line-clamp-2 text-gray-600">
          {destination.description}
        </p>

        <Link
          to={`/destination/${destination.id}`}
          className="mt-5 inline-block font-semibold text-blue-600 transition hover:text-blue-800"
        >
          Explore Destination -
        </Link>
      </div>
    </div>
  );
};
