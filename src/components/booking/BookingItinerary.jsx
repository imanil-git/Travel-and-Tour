import React from "react";

export const BookingItinerary = ({ bookingData }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#3A2D26] mb-6">Itinerary</h3>

      <div className="space-y-5">
        {bookingData.itinerary.map((item) => (
          <div key={item.day}>
            <p className="text-xl font-bold text-[#28364c]">{item.day}</p>
            <h4 className="text-lg font-semibold text-[#3A2D26] mt-1">
              {item.title}
            </h4>
            <p className="text-[#433833] mt-2 leading-relaxed]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
