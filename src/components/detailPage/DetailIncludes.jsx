import { Check } from "lucide-react";

export const DetailIncludes = ({ bookingData }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-ink mb-4">
        What's Included
      </h3>

      <ul className="space-y-3">
        {bookingData.includes.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-muted">
            <div>
              <Check className="w-4 h-4 text-[#79824E]" />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
