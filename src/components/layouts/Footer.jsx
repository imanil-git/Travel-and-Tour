import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#28364c] w-full text-white ">
      <div>
        <div className="p-6 sm:p-10 lg:p-16">
          <h2 className="text-4xl mb-6 md:mb-12">Tour and Travel</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
            <div>
              <h4 className="mb-5 text-3xl font-extrabold">Sitemap</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-lg">Sitemap</li>
                <li className="text-gray-400 text-lg">About Us</li>
                <li className="text-gray-400 text-lg">Packages</li>
                <li className="text-gray-400 text-lg">Flest Plans</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-3xl font-extrabold">Resources</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-lg">Quick Temation</li>
                <li className="text-gray-400 text-lg">Contact Info</li>
                <li className="text-gray-400 text-lg">Teams Resources</li>
                <li className="text-gray-400 text-lg">Steanore Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-3xl font-extrabold">
                Destinations Guides
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-400 text-lg">Pokhara</li>
                <li className="text-gray-400 text-lg">Kathamandu</li>
                <li className="text-gray-400 text-lg">Lumbini</li>
                <li className="text-gray-400 text-lg">Mt.Everest</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="mb-3 text-3xl font-extrabold">Connect With Us.</h4>
              <div className="flex gap-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-600 text-white shadow-sm sm:h-[66px] sm:w-[66px]">
                  <FaFacebook size={38} />
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-600 text-white shadow-sm sm:h-[66px] sm:w-[66px]">
                  <FaTwitter size={38} />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-600 text-white shadow-sm sm:h-[66px] sm:w-[66px]">
                  <FaInstagram size={38} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottoms */}
        <div className="py-4 px-4 sm:px-10 lg:px-16">
          <div className="text-center text-gray-400 font-sans border-t-1 border-gray-400 pt-3">
            &copy; {new Date().getFullYear()} Travel Nepal. All Rigths Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
