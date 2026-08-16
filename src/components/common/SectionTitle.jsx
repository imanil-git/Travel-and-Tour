import React from "react";

export const SectionTitle = ({ title, description, className }) => {
  return (
    <>
      <h2 className="font-heading text-2xl md:text-3xl">{title}</h2>
      {description && <p className="mt-4 max-w-xl leading-6">{description}</p>}
    </>
  );
};
