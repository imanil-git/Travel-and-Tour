import { useState } from "react";
import { BookingHeader } from "../components/booking/BookingHeader.jsx";
import { BookingHero } from "../components/booking/BookingHero";
import { booking } from "../data/bookingData.js";
import { BookingInfoGrid } from "../components/booking/BookingInfoGrid.jsx";
import { BookingTabs } from "../components/booking/BookingTabs.jsx";
import { BookingOverView } from "../components/booking/BookingOverView.jsx";
import { BookingIncludes } from "../components/booking/BookingIncludes.jsx";
import { BookingItinerary } from "../components/booking/BookingItinerary.jsx";
import { BookingCard } from "../components/booking/BookingCard.jsx";

export const BookingPage = () => {
  const bookingData = booking[0];

  const [activeTab, setActiveTab] = useState("overview");

  const [travelDate, setTravelDate] = useState("");

  const [travelers, setTravelers] = useState(1);
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <BookingHero bookingData={bookingData} />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            <BookingHeader bookingData={bookingData} />

            <BookingInfoGrid bookingData={bookingData} />

            <BookingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="space-y-6">
              {activeTab === "overview" && (
                <BookingOverView bookingData={bookingData} />
              )}
              {activeTab === "includes" && (
                <BookingIncludes bookingData={bookingData} />
              )}
              {activeTab === "itinerary" && (
                <BookingItinerary bookingData={bookingData} />
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <aside>
            <BookingCard
              bookingData={bookingData}
              travelDate={travelDate}
              setTravelDate={setTravelDate}
              travelers={travelers}
              setTravelers={setTravelers}
            />
          </aside>
        </div>
      </div>
    </div>
  );
};
