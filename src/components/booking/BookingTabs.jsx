export const BookingTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["overview", "includes", "itinerary"];
  return (
    <div className="border-b border-[#D7CDC2] mb-6">
      <div className="flex gap-5 sm:gap-7">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium capitalize transition-colors duration-300\ border-b-2 ${
                isActive
                  ? "text-[#28364c] border-[#28364c]"
                  : "text-[#433833] border-transparent hover:text-[#28364c]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};
