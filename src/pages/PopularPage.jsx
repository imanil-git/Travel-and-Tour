import React, { useState } from "react";
import {
  MapPin,
  Star,
  TrendingUp,
  Flame,
  Clock,
  ChevronRight,
  Heart,
  Filter,
} from "lucide-react";

import { booking } from "../data/bookingData";

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
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-16">
      {/* Main Page Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Page Banner / Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {booking.map((item) => {
            const isFav = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative h-56 bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                        {item.category}
                      </span>

                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white transition-all shadow-sm"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isFav
                              ? "fill-red-500 text-red-500"
                              : "text-slate-700"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 text-white flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

                        <span className="font-bold">{item.rating}</span>

                        <span className="text-slate-300">({item.reviews})</span>
                      </div>

                      <div className="flex items-center space-x-1 text-[11px] text-slate-300">
                        <Clock className="w-3 h-3" />

                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5">
                    <div className="flex items-center text-slate-400 text-xs mb-1">
                      <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />

                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.activities.map((activity, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>

                    {/* Trending Stat Bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] text-slate-500 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-slate-800 mr-1.5" />

                      <span>{item.reviews}+ travelers reviewed</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-50">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase">
                      Starts at
                    </span>

                    <span className="text-lg font-black text-slate-900">
                      ₱{item.price.toLocaleString()}
                    </span>
                  </div>

                  <button className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-800 transition-all flex items-center space-x-1">
                    <span>View Tour</span>

                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
