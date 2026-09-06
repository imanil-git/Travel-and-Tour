import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactIcons = [
  {
    id: 1,
    icon: FaLocationDot,
    label: "Location",
  },
  {
    id: 2,
    icon: FaPhone,
    label: "Phone",
  },
  {
    id: 3,
    icon: FaEnvelope,
    label: "Email",
  },
];

export const ContactIcons = () => {
  return (
    <div className="flex gap-5">
      {contactIcons.map(({ id, icon: Icon, label }) => (
        <div
          key={id}
          title={label}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#18263b] text-white shadow-sm sm:h-[66px] sm:w-[66px]"
        >
          <Icon size={27} />
        </div>
      ))}
    </div>
  );
};
