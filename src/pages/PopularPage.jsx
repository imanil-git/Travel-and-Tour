import { useState } from "react";
import { Flame, Filter } from "lucide-react";

import { booking } from "../data/bookingData";
import { PopularCard } from "../components/popular/PopularCard";

export const PopularPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="min-h-screen px-4 sm:px-10 lg:px-16 pt-8">
      {/* Page Banner / Header */}
      <div className="bg-[#28364c] text-white rounded-3xl p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center space-x-2 bg-slate-800/80 w-max px-3 py-1 rounded-full text-xs text-yellow-400 font-semibold mb-3">
            <Flame className="w-4 h-4 fill-yellow-400" />
            <span>Most Traveled Destinations 2026</span>
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
              {booking.length}+
            </span>

            <span className="text-[10px] text-slate-300 uppercase tracking-wider">
              Destinations
            </span>
          </div>

          <div className="h-8 w-px bg-white/20"></div>

          <div className="text-center px-3">
            Heart,
            <span className="block text-xl font-bold text-white">4.9 ★</span>
            <span className="text-[10px] text-slate-300 uppercase tracking-wider">
              Avg Rating
            </span>
          </div>
        </div>
      </div>

      {/* Filter Navigation Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {[
            "All",
            " This Month",
            "Beach & Surf",
            "Highland Escape",
            "Heritage",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === tab
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

          <select className="bg-white border border-slate-200 rounded-full text-xs text-slate-800 font-semibold py-1.5 px-3 focus:outline-none">
            <option>Most Booked</option>
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>

      {/* Popular Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {booking.map((item) => {
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
