import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { SectionTitle } from "../common/SectionTitle";
import { Button } from "../common/Button.jsx";
import Pokhara from "../../assets/destinations/Pokhara.webp";
import Kathmandu from "../../assets/destinations/Kathmandu.webp";
import Mustang from "../../assets/destinations/Mustang.webp";
import Everest from "../../assets/destinations/Everest.webp";
import Chitwan from "../../assets/destinations/Chitwan.webp";
import Annapurna from "../../assets/destinations/Annapurna.webp";
const galleryImages = [
  { id: 1, title: "Peaceful Pokhara", category: "Nature", image: Pokhara },
  { id: 2, title: "Mount Everest", category: "Mountain", image: Everest },
  { id: 3, title: "Mystical Mustang", category: "Adventure", image: Mustang },
  { id: 4, title: "Kathmandu Heritage", category: "Culture", image: Kathmandu },
  { id: 5, title: "Wild Chitwan", category: "Wildlife", image: Chitwan },
  { id: 6, title: "Annapurna Trails", category: "Trekking", image: Annapurna },
];

export const TopDestinations = () => {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [paused, setPaused] = useState(false);
  const swiperRef = useRef(null);
  const shouldAutoplay = !reducedMotion && !paused;
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;
    if (shouldAutoplay) swiper.autoplay.start();
    else swiper.autoplay.stop();
  }, [shouldAutoplay]);
  return (
    <section className="px-4 sm:px-10 lg:px-16 lg:py-10 py-10 bg-gray-300 rounded-4xl">
      <div className="relative mx-auto w-full px-6">
        <SectionTitle
          title="Top Destinations"
          description={
            <>
              Find your own destination to choose your next journey and enjoy
              your journey with us
            </>
          }
          className="flex flex-col items-start justify-center sm:flex-row sm:items-center sm:justify-between mb-8"
        />

        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; if (!shouldAutoplay) swiper.autoplay.stop(); }}
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          slidesPerView={1}
          centeredSlides={false}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          slidesPerGroup={1}
          spaceBetween={26}
          loop={true}
          speed={reducedMotion ? 0 : 600}
          autoplay={{
            enabled: shouldAutoplay,
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
          }}
        >
          {galleryImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                loading="lazy"
                decoding="async"
                    src={item.image}
                    alt={item.title}
                    className="h-[55vh] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <span className="inline-block rounded-full bg-blue-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" disabled={reducedMotion} aria-pressed={paused || reducedMotion}
            onClick={() => setPaused((value) => !value)} className="rounded-full border border-brand px-4 py-2 text-sm text-brand">
            {reducedMotion ? "Autoplay off: reduced motion" : paused ? "Play slideshow" : "Pause slideshow"}
          </button>
          <button
            className="gallery-prev flex h-12 w-12 items-center justify-center rounded-full border text-brand border-brand backdrop-blur-md transition duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>

          <button
            className="gallery-next flex h-12 w-12 items-center justify-center rounded-full border text-brand border-brand backdrop-blur-md transition duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>
          <Button to="/destination" variant="primary" className="w-32">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};
