export function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function todayLocal() {
  return formatLocalDate(new Date());
}

export function eraliestBookingDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return formatLocalDate(date);
}

export function latestBookingDate() {
  const date = new Date();
  date.setDate(date.getDate() + 30);

  return formatLocalDate(date);
}
