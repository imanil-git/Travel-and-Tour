import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { FaFacebookF, FaInstagram, FaTwitter, FaMap } from "react-icons/fa";
import { RiEmotionLaughLine } from "react-icons/ri";
import { LuMapPinned } from "react-icons/lu";
import { StatCard } from "./StatCard";
import { BenefitCard } from "./BenefitCard";
import { MdOutlineCalendarMonth, MdHeadsetMic } from "react-icons/md";

export const whyChooseUsBenefits = [
  {
    id: 1,
    title: "Local Expertise",
    description:
      "Our Nepal travel experts craft unique experiences with insider knowledge you won't find anywhere else.",
    icon: FaMap,
  },
  {
    id: 2,
    title: "All-in-One Booking",
    description:
      "Book everything in one place — easy, fast, and hassle-free for quick getaways or planned vacations.",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 3,
    title: "Any Time Support",
    description:
      "We're here anytime, anywhere. Get real-time help whenever you need it before, during, or after your trip.",
    icon: MdHeadsetMic,
  },
];

export const whyChooseUsStats = [
  {
    id: 1,
    value: "tenk",
    label: "Happy and Satisfied Travelers",
    icon: RiEmotionLaughLine,
  },
  {
    id: 2,
    value: "tenyrs",
    label: "Proven Travel Industry Experience",
    icon: MdOutlineCalendarMonth,
  },
  {
    id: 3,
    value: "ten",
    label: "Nepal Destinations Covered",
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
              title="Top Destinations"
              description="We give you a good service for tours and travel.You will not regert
          choosing us. There is ten thousand customer that is satisfied with us and they always prefer us"
              className="flex flex-col gap-2 max-w-2xl"
            />

            {/* Social Icons */}
            <div className="mt-5 flex gap-4 max-w-xl">
              <a href="">
                <FaInstagram size={22} />
              </a>
              <a href="">
                <FaTwitter size={22} />
              </a>
              <a href="">
                <FaFacebookF size={22} />
              </a>
            </div>

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
