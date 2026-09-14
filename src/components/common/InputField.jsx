import { useId } from "react";

export const InputField = ({ label, id, name, type = "text", textarea = false, error, className = "", ...props }) => {
  const generatedId = useId();
  const fieldId = id || name || generatedId;
  const Element = textarea ? "textarea" : "input";
  return <div className="space-y-1.5">
    <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-800">{label}</label>
    <Element id={fieldId} name={name} {...(textarea ? { rows: 4 } : { type })}
      aria-invalid={error ? true : undefined} aria-describedby={error ? `${fieldId}-error` : undefined}
      className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 ${className}`} {...props} />
    {error && <p id={`${fieldId}-error`} className="text-sm text-red-700">{error}</p>}
  </div>;
};
