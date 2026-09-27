import { useState } from "react";
import { Flame, Filter } from "lucide-react";

import { destinations } from "../data/destinations";
import { filterDestinations } from "../utils/filterDestinations";
import { PopularCard } from "../components/popular/PopularCard";

export const PopularPage = () => {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");
  const categories = ["All", ...new Set(destinations.map((item) => item.category))];
  const visibleDestinations = filterDestinations(destinations, { category, sortBy });
  const averageRating = (destinations.reduce((sum, item) => sum + item.rating, 0) / destinations.length).toFixed(1);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((previous) => previous.includes(id)
      ? previous.filter((item) => item !== id)
      : [...previous, id]);
  };

  return (
    <section className="min-h-screen px-4 sm:px-10 lg:px-16 pt-8">
      {/* Page Banner / Header */}
      <div className="bg-brand text-white rounded-3xl p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center space-x-2 bg-slate-800/80 w-max px-3 py-1 rounded-full text-xs text-yellow-400 font-semibold mb-3">
            <Flame className="w-4 h-4 fill-yellow-400" />
            <span>Traveler favorites</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Popular & Trending Spots
          </h1>

          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            Discover the highest-rated itineraries and crowd-favorite
            destinations across Nepal.
          </p>
        </div>

        <div className="relative z-10 mt-6 md:mt-0 flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <div className="text-center px-3">
            <span className="block text-xl font-bold text-white">
              {destinations.length}
            </span>

            <span className="text-[10px] text-slate-300 uppercase tracking-wider">
              Destinations
            </span>
          </div>

          <div className="h-8 w-px bg-white/20"></div>

          <div className="text-center px-3">
            <span className="block text-xl font-bold text-white">{averageRating} ★</span>
            <span className="text-[10px] text-slate-300 uppercase tracking-wider">
              Avg Rating
            </span>
          </div>
        </div>
      </div>

      {/* Filter Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={category === tab}
              onClick={() => setCategory(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                category === tab
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
          <Filter className="w-4 h-4" />

          <span>Sort by: </span>

          <select aria-label="Sort destinations" value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="bg-white border border-slate-200 rounded-full text-xs text-slate-800 font-semibold py-1.5 px-3 focus:outline-none">
            <option value="Popularity">Most reviewed</option>
            <option value="Rating">Highest rated</option>
            <option value="Price Low-High">Price: low to high</option>
            <option value="Price High-Low">Price: high to low</option>
          </select>
        </div>
      </div>

      {/* Popular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {visibleDestinations.map((item) => {
          const isFav = favorites.includes(item.id);

          return (
            <PopularCard
              key={item.id}
              bookingData={item}
              toggleFavorite={toggleFavorite}
              isFav={isFav}
            />
          );
        })}
      </div>
    </section>
  );
};
