import React from "react";

export const StatCard = ({ stat }) => {
  const Icon = stat.icon;
  return (
    <article className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#28364c] text-white">
        <Icon size={22} />
      </div>

      <h3 className="mt-3 text-xl font-bold">{stat.value}</h3>

      <p className="mt-1 text-sm text-gray-700">
        {stat.label}
      </p>
    </article>
  );
};
