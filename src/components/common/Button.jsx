import React from "react";

export const Button = ({ children, variant, className }) => {
  const styles = {
    primary: "bg-[#28364c] border-[#28364c] text-white p-3",
    secondary: "bg-white border-white text-black p-3",
    teritary: "text-white p-2.5"
  };

  return (
    <button
      className={`border text-center rounded-4xl ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
