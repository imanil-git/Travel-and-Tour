import React from "react";
import { BookingProgessStepper } from "../components/booking/BookingProgessStepper";
import { GuestCounter } from "../components/booking/GuestCounter";
import { AddonSelector } from "../components/booking/AddonSelector";
import { TravelerForm } from "../components/booking/TravelerForm";

export const BookingPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-[#28364c]">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <BookingProgessStepper />
        <GuestCounter />
        <AddonSelector />
        <TravelerForm />
      </div>
    </div>
  );
};
