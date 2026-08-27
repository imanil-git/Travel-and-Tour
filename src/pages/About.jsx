import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { WhyChooseUs } from "../components/about/WhyChooseUs";
import { TeamMember } from "../components/about/TeamMember";
import { TeamMeme } from "../components/about/TeamMeme";

export const About = () => {
  return (
    <div>
      <AboutHero />
      <WhyChooseUs />
      <TeamMember />
      <TeamMeme />
    </div>
  );
};
