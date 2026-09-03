import { Calendar } from "lucide-react";
import { BookingSummary } from "./BookingSummary";
import { TravelerCounter } from "./TravelerCounter";

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
        <div>
            <div>
                <span>Total</span>
                <span>${total}</span>
            </div>
        </div>
      </div>
    </div>
  );
};
