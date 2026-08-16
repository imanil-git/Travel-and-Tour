import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { galleryImages } from "../../data/gallery.js";
import { useState } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { Button } from "../common/Button.jsx";

export const TopDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-10 px-14 bg-gray-300 rounded-4xl">
      <div className="relative mx-auto w-full px-6">
        <SectionTitle
          title="Top Destinations"
          description={
            <>
              Find your own destination to choose your next journey <br /> and
              enjoy your journey with us
            </>
          }
          className="flex items-center justify-between mb-8"
        />

        <Swiper
          modules={[Autoplay, Navigation]}
          // effect="coverflow"
          grabCursor={true}
          // onSlideChange={(swiper) => {
          //   setActiveIndex(swiper.realIndex);
          // }}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          slidesPerView={1}
          centeredSlides={false} // onSlideChange={(swiper) => {
          //   setActiveIndex(swiper.realIndex);
          // }}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          slidesPerGroup={1}
          spaceBetween={26}
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
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
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

        {/* <div className="mx-auto mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-blue-400 transition-all duration-500"
            style={{
              width: `${((activeIndex + 1) / galleryImages.length) * 100}%`,
            }}
          />
        </div> */}

        <div className="mt-6">
          <button
            className="gallery-prev absolute right-20 flex h-12 w-12 items-center justify-center rounded-full border text-[#28364c] border-[#28364c] backdrop-blur-md transition duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>

          <button
            className="gallery-next absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border text-[#28364c] border-[#28364c] backdrop-blur-md transition duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>
          <Button variant="primary" className="w-32">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
};
