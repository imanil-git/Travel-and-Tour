import { useBookingStore } from "../../store/useBookingStore";

export function BookingSummarySidebar({ addOns }) {
  const {
    selectedDestination,
    guests,
    selectedAddOns,
    getAddOnsTotal,
    getGrandTotal,
  } = useBookingStore();

  const addOnsTotal = getAddOnsTotal(addOns);
  const grandTotal = getGrandTotal(addOns);

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 sticky top-28 space-y-6">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
        Booking Summary
      </h3>

      {/* Selected Package Mini Banner */}
      {selectedDestination && (
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
          <img
                loading="lazy"
                decoding="async"
            src={selectedDestination.image}
            alt="Package"
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div>
            <h4 className="text-xs font-bold text-slate-900">
              {selectedDestination.title}
            </h4>
            <span className="text-[10px] text-slate-500">
              {selectedDestination.location}
            </span>
          </div>
        </div>
      )}

      {/* Calculations */}
      <div className="space-y-2.5 text-xs text-slate-600">
        <div className="flex justify-between">
          <span>Base Price ({guests}x Guests)</span>
          <span className="font-semibold text-slate-900">
            Rs.{" "}
            {((selectedDestination?.price || 0) * guests).toLocaleString()}
          </span>
        </div>

        {selectedAddOns.length > 0 && (
          <div className="flex justify-between">
            <span>Add-ons Total</span>
            <span className="font-semibold text-slate-900">
              +Rs. {addOnsTotal.toLocaleString()}
            </span>
          </div>
        )}

        <div className="pt-3 border-t border-slate-100 flex justify-between text-base font-black text-slate-900">
          <span>Total</span>
          <span>Rs. {grandTotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
