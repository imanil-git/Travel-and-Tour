const comparators = {
  Popularity: (a, b) => b.reviews - a.reviews,
  Rating: (a, b) => b.rating - a.rating,
  "Price Low-High": (a, b) => a.price - b.price,
  "Price High-Low": (a, b) => b.price - a.price,
};

export function filterDestinations(destinations, {
  query = "", category = "All", region = "All", activity = "All",
  maxPrice = Infinity, minRating = 0, sortBy = "Popularity",
} = {}) {
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = destinations.filter((destination) => {
    const text = `${destination.name} ${destination.title} ${destination.location}`.toLowerCase();
    return text.includes(normalizedQuery)
      && (category === "All" || destination.category === category)
      && (region === "All" || destination.region === region)
      && (activity === "All" || destination.activities.includes(activity))
      && destination.price <= maxPrice
      && destination.rating >= minRating;
  });
  return filtered.sort(comparators[sortBy] ?? comparators.Popularity);
}
