import React from "react";
import HeroImage from "../../assets/HeroPic.jpg";

export const DestinationHero = () => {
  return (
    <section
      className="relative flex min-h-[55vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[55px] text-blue-300">
          Explore Nepal
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Discover Amazing Destinations
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200">
          From the majestic Himalayas to peaceful lakes and anicent cities,
          discover places that will make your journey unforgettable.
        </p>
      </div>
    </section>
  );
};
