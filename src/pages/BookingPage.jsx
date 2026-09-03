import { BookingHeader } from "../components/booking/BookingHeader.jsx";
import { BookingHero } from "../components/booking/BookingHero";
import { booking } from "../data/bookingData.js";

export const BookingPage = () => {
  const bookingData = booking[0];
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <BookingHero bookingData={bookingData} />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <BookingHeader bookingData={bookingData} />
          </div>
        </div>
      </div>
    </div>
  );
};
