import React from "react";
import { Hero } from "../components/home/Hero.jsx";
import { WhyChooseUs } from "../components/home/WhyChooseUs.jsx";
import { TopDestinations } from "../components/home/TopDestinations.jsx";

export const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <WhyChooseUs />
        <TopDestinations />
      </div>
    </>
  );
};
