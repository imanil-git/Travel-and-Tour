import { useShallow } from "zustand/shallow";
import { useBookingStore } from "../store/useBookingStore";
import { calculateBookingTotals } from "../utils/bookingPricing";

export function useBookingSummary(addOns) {
  const { selectedDestination, guests, selectedAddOnIds } = useBookingStore(
    useShallow((state) => ({
      selectedDestination: state.selectedDestination,
      guests: state.guests,
      selectedAddOnIds: state.selectedAddOns,
    })),
  );
  const totals = calculateBookingTotals({
    destination: selectedDestination,
    guests,
    selectedAddOnIds,
    addOns,
  });

  return {
    selectedDestination,
    guests,
    ...totals,
  };
}
