import React from "react";
import { GalleryHero } from "../sections/gallery/GalleryHero";
import { GalleryCarousel } from "../sections/gallery/GalleryCarousel";

export const Gallery = () => {
  return (
    <div className="bg-slate-950">
      <GalleryHero />
      <GalleryCarousel />
    </div>
  );
};
