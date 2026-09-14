import {
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Star,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export const PopularCard = ({ bookingData, toggleFavorite, isFav }) => {
  return (
    <article
      key={bookingData.id}
      className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
    >
      <div>
        {/* Card Image Container */}
        <div className="relative h-56 bg-slate-900 overflow-hidden">
          <img
                loading="lazy"
                decoding="async"
            src={bookingData.image}
            alt={bookingData.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="bg-[#28364c] backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
              {bookingData.category}
            </span>

            <button
              type="button"
              aria-label={`Save ${bookingData.name}`}
              aria-pressed={isFav}
              onClick={() => toggleFavorite(bookingData.id)}
              className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-white transition-all shadow-sm"
            >
              <Heart
                className={`w-4 h-4 ${
                  isFav ? "fill-red-500 text-red-500" : "text-slate-700"
                }`}
              />
            </button>
          </div>

          {/* Bottom Image Overlay Details */}
          <div className="absolute bottom-3 left-4 right-4 z-10 text-white flex items-center justify-between">
            <div className="flex items-center space-x-1 text-xs">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

              <span className="font-bold">{bookingData.rating}</span>

              <span className="text-slate-300">({bookingData.reviews})</span>
            </div>

            <div className="flex items-center space-x-1 text-[11px] text-slate-300">
              <Clock className="w-3 h-3" />

              <span>{bookingData.duration}</span>
            </div>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5">
          <div className="flex items-center text-slate-400 text-xs mb-1">
            <MapPin className="w-3.5 h-3.5 mr-1 shrink-0" />

            <span>{bookingData.location}</span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-snug">
            {bookingData.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {bookingData.activities.map((activity, index) => (
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

            <span>{bookingData.reviews}+ travelers reviewed</span>
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
            Rs. {bookingData.price.toLocaleString()}
          </span>
        </div>

        <Link to={`/booking/${bookingData.slug}`} className="bg-[#28364c] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-800 transition-all flex items-center space-x-1">
          <span>View Tour</span>

          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
