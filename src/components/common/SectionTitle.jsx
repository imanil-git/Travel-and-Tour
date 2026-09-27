
export const SectionTitle = ({ title, description, className, as: Heading = "h2" }) => {
  return (
    <div className={className}>
      <Heading className="font-heading text-2xl md:text-3xl">{title}</Heading>
      {description && <p className="mt-4 max-w-xl leading-6">{description}</p>}
    </div>
  );
};
