import React from "react";

export const StatCard = ({ stat }) => {
  const Icon = stat.icon;
  return (
    <article className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#28364c] text-white">
        <Icon size={22} />
      </div>

      <h3 className="mt-3 text-lg font-bold">{stat.value}</h3>

      <p>
        {stat.label}
      </p>
    </article>
  );
};
