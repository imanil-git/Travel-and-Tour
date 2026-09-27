
export const DetailSummary = ({ bookingData }) => {
  return (
    <div className="space-y-3 mb-6 p-4 bg-sand rounded-xl">
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-muted">Duration</span>

        <span className="font-medium text-brand text-right">
          {bookingData.duration}
        </span>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-muted">Group Size</span>
        <span className="font-medium text-ink">
          {bookingData.groupSize} pax
        </span>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-muted">Category</span>
        <span className="font-medium text-ink">
          {bookingData.category}
        </span>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <span className="text-muted">Location</span>
        <span className="font-medium text-ink">
          {bookingData.location}
        </span>
      </div>
    </div>
  );
};
