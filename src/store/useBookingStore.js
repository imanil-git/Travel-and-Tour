import { create } from "zustand";
import { booking } from "../data/bookingData";

const bookingData = booking[0];

export const useBookingStore = create((set, get) => ({
  step: 1,

  selectedDestination: bookingData,
  guests: 1,
  selectedAddOns: [],

  // Passenger / Contact Form State
  travelerInfo: {
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
  },

  // Payment Method
  // paymentMethod: "esewa", // 'esewa' | 'card'

  // Actions
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 3) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),

  setDestination: (destination) =>
    set((state) => ({
      selectedDestination: destination,
      guests: Math.min(state.guests, destination.groupSize),
    })),
  setGuests: (guests) =>
    set((state) => ({
      guests: Math.max(
        1,
        Math.min(
          state.selectedDestination.groupSize,
          Math.trunc(Number(guests)) || 1,
        ),
      ),
    })),

  toggleAddOn: (addonId) =>
    set((state) => {
      const exists = state.selectedAddOns.includes(addonId);
      return {
        selectedAddOns: exists
          ? state.selectedAddOns.filter((id) => id !== addonId)
          : [...state.selectedAddOns, addonId],
      };
    }),

  updateTravelerInfo: (field, value) =>
    set((state) => ({
      travelerInfo: { ...state.travelerInfo, [field]: value },
    })),

  resetTravelerInfo: () =>
    set({
      travelerInfo: {
        fullName: "",
        email: "",
        phone: "",
        travelDate: "",
      },
    }),

  // setPaymentMethod: (method) => set({ paymentMethod: method }),

  // Computed Totals
  getAddOnsTotal: (addOnsList) => {
    const { selectedAddOns } = get();
    return selectedAddOns.reduce((sum, id) => {
      const addon = addOnsList.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);
  },

  getGrandTotal: (addOnsList) => {
    const { selectedDestination, guests, getAddOnsTotal } = get();
    const base = (selectedDestination?.price || 0) * guests;
    return base + getAddOnsTotal(addOnsList);
  },
}));
