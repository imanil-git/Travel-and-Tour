import { todayLocal } from "../../utils/date";
import { useNavigate } from "react-router-dom";
import { useBookingStore } from "../../store/useBookingStore";
import { Calendar, ShieldCheck } from "lucide-react";
import { DetailSummary } from "./DetailSummary";
import { TravelerCounter } from "./TravelerCounter";
import { ContactOptions } from "./ContactOptions";

export const DetailCard = ({
  bookingData,
  travelDate,
  setTravelDate,
  travelers,
  setTravelers,
}) => {
  const navigate = useNavigate();
  const total = bookingData.price * travelers;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      {/* PRICE */}
      <div className="mb-6">
        <span className="text-sm text-[#433833]">Starting from</span>

        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-[#3A2D26]">
            Rs. {bookingData.price.toLocaleString()}
          </span>
          <span className="text-sm text-[#433833]">/ person</span>
        </div>
      </div>

      {/* PACKAGE SUMMARY */}
      <DetailSummary bookingData={bookingData} />

      <div className="space-y-5">
        <div>
          <label htmlFor="detail-travel-date" className="block text-sm font-medium text-[#433833] mb-2">
            <Calendar className="inline w-4 h-4 mr-1.5" /> Travel Date
          </label>

          <input
            id="detail-travel-date"
            type="date"
            value={travelDate}
            min={todayLocal()}
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
            <span className="text-2xl font-bold text-[#3A2D26]">Rs. {total.toLocaleString()}</span>
          </div>
        </div>

        {/* BOOK BUTTON */}
        <button
          type="button"
          disabled={!travelDate}
          onClick={() => {
            const store = useBookingStore.getState();
            store.setDestination(bookingData);
            store.setGuests(travelers);
            store.updateTravelerInfo("travelDate", travelDate);
            store.setStep(2);
            navigate("/booking");
          }}
          className="w-full bg-[#28364c] text-white py-3 rounded-xl font-medium hover:bg-[#3A2D26] transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
        >
          Customize Trip
        </button>

        {/* SECURITY */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#433833]">
          <ShieldCheck className="w-4 h-4 text-green-500" />

          <span>Preview your trip before reserving</span>
        </div>
      </div>
      <ContactOptions />
    </div>
  );
};
