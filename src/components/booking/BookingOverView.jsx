import React from "react";

export const BookingOverView = ({ bookingData }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#3A2D26] mb-3">
        About This Package
      </h3>

      <div>
        {bookingData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
