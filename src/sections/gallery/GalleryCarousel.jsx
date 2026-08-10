import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { galleryImages } from "../../data/gallery.js";
import { useState } from "react";

export const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-center text-4xl font-bold text-white">
          Discover Nepal Through Our Lens
        </h1>

        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {galleryImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

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

        {/* <div className="mt-8 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeIndex === index ? "w-6 bg-blue-400" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div> */}

        <div className="mx-auto mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-blue-400 transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / galleryImages.length) * 100}%`,
            }}
          />
        </div>

        <button
          className="gallery-prev absolute -left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-blue-600 md:-left-6"
          aria-label="Previous image"
        >
          <FaArrowLeft />
        </button>

        <button
          className="gallery-next absolute -right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-blue-600 md:-right-6"
          aria-label="Next image"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};
