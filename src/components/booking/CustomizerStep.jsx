import { TravelerCounter } from "../common/TravelerCounter";
import { Check } from "lucide-react";
import { useBookingStore } from "../../store/useBookingStore";
import { useShallow } from "zustand/shallow";

export function CustomizerStep({ addOns }) {
  const {
    selectedDestination,
    guests,
    setGuests,
    selectedAddOns,
    toggleAddOn,
    nextStep,
    prevStep,
  } = useBookingStore(
    useShallow((state) => ({
      selectedDestination: state.selectedDestination,
      guests: state.guests,
      setGuests: state.setGuests,
      selectedAddOns: state.selectedAddOns,
      toggleAddOn: state.toggleAddOn,
      nextStep: state.nextStep,
      prevStep: state.prevStep,
    })),
  );

  return (
    <div className="space-y-6">
      {/* Guest Picker */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-slate-900">
            Number of Travelers
          </h3>
          <p className="text-[11px] text-slate-500">
            Adjust the total group count for pricing
          </p>
        </div>
        <TravelerCounter travelers={guests} setTravelers={setGuests}
          maxTravelers={selectedDestination.groupSize} />
      </div>

      {/* Add-ons List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
          Available Add-ons
        </h3>
        {addOns.map((addon) => {
          const isSelected = selectedAddOns.includes(addon.id);
          return (
            <button
              type="button"
              aria-pressed={isSelected}
              key={addon.id}
              onClick={() => toggleAddOn(addon.id)}
              className={`w-full text-left p-4 rounded-2xl border flex items-center justify-between cursor-pointer bg-white transition-all ${
                isSelected
                  ? "border-slate-900 ring-1 ring-slate-900"
                  : "border-slate-200"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center border ${isSelected ? "bg-slate-900 border-slate-900 text-white" : "border-slate-300"}`}
                >
                  {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs font-medium text-slate-800">
                  {addon.name}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-900">
                +Rs. {addon.price.toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <button
          onClick={prevStep}
          className="bg-slate-100 text-slate-700 text-xs font-bold px-5 py-3 rounded-full hover:bg-slate-200"
        >
          ← Back
        </button>
        <button
          onClick={nextStep}
          className="bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-slate-800"
        >
          Proceed to Information →
        </button>
      </div>
    </div>
  );
}
