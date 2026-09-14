import { booking } from "../../data/bookingData";
import { SectionTitle } from "../common/SectionTitle";
import { FaMap } from "react-icons/fa";
import { RiEmotionLaughLine } from "react-icons/ri";
import { LuMapPinned } from "react-icons/lu";
import { StatCard } from "./StatCard";
import { BenefitCard } from "./BenefitCard";
import { MdOutlineCalendarMonth, MdHeadsetMic } from "react-icons/md";

const whyChooseUsBenefits = [
  {
    id: 1,
    title: "Local Expertise",
    description:
      "Our Nepal travel experts craft unique experiences with insider knowledge you won't find anywhere else.",
    icon: FaMap,
  },
  {
    id: 2,
    title: "Flexible Planning",
    description:
      "Compare destinations and customize a trip preview for a quick getaway or a longer adventure.",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 3,
    title: "Clear Itineraries",
    description:
      "Review each day of your journey, included experiences and group sizes before making your plans.",
    icon: MdHeadsetMic,
  },
];

const whyChooseUsStats = [
  {
    id: 1,
    value: "Local",
    label: "Destination insight",
    icon: RiEmotionLaughLine,
  },
  {
    id: 2,
    value: "Flexible",
    label: "Trip planning",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 3,
    value: booking.length,
    label: "Featured destinations",
    icon: LuMapPinned,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="w-full px-4 sm:px-10 lg:px-16">
        {/* Main Content */}
        <div className="grid gap-4 items-center md:grid-cols-5">
          {/* Left Content */}
          <div className="md:col-span-3  flex flex-col gap-4">
            <SectionTitle
              title="Why Choose Us?"
              description="Explore Nepal with thoughtfully planned itineraries, local insight and flexible trip options."
              className="flex flex-col gap-2 max-w-2xl"
            />



            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 mb-4 gap-6 max-w-xl">
              {whyChooseUsStats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
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
