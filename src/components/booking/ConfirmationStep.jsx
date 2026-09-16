import { todayLocal } from "../../utils/date";
import { useState } from "react";
import { useBookingStore } from "../../store/useBookingStore";
import { Input } from "./ui/Input";
import { sendBookingConformation } from "../../services/emailService.js";

export function ConfirmationStep({ addOns = [] }) {
  const {
    travelerInfo,
    selectedDestination,
    guests,
    selectedAddOns,
    updateTravelerInfo,
    getGrandTotal,
    resetTravelerInfo,
    prevStep,
  } = useBookingStore();

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");
    setMessage("");

    const selectedAddOnNames = addOns
      .filter((addOn) => selectedAddOns.includes(addOn.id))
      .map((addOn) => addOn.name)
      .join(", ");

    const bookingReference = `TRAVEL-${Date.now()}`;

    const templateParams = {
      customer_name: travelerInfo.fullName,
      customer_email: travelerInfo.email,
      travel_date: travelerInfo.travelDate,
      phone: travelerInfo.phone,
      destination: selectedDestination.name,
      package_title: selectedDestination.title,
      location: selectedDestination.location,
      guests,
      add_ons: selectedAddOnNames || "No add-ons selected",
      total_price: getGrandTotal(addOns).toLocaleString(),
      booking_reference: bookingReference,
    };

    try {
      const response = await sendBookingConformation(templateParams);

      resetTravelerInfo();

      setStatus("success");
      setMessage(
        `Booking request sent successfully. Reference: ${bookingReference}`,
      );
    } catch (error) {
      console.error("EmailJS failed:", error);

      setStatus("error");
      setMessage(
        error?.text ||
          error?.message ||
          "The confirmation email could not be sent.",
      );
    }
  };

  const isSending = status === "sending";
  const isSuccess = status === "success";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Lead Traveler Information
        </h3>
        <Input
          label="Full Name"
          placeholder="e.g. John Doe"
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
        Submitting this form send a booking request. Our travel team will
        contact you after checking availability.
      </p>
      {message && (
        <p
          role="status"
          className={`rounded-xl border p-4 text-sm ${status === "success" ? "border-green-200 bg-green-50 text-green-700" : status === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-slate-200 bg-slate-50 text-slate-700"}`}
        >
          {message}
        </p>
      )}

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={prevStep}
          disabled={isSending}
          className="bg-slate-100 text-slate-700 text-xs font-bold px-5 py-3 rounded-full"
        >
          ← Back
        </button>
        <button
          type="submit"
          disabled={isSending || isSuccess}
          className="bg-slate-900 text-white text-xs font-bold px-8 py-3 rounded-full hover:bg-slate-800 shadow-md"
        >
          {isSending
            ? "Sending..."
            : isSuccess
              ? "Booking Sent"
              : "Confirm Booking"}
        </button>
      </div>
    </form>
  );
}
