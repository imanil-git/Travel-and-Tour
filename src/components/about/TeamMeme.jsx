// import React from "react";
// import LandScape from "../../assets/Team Member/Landscape.jpg";

// export const TeamMeme = () => {
//   return (
//     <section className="min-h-screen py-24">
//       <div className="w-full px-4 sm:px-10 lg:px-16">
//         <h2 className="font-heading text-2xl md:text-3xl mb-10">Team Members</h2>
//         <div className="grid grid-cols-3 h-96 bg-gray-400 rounded-4xl overflow-hidden gap-10 mb-10">
//           <div className="col-span-1 rounded-4xl overflow-hidden">
//             <img src={LandScape} alt="Landscape.jpg" className="object-cover w-full h-full" />
//           </div>
//           <div className="col-span-2 text-white flex flex-col items-start justify-center gap-6">
//             <h1 className="text-2xl md:text-3xl">Team Thoughts</h1>
//             <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, reprehenderit numquam similique voluptates facere assumenda mollitia doloribus inventore repudiandae ab earum dicta blanditiis voluptatem. Vel in ducimus nisi consequatur magni.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import React from "react";
import LandScape from "../../assets/Team Member/Landscape.jpg";

export const TeamMeme = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">
            Our People
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            Team Members
          </h2>
        </div>

        {/* Main Team Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[65vh] bg-gray-400 rounded-4xl overflow-hidden">
          
          {/* Image */}
          <div className="lg:col-span-1 min-h-[400px] lg:min-h-0">
            <img
              src={LandScape}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            
            <span className="text-sm uppercase tracking-[0.2em] mb-4">
              Meet the team
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-6">
              Team Thoughts
            </h1>

            <p className="max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus, reprehenderit numquam similique voluptates facere
              assumenda mollitia doloribus inventore repudiandae ab earum
              dicta blanditiis voluptatem.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-lg">
                Timesh Bro
              </p>

              <p className="text-sm text-gray-200 mt-1">
                Creative Team Member
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};