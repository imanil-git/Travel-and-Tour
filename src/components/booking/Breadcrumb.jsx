import { ChevronRight } from "lucide-react";
import React from "react";

export const Breadcrumb = ({ bookingTitle }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm md:text-base flex-wrap">
      <a href="/" className="text-lg hover:text-[#28364c] transition-colors">
        Home
      </a>
      <span className="w-4 h-4 text-gray-400">/</span>

      <a className="text-lg text-[#28364c] transition-colors">Booking</a>

      <span className="w-4 h-4 text-gray-400">/</span>

      <span className="text-[#28364c]">{bookingTitle}</span>
    </div>
  );
};
