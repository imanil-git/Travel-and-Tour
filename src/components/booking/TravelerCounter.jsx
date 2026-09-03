import { Minus, Plus, Users } from "lucide-react";

export const TravelerCounter = ({ travelers, setTravelers, maxTravelers }) => {
  const decrease = () => {
    if (travelers > 1) {
      setTravelers(travelers - 1);
    }
  };
  const increase = () => {
    if (travelers < maxTravelers) {
      setTravelers(travelers + 1);
    }
  };
  return (
    <div>
      <label className="block text-sm font-medium text-[#433833] mb-2">
        <Users className="inline w-4 h-4 mr-1.5" />
        Travelers
      </label>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={decrease}
          disabled={travelers <= 1}
          className="w-10 h-10 rounded-full border border-[#28364c] flex items-center justify-center hover:border-[#433833] hover:bg-[#433833] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="text-lg font-semibold text-[#3A2D26] w-12 text-center">
          {travelers}
        </span>
        <button
          type="button"
          onClick={increase}
          disabled={travelers >= maxTravelers}
          className="w-10 h-10 rounded-full border border-[#28364c] flex items-center justify-center hover:border-[#433833] hover:bg-[#433833] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
