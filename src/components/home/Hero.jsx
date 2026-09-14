import HeroImage from "../../assets/HeroPic.jpg";
import { Button } from "../common/Button";

export const Hero = () => {
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
          <p className="text-white max-w-xl text-sm sm:text-base text-left">
            Discover breathtaking destinations across Nepal with curated
            tours and local insights and hassle-free planning all in one
            platform.
          </p>
          <div className="flex gap-2 lg:gap-4">
            <Button to="/booking" variant="secondary" className="text-sm sm:text-base px-4">
              Plan Your Trip
            </Button>
            <Button to="/destination" variant="teritary" className="text-sm px-4 sm:text-base">
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
