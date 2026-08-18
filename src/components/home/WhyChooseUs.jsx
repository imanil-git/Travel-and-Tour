import React from "react";
import { SectionTitle } from "../common/SectionTitle";
import { FaFacebookF, FaInstagram, FaTwitter, FaMap } from "react-icons/fa";
import { MdOutlineCalendarMonth, MdHeadsetMic } from "react-icons/md";
import { RiEmotionLaughLine } from "react-icons/ri";
import { LuMapPinned } from "react-icons/lu";
import { whyChooseUsBenefits, whyChooseUsStats } from "../../data/WhyChooseUs";
import { StatCard } from "./StatCard";
import { BenefitCard } from "./BenefitCard";

export const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="w-full px-12 sm:px-20">
        {/* Main Content */}
        <div className="grid gap-16 items-center md:grid-cols-2">
          {/* Left Content */}
          <div>
            <SectionTitle
              title="Why Choose us?"
              description="We give you a good service for tours and travel.You will not regert
          choosing us. There is ten thousand customer that is satisfied with us and they always prefer us"
              className="flex flex-col gap-2"
            />

            {/* Social Icons */}
            <div className="mt-5 flex gap-4">
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
            <div className="mt-12 grid grid-cols-3 gap-6">
              {whyChooseUsStats.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </div>

          {/* Rights Benefits */}
          <div className="flex flex-col gap-4">
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
