import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { Button } from "../common/Button.jsx";
import Pokhara from "../../assets/destinations/Pokhara.jpg";
import Kathmandu from "../../assets/destinations/Kathmandu.jpg";
import Mustang from "../../assets/destinations/Mustang.jpg";
import Everest from "../../assets/destinations/Everest.jpg";
import Chitwan from "../../assets/destinations/Chitwan.jpg";
import Annapurna from "../../assets/destinations/Annapurna.jpg";
export const galleryImages = [
  { id: 1, title: "Peaceful Pokhara", category: "Nature", image: Pokhara },
  { id: 2, title: "Mount Everest", category: "Mountain", image: Everest },
  { id: 3, title: "Mystical Mustang", category: "Adventure", image: Mustang },
  { id: 4, title: "Kathmandu Heritage", category: "Culture", image: Kathmandu },
  { id: 5, title: "Wild Chitwan", category: "Wildlife", image: Chitwan },
  { id: 6, title: "Annapurna Trails", category: "Trekking", image: Annapurna },
];

export const TopDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
          modules={[Autoplay, Navigation]}
          grabCursor={true}
          navigation={{
            nextEl: ".gallery-next",
            prevEl: ".gallery-prev",
          }}
          slidesPerView={1}
          centeredSlides={false}
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
                <div className="overflow-hidden">
                  <img
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
