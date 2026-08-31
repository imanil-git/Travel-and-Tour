export const useBookingStore = create((set, get) => ({
  selectedDate: "",

  guests: {
    adults: 2,
    children: 0,
  },

  pricing: {
    adult: 4999,
    child: 2500,
    serviceFee: 450,
  },

  selectedAddons: ["transfer"],

  addOns: [
    {
      id: "transfer",
      title: "Private Airport Transfer",
      desc: "Roundtrip pickup & drop-off",
      price: 1200,
    },
    {
      id: "boat",
      title: "Private Boat Island Upgrade",
      desc: "Exclusive boat for island tours",
      price: 2500,
    },
    {
      id: "insurance",
      title: "Comprehensive Travel Insurance",
      desc: "Full medical & cancellation coverage",
      price: 800,
    },
  ],

  traveler: {
    firstName: "",
    lastName: "",
    email: "",
    specialRequests: "",
  },

  // Actions
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

  //   Calculations

  getAddonsTotal: () => {
    const { selectedAddons } = get();

    return selectedAddons.reduce((total, addonId) => {
      const addon = addOns.find((item) => item.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
  },

  getSubtotal: () => {
    const { guests } = get();
    const { adult, child } = pricing;

    const adultsTotal = guests.adults * adult;
    const childrenTotal = guests.children * child;
    const addonsTotal = get().getAddonsTotal();

    return adultsTotal + childrenTotal + addonsTotal;
  },

  getGrandTotal: () => {
    return get().getSubtotal() + pricing.serviceFee;
  },
}));
