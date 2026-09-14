import { todayLocal } from "../../utils/date";
import { useState } from "react";
import { useBookingStore } from "../../store/useBookingStore";
import { Input } from "./ui/Input";

export function ConfirmationStep() {
  const { travelerInfo, updateTravelerInfo, prevStep } = useBookingStore();

  const [reviewed, setReviewed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewed(true);
  };

  return (
    <form
      onChange={() => setReviewed(false)}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Lead Traveler Information
        </h3>
        <Input
          label="Full Name"
          placeholder="e.g. Anil Rai"
          value={travelerInfo.fullName}
          onChange={(e) => updateTravelerInfo("fullName", e.target.value)}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="anil@example.com"
            value={travelerInfo.email}
            onChange={(e) => updateTravelerInfo("email", e.target.value)}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+977 9800000000"
            value={travelerInfo.phone}
            onChange={(e) => updateTravelerInfo("phone", e.target.value)}
            required
          />
        </div>
        <Input
          label="Target Departure Date"
          type="date"
          min={todayLocal()}
          value={travelerInfo.travelDate}
          onChange={(e) => updateTravelerInfo("travelDate", e.target.value)}
          required
        />
      </div>

      <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
        Trip preview only. Online reservations and payments are not connected
        yet. No booking will be placed or payment collected.
      </p>
      {reviewed && (
        <p role="status" className="rounded-xl bg-slate-100 p-4">
          Your trip details are ready to review. Nothing has been sent; contact
          the travel team to confirm availability.
        </p>
      )}

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={prevStep}
          className="bg-slate-100 text-slate-700 text-xs font-bold px-5 py-3 rounded-full"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="bg-slate-900 text-white text-xs font-bold px-8 py-3 rounded-full hover:bg-slate-800 shadow-md"
        >
          Review Trip
        </button>
      </div>
    </form>
  );
}
