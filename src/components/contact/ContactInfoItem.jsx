import React from "react";

export const ContactInfoItem = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex items-start gap-4">
      {/* Icon */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ebebee] text-[#18263b]">
        <Icon size={19} />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-bold leading-tight text-[#151515]">
          {title}
        </h3>
        <div className="mt-1 text-sm leading-5 text-[#222]">{children}</div>
      </div>
    </div>
  );
};
