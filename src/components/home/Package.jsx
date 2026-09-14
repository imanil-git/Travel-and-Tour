import { Button } from "../common/Button";
import { PopularCard } from "./PopularCard";
import Boudha from "../../assets/popular/Boudhanath.jpg"
import BaseCamp from "../../assets/popular/BaseCamp.jpg"
import { ImBasecamp } from "react-icons/im";
import { MdTempleBuddhist } from "react-icons/md";

const packageData = [
  {
    id: 1,
    image: BaseCamp,
    title: "Mountain Base Camp",
    Icon: ImBasecamp,
    description: "Explore mountain trails, sweeping Himalayan views and traditional villages.",
  },
  {
    id: 2,
    image: Boudha,
    title: "Heritage",
    Icon: MdTempleBuddhist,
    description: "Discover ancient temples, living traditions and Nepal’s cultural heritage.",
  }
];

export const Package = () => {
  return (
    <section className="py-24">
      <div className="max-w-full px-4 sm:px-10 md:16">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Introduction Card */}
          <div className="md:col-span-2 flex h-[60vh] flex-col justify-between rounded-2xl bg-slate-400 p-7 text-white">
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                Tour Packages
              </h2>
              <p className="mt-2 max-w-sm leading-relaxed text-white/90">
                Affordable, customizable, and unforgettable adventures.
              </p>
            </div>
            <Button to="/destination" className="w-52" variant="primary">
              Browse all packages
            </Button>
          </div>

          {/* Package Cards */}
          {packageData.map((item) => (
            <PopularCard key={item.id} package={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
