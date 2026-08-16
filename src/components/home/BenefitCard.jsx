import React from "react";

export const BenefitCard = ({benefit}) => {
    const Icon = benefit.icon
  return (
    <article className="flex items-center gap-4 rounded-2xl bg-gray-500 p-4 text-white">
      <div className="flex h-20 w-28 items-center justify-center rounded-xl bg-white text-[#28364c]">
        <Icon size={60} />
      </div>

      <div>
        <h3 className="text-xl font-semibold">{benefit.title}</h3>

        <p className="mt-2 text-white/80">{benefit.description}</p>
      </div>
    </article>
  );
};
