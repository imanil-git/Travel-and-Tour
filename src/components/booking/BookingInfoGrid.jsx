import { Calendar, Clock, Star, Users } from "lucide-react";
import { InfoCard } from "./common/InfoCard";

export const BookingInfoGrid = ({ bookingData }) => {
  const information = [
    {
      label: "Duration",
      value: bookingData.duration,
      icon: Calendar,
    },
    {
      label: "Group Size",
      value: `${bookingData.groupSize} pax`,
      icon: Users,
    },
    {
      label: "Category",
      value: bookingData.category,
      icon: Star,
    },
    {
      label: "Best Time",
      value: bookingData.bestTime,
      icon: Clock,
    },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      {information.map((item) => (
        <InfoCard
          key={item.label}
          label={item.label}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
