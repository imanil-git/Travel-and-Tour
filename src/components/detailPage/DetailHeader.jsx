import { MapPin } from "lucide-react";

export const DetailHeader = ({ bookingData }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-3">{bookingData.title}</h1>

      <div className="flex items-center gap-2 text-muted">
        <MapPin className="w-5 h-5 text-brand" />

        <span>{bookingData.location}</span>
      </div>
    </div>
  );
};
