import { ChevronRight } from "lucide-react";
import React from "react";

export const BookingProgessStepper = () => {
  return (
    <section className="bg-white rounded-2xl p-6 mb-8 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 text-slate-400">
          <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">
            1
          </span>
          <span className="font-semibold text-sm">Select Package</span>
        </div>
        <ChevronRight className="hidden md:block w-6 h-6 text-slate-300" />

        <div className="flex items-center gap-3 text-slate-900">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
            2
          </span>
          <span className="font-semibold text-sm">Customize & Details</span>
        </div>
        <ChevronRight className="hidden md:block w-6 h-6 text-slate-300" />

        <div className="flex items-center gap-3 text-slate-400">
          <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm">
            3
          </span>
          <span className="font-semibold text-sm">Payment & Confirm</span>
        </div>
      </div>
    </section>
  );
};
