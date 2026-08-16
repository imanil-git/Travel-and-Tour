import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Tour.webp";
import { TbLogin2 } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMenuStore } from "../../store/useMenuStore";
import { MobileMenu } from "../common/MobileMenu";

export const Header = () => {
  const { toogleMenu, isMenuOpen } = useMenuStore();
  console.log(isMenuOpen);
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-gray-400 font-semibold"
        : "text-black hover:text-gray-700"
    }`;

  return (
    <>
      <nav className="w-full bg-white">
        <div className="mx-auto flex justify-between items-center h-20 text-center">
          {/* Left Side */}
          <div className=" flex items-center gap-8">
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap font-valve">
              Tour And Travel
            </span>
            <ul className="hidden items-center gap-4 md:flex">
              <li>
                <NavLink className={navLinkClass} to="/" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/contact">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden relative md:flex items-center gap-6">
            <input
              type="text"
              id="input-group-1"
              placeholder="Search Destinations"
              className="bg-[#efeff1] rounded-4xl sm:w-72 lg:w-96 px-5 py-2.5"
            />
            <IoSearch className="absolute text-2xl right-44 text-gray-400" />
            <button className="bg-[#28364c] border border-[#28364c] w-32 text-center text-white rounded-4xl p-3">
              Book Now
            </button>
          </div>
          <button
            type="button"
            onClick={toogleMenu}
            className="bg-[#28364c] border border-[#28364c] text-center text-white rounded-full p-2 text-xl md:hidden"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </>
  );
};
