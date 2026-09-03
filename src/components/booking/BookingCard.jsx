import { Calendar, ShieldCheck } from "lucide-react";
import { BookingSummary } from "./BookingSummary";
import { TravelerCounter } from "./TravelerCounter";
import { ContactOptions } from "./ContactOptions";

export const BookingCard = ({
  bookingData,
  travelDate,
  setTravelDate,
  travelers,
  setTravelers,
}) => {
  const total = bookingData.price * travelers;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      {/* PRICE */}
      <div className="mb-6">
        <span className="text-sm text-[#433833]">Starting Form</span>

        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-[#3A2D26]">
            ${bookingData.price}
          </span>
          <span className="text-sm text-[#433833]">/ person</span>
        </div>
      </div>

      {/* PACKAGE SUMMARY */}
      <BookingSummary bookingData={bookingData} />

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#433833] mb-2">
            <Calendar className="inline w-4 h-4 mr-1.5" /> Travel Date
          </label>

          <input
            type="date"
            value={travelDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(event) => setTravelDate(event.target.value)}
            className="w-full px-4 py-2.5 border border-[#D7CDC2] rounded-xl focus:outline-none focus:border-[#28364c] transition-colors"
          />
        </div>

        {/* TRAVELERS */}
        <TravelerCounter
          travelers={travelers}
          setTravelers={setTravelers}
          maxTravelers={bookingData.groupSize}
        />

        {/* TOTAL */}
        <div className="border-t border-[#D7CDC2] pt-4">
          <div className="flex justify-between items-center">
            <span className="text-[#433833]">Total</span>
            <span className="text-2xl font-bold text-[#3A2D26]">${total}</span>
          </div>
        </div>

        {/* BOOK BUTTON */}
        <button
          type="button"
          disabled={!travelDate}
          onClick={() => {
            alert(`Booking ${traveler(s)} for ${travelDate}`);
          }}
          className="w-full bg-[#28364c] text-white py-3 rounded-xl font-medium hover:bg-[#3A2D26] transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
        >
          Book Now
        </button>

        {/* SECURITY */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#433833]">
          <ShieldCheck className="w-4 h-4 text-green-500" />

          <span>Secure booking • Best price guarantee</span>
        </div>
      </div>
      <ContactOptions />
    </div>
  );
};
