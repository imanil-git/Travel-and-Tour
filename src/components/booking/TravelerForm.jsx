import { Users } from "lucide-react";
import React from "react";

export const TravelerForm = () => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-slate-700" />
        Traveler Contact Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Email Address
          </label>
          <input
            type="text"
            placeholder="john@example.com"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            rows={3}
            placeholder="Dietary requirements, pickup preferences, etc."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
      </div>
    </div>
  );
};
