import { Calendar, Minus, Plus } from "lucide-react";
import { useBookingStore } from "../../store/useBookingStore";

export const GuestCounter = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-slate-700" />
        Select Trip Options
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Date Picker */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Departure Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>

        {/* Guest Counter Inputs */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Number of Guests
          </label>
          <div className="space-y-3">
            {/* Adult Counter */}
            <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
              <div>
                <span className="text-sm font-semibold text-slate-800 block">
                  Adults
                </span>
                <span className="text-xs text-slate-500">Rs.4999 / person</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-slate-800 w-4 text-center">
                  2
                </span>
                <button className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Child Counter */}
            <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
              <div>
                <span className="text-sm font-semibold text-slate-800 block">
                  Children
                </span>
                <span className="text-xs text-slate-500">Rs.2500 / child</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-slate-800 w-4 text-center">
                  0
                </span>
                <button className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100">
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
