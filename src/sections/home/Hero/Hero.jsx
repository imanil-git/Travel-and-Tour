import React from "react";
import { HeroContent } from "./HeroContent";
import HeroImage from "../../../assets/HeroPic.jpeg";
import { HeroSearch } from "./HeroSearch";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center">
        <HeroContent />
        <HeroSearch />
      </div>
    </section>
  );
};
