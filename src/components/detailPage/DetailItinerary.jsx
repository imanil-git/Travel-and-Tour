
export const DetailItinerary = ({ bookingData }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-ink mb-6">Itinerary</h3>

      <div className="space-y-5">
        {bookingData.itinerary.map((item) => (
          <div key={item.day}>
            <p className="text-xl font-bold text-brand">{item.day}</p>
            <h4 className="text-lg font-semibold text-ink mt-1">
              {item.title}
            </h4>
            <p className="text-muted mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
