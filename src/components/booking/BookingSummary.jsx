import React from "react";

export const BookingSummary = ({ bookingData }) => {
  return (
    <div className="space-y-3 mb-6 p-4 bg-[#FAF8F5] rounded-xl">
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-[#433833]">Duration</span>

        <span className="font-medium text-[#28364c] text-right">
          {bookingData.duration}
        </span>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-[#433833]">Group Size</span>
        <span className="font-medium text-[#3A2D26]">
          {bookingData.groupSize} pax
        </span>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-[#433833]">Category</span>
        <span className="font-medium text-[#3A2D26]">
          {bookingData.category}
        </span>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-[#433833]">Location</span>
        <span className="font-medium text-[#3A2D26]">
          {bookingData.location}
        </span>
      </div>
    </div>
  );
};
