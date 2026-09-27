export const DetailTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["overview", "includes", "itinerary"];
  return (
    <div className="border-b border-line mb-6">
      <div className="flex gap-5 sm:gap-7">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium capitalize transition-colors duration-300 border-b-2 ${
                isActive
                  ? "text-brand border-brand"
                  : "text-muted border-transparent hover:text-brand"
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
