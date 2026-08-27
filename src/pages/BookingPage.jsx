import React from "react";
import { BookingProgessStepper } from "../components/booking/BookingProgessStepper";
import { GuestCounter } from "../components/booking/GuestCounter";
import { AddonSelector } from "../components/booking/AddonSelector";
import { TravelerForm } from "../components/booking/TravelerForm";
import { BookingSummary } from "../components/booking/BookingSummary";

export const BookingPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-[#28364c]">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <BookingProgessStepper />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-8 space-y-8">
            <GuestCounter />
            <AddonSelector />
            <TravelerForm />
          </div>
          <div className="lg:col-span-4 sticky top-28">
            <BookingSummary />
          </div>
        </div>
      </div>
    </div>
  );
};
