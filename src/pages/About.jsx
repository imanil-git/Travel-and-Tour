import { AboutHero } from "../components/about/AboutHero";
import { WhyChooseUs } from "../components/about/WhyChooseUs";
import { TeamMember } from "../components/about/TeamMember";
import { TeamSection } from "../components/about/TeamSection";

export const About = () => {
  return (
    <div>
      <AboutHero />
      <WhyChooseUs />
      <TeamMember />
      <TeamSection />
    </div>
  );
};
