import React from "react";

export const Button = ({ children, variant, className }) => {
  const styles = {
    primary: "bg-[#28364c] border-[#28364c] text-white",
    secondary: "bg-white border-white text-black",
    teritary: "text-white"
  };

  return (
    <button
      className={`border text-center rounded-4xl p-3 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
