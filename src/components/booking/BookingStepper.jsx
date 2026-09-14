import React from 'react';
import { Check } from 'lucide-react';
import { useBookingStore } from '../../store/useBookingStore';

const STEPS = [
  { id: 1, title: 'Pick Destination' },
  { id: 2, title: 'Customize Tour' },
  { id: 3, title: 'Confirm & Travel' }
];

export function BookingStepper() {
  const step = useBookingStore((s) => s.step);

  return (
    <div className="flex items-center justify-between w-full max-w-xl mx-auto mb-8 bg-white p-4 rounded-2xl border border-slate-200">
      {STEPS.map((s, idx) => {
        const isDone = step > s.id;
        const isCurrent = step === s.id;

        return (
          <React.Fragment key={s.id}>
            <div className="flex items-center space-x-2">
              <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                isDone ? 'bg-slate-900 text-white' : isCurrent ? 'bg-slate-900 text-white ring-4 ring-slate-100' : 'bg-slate-100 text-slate-400'
              }`}>
                {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : s.id}
              </div>
              <span className={`text-xs font-semibold ${isCurrent ? 'text-slate-900' : 'text-slate-400'}`}>
                {s.title}
              </span>
            </div>
            {idx < STEPS.length - 1 && <div className="h-0.5 flex-1 mx-3 bg-slate-200"></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
}