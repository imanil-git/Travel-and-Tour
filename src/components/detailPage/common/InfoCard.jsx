export const InfoCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-center">
      <Icon className="w-6 h-6 text-brand mx-auto mb-2" />

      <p className="text-sm text-muted">{label}</p>

      <p className="font-semibold text-ink">{value}</p>
    </div>
  );
};
