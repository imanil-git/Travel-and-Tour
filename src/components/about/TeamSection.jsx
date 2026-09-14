import LandScape from "../../assets/Team Member/Landscape.jpg";

export const TeamSection = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
            Travel thoughtfully
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            Our approach
          </h2>
        </div>

        {/* Main Team Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[65vh] bg-gray-400 rounded-4xl overflow-hidden">
          
          {/* Image */}
          <div className="lg:col-span-1 min-h-[400px] lg:min-h-0">
            <img
                loading="lazy"
                decoding="async"
              src={LandScape}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            
            <span className="text-sm uppercase tracking-[0.2em] mb-4">
              Made for curious travelers
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-6">
              Every journey starts with curiosity
            </h1>

            <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
              A memorable journey begins with thoughtful planning. Explore our destination guides, compare the experiences that matter to you and build a trip around your interests.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-lg">
                Travel Nepal
              </p>

              <p className="text-sm text-gray-200 mt-1">
                Explore. Plan. Discover.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};