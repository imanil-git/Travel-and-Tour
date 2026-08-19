import React from "react";
import { SectionTitle } from "../components/common/SectionTitle";
import image from "../assets/destinations/Chitwan.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { DestinationCard } from "../components/ui/DestinationCard";
import { destinations } from "../data/destination";

export const Destination = () => {
  return (
    <section className="py-10">
      <div>
        <SectionTitle
          title="Total Destinations"
          description="Find your own destination to choose your next journey and
              enjoy your journey with us"
          className="flex items-center justify-between"
        />
        <div>
          {destinations.map((item) => (
            <DestinationCard key={item.id} destination={item} />
          ))}
        </div>
        {/* <div>
          <div className="w-1/4 h-96">
            <img src={image} alt="" className="object-cover" />
          </div>
          <div className="flex gap-2">
            <FaLocationDot className="text-red-600" />
            <p>Chitwan, Nepal</p>
          </div>
          <h4 className="text-3xl">National Park</h4>
        </div> */}
      </div>
    </section>
  );
};
