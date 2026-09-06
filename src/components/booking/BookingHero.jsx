import { Breadcrumb } from "./common/Breadcrumb";

export const BookingHero = ({ bookingData }) => {
  return (
    <section
      className="relative h-[50vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-3xl px-4 sm:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${bookingData.image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <span className="text-4xl sm:text-5xl md:text-6xl font-medium mb-5 tracking-wide">
          {bookingData.name}
        </span>

        <Breadcrumb bookingTitle={bookingData.name} />
      </div>
    </section>
  );
};
