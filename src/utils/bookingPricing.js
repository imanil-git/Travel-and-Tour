export function calculateBookingTotals({
  destination,
  guests,
  selectedAddOnIds,
  addOns,
}) {
  const selectedIds = new Set(selectedAddOnIds);

  const selectedAddOns = addOns.filter((addOn) =>
    selectedIds.has(addOn.id),
  );

  const baseTotal = (destination?.price ?? 0) * guests;

  const addOnsTotal = selectedAddOns.reduce(
    (total, addOn) => total + addOn.price,
    0,
  );

  return {
    selectedAddOns,
    baseTotal,
    addOnsTotal,
    grandTotal: baseTotal + addOnsTotal,
  };
}
