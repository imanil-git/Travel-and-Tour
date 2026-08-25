import React from "react";

export const BenefitCard = ({ benefit }) => {
  const Icon = benefit.Icon;
  const Icon1 = benefit.Icon1;
  return (
    <article className="flex items-center gap-6 md:gap-10 rounded-2xl bg-gray-500 p-4 text-white">
      <div className="flex w-42 h-36 items-center justify-center overflow-hidden rounded-xl bg-white text-[#28364c]">
        <Icon size={60} />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="border-[#28364c] bg-[#28364c] rounded-full w-12 h-12 flex items-center justify-center">
          <Icon1 size={30} />
        </div>
        <p className="mt-2 text-white/80 text-center">{benefit.label}</p>
      </div>
    </article>
  );
};
