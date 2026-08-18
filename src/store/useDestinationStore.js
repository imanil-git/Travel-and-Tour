import { create } from "zustand";

// Sample dataset matching your initial design
const INITIAL_DESTINATIONS = [
  {
    id: 1,
    name: "El Nido",
    type: "beach",
    region: "visayas",
    price: 4999,
    rating: 4.8,
    reviews: 1200,
    activities: ["snorkeling", "diving"],
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Baguio City",
    type: "city",
    region: "luzon",
    price: 3200,
    rating: 4.6,
    reviews: 950,
    activities: ["sightseeing", "hiking"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Siargao",
    type: "island",
    region: "mindanao",
    price: 5500,
    rating: 4.9,
    reviews: 2000,
    activities: ["surfing", "beach"],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Vigan",
    type: "city",
    region: "luzon",
    price: 4250,
    rating: 4.7,
    reviews: 780,
    activities: ["sightseeing"],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Batanes",
    type: "nature",
    region: "luzon",
    price: 8900,
    rating: 4.9,
    reviews: 850,
    activities: ["hiking", "sightseeing"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Coron",
    type: "island",
    region: "visayas",
    price: 5200,
    rating: 4.9,
    reviews: 1500,
    activities: ["diving", "snorkeling"],
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
  },
];

export const useDestinationStore = create((set, get) => ({
  destinations: INITIAL_DESTINATIONS,
  searchQuery: "",
  sortBy: "popularity",
  selectedTypes: [],
  selectedRegions: [],
  selectedActivities: [],
  maxPrice: 10000,
  minRating: 0,
  isMobileFilterOpen: false,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortBy: (sortBy) => set({ sortBy }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  setMinRating: (rating) => set({ minRating: rating }),
  toggleMobileFilter: () =>
    set((state) => ({ isMobileFilterOpen: !state.isMobileFilterOpen })),

  toggleFilter: (category, value) =>
    set((state) => {
      const list = state[category];
      const updated = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      return { [category]: updated };
    }),

  resetFilters: () =>
    set({
      searchQuery: "",
      sortBy: "popularity",
      selectedTypes: [],
      selectedRegions: [],
      selectedActivities: [],
      maxPrice: 10000,
      minRating: 0,
    }),

  getFilteredDestinations: () => {
    const {
      destinations,
      searchQuery,
      sortBy,
      selectedTypes,
      selectedRegions,
      selectedActivities,
      maxPrice,
      minRating,
    } = get();

    return destinations
      .filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(item.type);
        const matchesRegion =
          selectedRegions.length === 0 || selectedRegions.includes(item.region);
        const matchesPrice = item.price <= maxPrice;
        const matchesRating = item.rating >= minRating;
        const matchesActivities =
          selectedActivities.length === 0 ||
          item.activities.some((act) => selectedActivities.includes(act));

        return (
          matchesSearch &&
          matchesType &&
          matchesRegion &&
          matchesPrice &&
          matchesRating &&
          matchesActivities
        );
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return b.reviews - a.reviews; // Default: Popularity
      });
  },
}));
