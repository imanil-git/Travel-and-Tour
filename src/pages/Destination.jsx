import React from "react";
import { SectionTitle } from "../components/common/SectionTitle";

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
      </div>
    </section>
  );
};
