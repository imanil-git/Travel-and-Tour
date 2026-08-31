import { ChevronRight } from "lucide-react";
import React from "react";

export const BookingProgessStepper = ({ currentStep = 2 }) => {
  const steps = [
    {
      id: 1,
      label: "Select Package",
    },
    {
      id: 2,
      label: "Customize & Details",
    },
    {
      id: 3,
      label: "Payment & Confirm",
    },
  ];
  return (
    <section className="bg-white rounded-2xl p-6 mb-8 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
        {steps.map((step, idx) => {
          const isActive = step.id === currentStep;
          const isDone = step.id < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : isDone
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {step.id}
                </span>
                <span
                  className={`text-sm ${
                    isActive
                      ? "font-bold text-slate-900"
                      : "font-semibold text-slate-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <ChevronRight className="hidden md:block w-6 h-6 text-slate-300" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
