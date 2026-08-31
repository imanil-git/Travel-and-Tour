import { Check } from "lucide-react";
import React, { useState } from "react";
import { useBookingStore } from "../../store/useBookingStore";
import { bookingData } from "../../data/bookingData";

export const AddonSelector = () => {
  const selectedAddons = useBookingStore((state) => state.selectedAddons);

  const toggleAddon = useBookingStore((state) => state.toggleAddon);
  return (
    <section className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-2">
        Customizable Add-ons
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Enhance your trip with exclusive local add-ons.
      </p>

      <div className="space-y-4">
        {bookingData.addons.map((addon) => {
          const isSelected = selectedAddons.includes(addon.id);

          return (
            <button
              type="button"
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className={`w-full text-left cursor-pointer p-4 rounded-2xl border transition flex items-center justify-between ${
                isSelected
                  ? "bg-slate-50/50 border-slate-900"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center border transition ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {addon.title}
                  </h4>
                  <p className="text-xs text-slate-500">{addon.desc}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-900">
                +Rs{addon.price.toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
