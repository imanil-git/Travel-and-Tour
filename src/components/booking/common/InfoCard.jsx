export const InfoCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-center">
      <Icon className="w-6 h-6 text-[#28364c] mx-auto mb-2" />

      <p className="text-sm text-[#433833]">{label}</p>

      <p className="font-semibold text-[#3A2D26]">{value}</p>
    </div>
  );
};
