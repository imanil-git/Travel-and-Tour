
export const DetailOverView = ({ bookingData }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-ink mb-3">
        About {bookingData.name}
      </h3>

      <div>
        {bookingData.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
