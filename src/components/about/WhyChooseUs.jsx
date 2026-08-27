import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMap,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { RiEmotionLaughLine } from "react-icons/ri";
import { LuMapPinned } from "react-icons/lu";
import { MdOutlineCalendarMonth, MdHeadsetMic } from "react-icons/md";
import { BenefitCard } from "./BenefitCard";
import { BiHappyAlt } from "react-icons/bi";
import { GiCoveredJar } from "react-icons/gi";

export const whyChooseUsBenefits = [

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
              description="We give you a good service for tours and travel.You will not regert
          choosing us. There is ten thousand customer that is satisfied with us and they always prefer us"
              className="flex flex-col gap-2 max-w-2xl"
            />

            {/* Social Icons */}
            <div className="mt-5 flex gap-4 max-w-xl mb-14">
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
