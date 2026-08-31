import { Calendar, Minus, Plus } from "lucide-react";
import { useBookingStore } from "../../store/useBookingStore";
import { GuestCounter } from "./GuestCounter";
import { bookingData } from "../../data/bookingData";

export const TripOptions = () => {
  const selectedDate = useBookingStore((state) => state.selectedDate);

  const setSelectedDate = useBookingStore((state) => state.setSelectedDate);

  const { adult, child } = bookingData.pricing;
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
            <GuestCounter type="adults" label="Adults" price={adult} />

            {/* Child Counter */}
            <GuestCounter
              type="children"
              label="Children"
              price={child}
              priceLabel="child"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
