import { create } from "zustand";
import { bookingData } from "../data/bookingData";

export const useBookingStore = create((set, get) => ({
  // Store

  selectedDate: "",

  guests: {
    adults: 0,
    children: 0,
  },

  selectedAddons: ["transfer"],

  traveler: {
    firstName: "",
    lastName: "",
    email: "",
    specialRequests: "",
  },

  // Action

  setSelectedDate: (date) => {
    set({
      selectedDate: date,
    });
  },

  updateGuests: (type, operation) => {
    set((state) => {
      const currentValue = state.guests[type];

      const updatedValue =
        operation === "inc" ? currentValue + 1 : Math.max(0, currentValue - 1);

      return {
        guests: {
          ...state.guests,
          [type]: updatedValue,
        },
      };
    });
  },

  toggleAddon: (addonId) => {
    set((state) => {
      const isSelected = state.selectedAddons.includes(addonId);

      return {
        selectedAddons: isSelected
          ? state.selectedAddons.filter((id) => id !== addonId)
          : [...state.selectedAddons, addonId],
      };
    });
  },

  updateTraveler: (field, value) => {
    set((state) => ({
      traveler: {
        ...state.traveler,
        [field]: value,
      },
    }));
  },

  // Calculations

  getAddonsTotal: () => {
    const { selectedAddons } = get();

    return selectedAddons.reduce((total, addonId) => {
      const addon = bookingData.addons.find((item) => item.id === addonId);

      return total + (addon?.price || 0);
    }, 0);
  },

  getSubtotal: () => {
    const { guests } = get();
    const { adult, child } = bookingData.pricing;

    const adultsTotal = guests.adults * adult;
    const childrenTotal = guests.children * child;
    const addonsTotal = get().getAddonsTotal();

    return adultsTotal + childrenTotal + addonsTotal;
  },

  getGrandTotal: () => {
    return get().getSubtotal() + bookingData.pricing.serviceFee;
  },
}));
