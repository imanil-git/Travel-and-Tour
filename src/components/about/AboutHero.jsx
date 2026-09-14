import HeroImage from "../../assets/HeroPic.jpg";

export const AboutHero = () => {
  return (
    <section
      className="w-full min-h-[70vh] bg-center bg-cover bg-no-repeat rounded-3xl px-4 sm:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="flex flex-col items-start text-center gap-2">
          <span className="text-white uppercase text-5xl font-extrabold sm:text-7xl lg:text-8xl">
            Discover Nepal
          </span>
        </div>
      </div>
    </section>
  );
};
