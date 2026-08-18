import React from "react";
import { Button } from "../common/Button";
import image from "../../assets/PopularCard.jpg";

import { ImBasecamp } from "react-icons/im";
import { MdTempleBuddhist } from "react-icons/md";
import { PopularCard } from "./PopularCard";
import { packageData } from "../../data/package";

export const Package = () => {
  return (
    <section className="py-16">
      <div className="max-w-full px-10 sm:px-18">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Introduction Card */}
          <div className="col-span-2 flex min-h-80 flex-col justify-between rounded-2xl bg-slate-500 p-7 text-white">
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                Tour Packages
              </h2>
              <p className="mt-2 max-w-sm leading-relaxed text-white/90">
                Affordable, customizable, and unforgettable adventures.
              </p>
            </div>
            <Button className="w-52" variant="primary">
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
