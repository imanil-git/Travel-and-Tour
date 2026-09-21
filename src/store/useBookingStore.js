import { create } from "zustand";
import { booking } from "../data/bookingData";

const createTravelerInfo = () => ({
  fullName: "",
  email: "",
  phone: "",
  travelDate: "",
});

const createInitialBooking = () => ({
  step: 1,
  selectedDestination: booking[0],
  guests: 1,
  selectedAddOns: [],
  travelerInfo: createTravelerInfo(),
  requestReceipt: null,
});

const clampGuests = (value, maximum) => {
  const parsed = Number(value);

  const count = Number.isFinite(parsed) ? Math.trunc(parsed) : 1;

  return Math.max(1, Math.min(count, maximum));
};

export const useBookingStore = create((set) => ({
  ...createInitialBooking(),

  startBooking: ({ destination, guests = 1, travelDate = "" }) =>
    set({
      ...createInitialBooking(),
      step: 2,
      selectedDestination: destination,
      guests: clampGuests(guests, destination.groupSize),

      travelerInfo: {
        ...createTravelerInfo(),
        travelDate,
      },
    }),

  resetBooking: () => set(createInitialBooking()),

  // Actions
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 3) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),

  setDestination: (destination) =>
    set({
      selectedDestination: destination,
      guests: 1,
      selectedAddOns: [],
    }),
  setGuests: (guests) =>
    set((state) => ({
      guests: clampGuests(guests, state.selectedDestination.groupSize),
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

  markRequestSent: (reference) =>
    set({
      requestReceipt: { reference },
      travelerInfo: createTravelerInfo(),
    }),
}));
