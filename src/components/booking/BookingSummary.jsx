import React from "react";
import packageDetail from "../../assets/PopularCard.jpg";
import { Clock, MapPin, ShieldCheck } from "lucide-react";

export const BookingSummary = () => {
  return (
    <div className="sticky top-28 space-y-4">
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
        {/* Package Header */}
        <div className="flex gap-4 mb-6">
          <img
            src={packageDetail}
            alt=""
            className="w-20 h-20 rounded-2xl object-cover"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Selected Package
            </span>
            <h3 className="font-bold text-slate-900 leading-snug">
              Package Details
            </h3>
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
              <MapPin className="w-3.5 h-3.5" /> PackageDetails Location
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
              <Clock className="w-3.5 h-3.5" /> PackageDetails Duration
            </div>
          </div>
        </div>

        <hr className="border-slate-200 my-4" />

        {/* Pricing Breakdown */}

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-slate-600">
            <span>Adult(s)</span>
            <span className="font-semibold text-slate-900">Rs.4999</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Child(ren)</span>
            <span className="font-semibold text-slate-900">Rs.3999</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Add-ons</span>
            <span className="font-semibold text-slate-900">Rs.2999</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Service & Taxes</span>
            <span className="font-semibold text-slate-900">Rs.499</span>
          </div>

          <hr className="border-slate-200 my-4" />

          <div className="flex justify-between items-baseline pt-2">
            <span className="font-bold text-slate-900 text-base">
              Total Price
            </span>
            <span className="font-black text-2xl text-slate-900">
              Rs. 12496
            </span>
          </div>
        </div>

        <button className="w-full mt-6 bg-[#28364c] hover:bg-[#3b4b66] text-white font-bold py-4 rounded-full transition shadow-lg shadow-[#28364c]">
          Procced to Checkout
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400 font-medium">
          <ShieldCheck className="w-h h-4 text-emerald-600" />
          100% Secure & Encrypted Payment
        </div>
      </div>

      {/* Support Card */}
      <div className="bg-[#28364c] text-white rounded-2xl p-4 flex items-center justify-between">
        <div className="text-xs">
          <p className="font-bold">Need Assistance?</p>
          <p className="text-slate-400">Our local travel experts are online.</p>
        </div>
        <button className="bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/20 transiition">
          Contact
        </button>
      </div>
    </div>
  );
};
