import React from "react";
import { useBookingStore } from "../../store/useBookingStore";
import { Minus, Plus } from "lucide-react";

export const GuestCounter = ({ type, label, price, priceLabel = "person" }) => {
  const guests = useBookingStore((state) => state.guests);

  const updateGuests = useBookingStore((state) => state.updateGuests);
  return (
    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-2">
      <div>
        <span className="text-sm font-semibold text-slate-800 block">
          {label}
        </span>
        <span className="text-xs text-slate-500">
          Rs.{price.toLocaleString()} / {priceLabel}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => updateGuests(type, "dec")}
          className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="font-bold text-slate-800 w-4 text-center">
          {guests[type]}
        </span>
        <button
          type="button"
          onClick={() => updateGuests(type, "inc")}
          className="w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
