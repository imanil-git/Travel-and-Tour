
export const BenefitCard = ({ benefit }) => {
  const Icon = benefit.Icon;
  const Icon1 = benefit.Icon1;
  return (
    <article className="flex items-center gap-3 sm:gap-6 md:gap-10 rounded-2xl bg-gray-500 p-4 text-white">
      <div className="flex w-20 h-24 shrink-0 sm:w-32 sm:h-36 items-center justify-center overflow-hidden rounded-xl bg-white text-brand">
        <Icon size={60} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-4">
        <div className="border-brand bg-brand rounded-full w-12 h-12 flex items-center justify-center">
          <Icon1 size={30} />
        </div>
        <p className="mt-2 text-white/80 text-center">{benefit.label}</p>
      </div>
    </article>
  );
};
