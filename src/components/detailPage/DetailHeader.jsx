import { MapPin } from "lucide-react";

export const DetailHeader = ({ bookingData }) => {
  return (
    <div className="mb-6">
      <span className="text-3xl sm:text-4xl font-bold text-[#3A2D26] mb-3">{bookingData.title}</span>

      <div className="flex items-center gap-2 text-[#433833]">
        <MapPin className="w-5 h-5 text-[#28364c]" />

        <span>{bookingData.location}</span>
      </div>
    </div>
  );
};
