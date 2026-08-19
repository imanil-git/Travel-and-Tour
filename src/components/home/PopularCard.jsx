import React from "react";

export const PopularCard = ({ package: packageData }) => {
  const Icon = packageData.Icon;
  return (
    <div
      className="group relative h-[60vh] overflow-hidden rounded-2xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${packageData.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40">
        <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
          <div>
            <div className="border-white/50 bg-white/10 w-12 h-12 p-2 mb-4 flex justify-center items-center rounded-full backdrop-blur-sm">
              <Icon className="text-white/80 text-3xl" />
            </div>
            <h3 className="max-w-44 font-heading text-xl font-semibold leading-tight">
              {packageData.title}
            </h3>
          </div>
          <p className="leading-tight text-white/90">
            {packageData.description}
          </p>
        </div>
      </div>
    </div>
  );
};
