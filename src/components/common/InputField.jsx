import React from "react";

const commonClasses =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#18263b] foxus:ring-1 focus:ring[#18263b]";

export const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  textarea = false,
}) => {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-semibold text-[#222]">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={`${commonClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={commonClasses}
        />
      )}
    </div>
  );
};
