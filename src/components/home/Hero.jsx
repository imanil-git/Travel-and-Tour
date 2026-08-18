import HeroImage from "../../assets/HeroPic.jpg";
import { Button } from "../common/Button";

export const Hero = () => {
  return (
    <section
      className="w-full bg-center bg-cover bg-no-repeat rounded-3xl h-96 px-4 sm:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-start text-center gap-2">
          <span className="text-white uppercase text-5xl font-extrabold sm:text-7xl lg:text-9xl">
            Wander<sub className="text-sm">ph</sub>
          </span>
          <p className="text-white max-w-xl text-sm sm:text-base text-left">
            Discover breathtaking destinations across Philippines with curated
            tours and locals insights and hassle-free planning all in one
            platform.
          </p>
          <div className="flex gap-2 lg:gap-4">
            <Button variant="secondary" className="w-36 lg:w-40">
              Plan Your Trip
            </Button>
            <Button variant="teritary" className="w-fit lg:w-48 text-base">
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
