import React from "react";
import { HeroContent } from "./HeroContent";
import HeroImage from "../../../assets/HeroPic.jpeg";

export const Hero = () => {
  return (
    <section
      className="relative"
      style={{
        background: `url(${HeroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <HeroContent />
    </section>
  );
};
