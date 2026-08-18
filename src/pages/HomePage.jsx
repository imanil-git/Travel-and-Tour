import React from "react";
import { Hero } from "../components/home/Hero.jsx";
import { WhyChooseUs } from "../components/home/WhyChooseUs.jsx";
import { TopDestinations } from "../components/home/TopDestinations.jsx";
import { Package } from "../components/home/Package.jsx";

export const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <WhyChooseUs />
        <TopDestinations />
        <Package />
      </div>
    </>
  );
};
