import { MapPin } from "lucide-react";
import { useBookingStore } from "../../store/useBookingStore";

export function DestinationStep({ destinations }) {
  const { selectedDestination, setDestination, nextStep } = useBookingStore();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-slate-900">Select Your Package</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {destinations.map((item) => {
          const isSelected = selectedDestination?.id === item.id;
          return (
            <button
              type="button"
              aria-pressed={isSelected}
              key={item.id}
              onClick={() => setDestination(item)}
              className={`text-left p-4 rounded-2xl bg-white border cursor-pointer transition-all flex space-x-4 ${
                isSelected
                  ? "border-slate-900 ring-2 ring-slate-900/10 shadow-md"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <img
                loading="lazy"
                decoding="async"
                src={item.image}
                alt={item.title}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center">
                    <MapPin className="w-3 h-3 mr-0.5" />
                    {item.location}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-black text-slate-900">
                    Rs.{item.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    Per Person
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex justify-end pt-4">
        <button
          onClick={nextStep}
          className="bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-slate-800 transition-all"
        >
          Continue to Customization →
        </button>
      </div>
    </div>
  );
}
