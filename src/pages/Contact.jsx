import React from "react";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";

export const Contact = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-white min-h-[800px] px-4 sm:px-10 lg:px-16">
        {/* Map Background */}
        <div className="hidden md:block absolute -bottom-32 -right-60 w-[430px] h-[430px] overflow-hidden rounded-full lg:h-[500px] lg:w-[500px]">
          <iframe
            title="Nepal Map"
            src="https://www.google.com/maps?q=Nepal&z=6&output=embed"
            className="h-full w-h-full border-0"
            loading="lazy"
          />
        </div>

        {/* White Overlay */}
        <div className=" absolute inset-0 z-0 bg-white/20" />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-10 lg:px-16">
          {/* Heading */}
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#111] sm:text-4xl lg:text-[42px]">
              Get in touch with Tour and Travel
            </h1>

            <p className="mt-2 text-sm leading-5 text-[#222] sm:text-base">
              Have questions? Ready to plan your perfect Nepal adventure?
              <br />
              We're here to help!
            </p>
          </div>

          {/* Contact Content */}
          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:items-start">
            {/* Left */}
            <ContactInfo />

            {/* Right */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Map */}
      <section>
        <h2 className=" text-2xl md:text-3xl font-semibold text-[#111]">
          Contact Map
        </h2>

        <div className="h-96 mt-10 md:mt-3 w-full overflow-hidden bg-white sm:h-[400px]">
          <iframe
            title="TOUR AND TRAVEL Location Map"
            src="https://www.google.com/maps?q=Nepal&z=7&output=embed"
            className="h-full w-full border-0 rounded-2xl"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};
