import React from "react";
import HeroImage from "../../assets/HeroPic.jpg";

export const GalleryHero = () => {
  return (
    <section
      className="relative flex min-h-[55vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[5px] text-blue-300">
          Travel Memories
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">Explore Our Gallery</h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
          Take a visual journey through the mountains, cities, wildfire, culture
          and unforgettable experiences of Nepal.
        </p>
      </div>
    </section>
  );
};
