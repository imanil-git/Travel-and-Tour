import test from 'node:test';
import assert from 'node:assert/strict';
import { filterDestinations } from '../src/utils/filterDestinations.js';
import { calculateBookingTotals } from '../src/utils/bookingPricing.js';

const tours = [
  { id: 1, name: 'Pokhara', title: 'Lakeside escape', location: 'Gandaki, Nepal', category: 'Nature', region: 'Gandaki', activities: ['Boating'], price: 4999, rating: 4.9, reviews: 1200 },
  { id: 2, name: 'Kathmandu', title: 'Heritage tour', location: 'Bagmati, Nepal', category: 'Culture', region: 'Bagmati', activities: ['Heritage'], price: 3200, rating: 4.8, reviews: 950 },
  { id: 3, name: 'Annapurna', title: 'Mountain trails', location: 'Gandaki, Nepal', category: 'Trekking', region: 'Gandaki', activities: ['Hiking'], price: 6500, rating: 4.9, reviews: 1500 },
];

test('combines normalized search with category, region, activity, price and rating', () => {
  assert.deepEqual(filterDestinations(tours, { query: '  GANDAKI ', category: 'Nature', region: 'Gandaki', activity: 'Boating', maxPrice: 5000, minRating: 4.9 }).map((tour) => tour.id), [1]);
  assert.deepEqual(filterDestinations(tours, { query: 'no match' }), []);
  assert.deepEqual(filterDestinations(tours, { maxPrice: 3000 }), []);
});

test('sorts each supported way without reordering the catalogue', () => {
  for (const [sortBy, ids] of [
    ['Popularity', [3, 1, 2]], ['Price Low-High', [2, 1, 3]],
    ['Price High-Low', [3, 1, 2]], ['Rating', [1, 3, 2]],
  ]) assert.deepEqual(filterDestinations(tours, { sortBy }).map((tour) => tour.id), ids);
  assert.deepEqual(tours.map((tour) => tour.id), [1, 2, 3]);
});

test('prices each selected add-on once per booking', () => {
  const addOns = [{ id: 'airport', price: 5800 }, { id: 'insurance', price: 3000 }];
  const totals = calculateBookingTotals({ destination: tours[0], guests: 2, selectedAddOnIds: ['airport', 'insurance', 'missing'], addOns });
  assert.equal(totals.baseTotal, 9998);
  assert.equal(totals.addOnsTotal, 8800);
  assert.equal(totals.grandTotal, 18798);
});
