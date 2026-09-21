import { useState } from "react";
import { useBookingStore } from "../../store/useBookingStore";
import { Input } from "./ui/Input";
import { sendBookingConfirmation } from "../../services/emailService.js";
import { earliestBookingDate, latestBookingDate } from "../../utils/date.js";
import { useShallow } from "zustand/shallow";
import { useBookingSummary } from "../../hooks/useBookingSummary.js";

export function ConfirmationStep({ addOns = [] }) {
  const {
    travelerInfo,
    updateTravelerInfo,
    prevStep,
    requestReceipt,
    markRequestSent,
    resetBooking,
  } = useBookingStore(
    useShallow((state) => ({
      travelerInfo: state.travelerInfo,
      updateTravelerInfo: state.updateTravelerInfo,
      prevStep: state.prevStep,
      markRequestSent: state.markRequestSent,
      resetBooking: state.resetBooking,
      requestReceipt: state.requestReceipt,
    })),
  );
  const { selectedDestination, guests, selectedAddOns, grandTotal } =
    useBookingSummary(addOns);

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const isFormValid =
    travelerInfo.fullName.trim() !== "" &&
    travelerInfo.email.trim() !== "" &&
    travelerInfo.phone.trim() !== "" &&
    travelerInfo.travelDate >= earliestBookingDate() &&
    travelerInfo.travelDate <= latestBookingDate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid || status === "sending" || requestReceipt) {
      return;
    }

    setStatus("sending");
    setMessage("");

    const selectedAddOnNames = selectedAddOns
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
      total_price: grandTotal.toLocaleString(),
      booking_reference: bookingReference,
    };

    try {
      await sendBookingConfirmation(templateParams);

      markRequestSent(bookingReference);
      setStatus("idle");
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

  if (requestReceipt) {
    return (
      <section className="rounded-2xl border border-green-200 bg-green-50 p-6 space-y-4">
        <h2 className="text-lg font-bold text-green-900">
          Booking request sent
        </h2>

        <p role="status" className="text-sm text-green-800">
          Reference: {requestReceipt.reference}
        </p>

        <p className="text-sm text-green-800">
          Our team will contact you after checking availability.
        </p>

        <button
          type="button"
          onClick={resetBooking}
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Plan another trip
        </button>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset
        disabled={isSending}
        className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4"
      >
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
          min={earliestBookingDate()}
          max={latestBookingDate()}
          value={travelerInfo.travelDate}
          onChange={(e) => updateTravelerInfo("travelDate", e.target.value)}
          required
        />
      </fieldset>

      <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
        Submitting this form sends a booking request. Our travel team will
        contact you after checking availability.
      </p>
      {message && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
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
          disabled={!isFormValid || isSending}
          className="bg-slate-900 text-white text-xs font-bold px-8 py-3 rounded-full hover:bg-slate-800 shadow-md"
        >
          {isSending ? "Sending..." : "Send Booking Request"}
        </button>
      </div>
    </form>
  );
}
