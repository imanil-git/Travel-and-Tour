import { SectionTitle } from "../common/SectionTitle";
import {
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { BenefitCard } from "./BenefitCard";
import { BiHappyAlt } from "react-icons/bi";
import { GiCoveredJar } from "react-icons/gi";

const whyChooseUsBenefits = [

  {
    id: 1,
    Icon: FaUsers,
    Icon1: BiHappyAlt,
    label: "Happy Travelers",
  },
  {
    id: 2,
    Icon: FaMapMarkedAlt,
    Icon1: GiCoveredJar,
    label: "Destinations Covered",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="w-full px-4 sm:px-10 lg:px-16">
        {/* Main Content */}
        <div className="grid gap-2 md:gap-4 items-center md:grid-cols-5">
          {/* Left Content */}
          <div className="md:col-span-3  flex flex-col gap-4">
            <SectionTitle
              title="Why Choose Us?"
              description="Explore Nepal with thoughtfully planned itineraries, local insight and flexible trip options."
              className="flex flex-col gap-2 max-w-2xl"
            />


          </div>

          {/* Rights Benefits */}
          <div className="md:col-span-2 gap-6 flex flex-col">
            {/* Benefit 1 */}
            {whyChooseUsBenefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
