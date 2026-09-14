import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { booking } from "../data/bookingData.js";
import { DetailHero } from "../components/detailPage/DetailHero.jsx";
import { DetailHeader } from "../components/detailPage/DetailHeader.jsx";
import { DetailInfoGrid } from "../components/detailPage/DetailInfoGrid.jsx";
import { DetailTabs } from "../components/detailPage/DetailTabs.jsx";
import { DetailOverView } from "../components/detailPage/DetailOverView.jsx";
import { DetailIncludes } from "../components/detailPage/DetailIncludes.jsx";
import { DetailItinerary } from "../components/detailPage/DetailItinerary.jsx";
import { DetailCard } from "../components/detailPage/DetailCard.jsx";

export const DetailPage = () => {
  const { slug } = useParams();
  const bookingData = booking.find((item) => item.slug === slug);


  const [activeTab, setActiveTab] = useState("overview");

  const [travelDate, setTravelDate] = useState("");

  const [travelers, setTravelers] = useState(1);
  if (!bookingData) {
    return <Navigate to="/destination" replace />;
  }
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* HERO */}
      <DetailHero bookingData={bookingData} />

      {/* CONTENT */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            <DetailHeader bookingData={bookingData} />

            <DetailInfoGrid bookingData={bookingData} />

            <DetailTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="space-y-6">
              {activeTab === "overview" && (
                <DetailOverView bookingData={bookingData} />
              )}
              {activeTab === "includes" && (
                <DetailIncludes bookingData={bookingData} />
              )}
              {activeTab === "itinerary" && (
                <DetailItinerary bookingData={bookingData} />
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <aside>
            <DetailCard
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
