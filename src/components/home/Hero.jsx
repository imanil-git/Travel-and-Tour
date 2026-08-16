import HeroImage from "../../assets/HeroPic.jpg";

export const Hero = () => {
  return (
    <section
      className="w-full bg-center bg-cover bg-no-repeat rounded-3xl h-96 px-6 sm:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-start text-center gap-2">
          <span className="text-white uppercase text-5xl font-extrabold sm:text-7xl lg:text-9xl">
            Wander<sub className="text-sm">ph</sub>
          </span>
          <p className="text-white max-w-xl sm:text-base text-left">
            Discover breathtaking destinations across Philippines with curated
            tours and locals insights and hassle-free planning all in one
            platform.
          </p>
          <div className="flex gap-4">
            <button className="bg-white border border-black w-40 text-center text-black rounded-4xl p-2">
              Plan Your Trip
            </button>
            <button className="border w-48 text-center text-white rounded-4xl p-2">
              Explore Destinations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
