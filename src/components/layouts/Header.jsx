import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Tour.webp";
import { TbLogin2 } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMenuStore } from "../../store/useMenuStore";
import { MobileMenu } from "../common/MobileMenu";
import { Button } from "../common/Button";

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
          <div className=" flex items-center gap-4 lg:flex lg:gap-6">
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap font-valve">
              Tour And Travel
            </span>
            <ul className="hidden items-center gap-4 md:flex md:gap-3">
              <li>
                <NavLink className={navLinkClass} to="/" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/about">
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/about">
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink className={navLinkClass} to="/about">
                  Blog
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
          <div className="hidden md:flex items-center gap-4">
            <div className="relative w-fit">
              <input
              type="text"
              id="input-group-1"
              placeholder="Search Destinations"
              className="bg-[#efeff1] rounded-4xl sm:w-56 sm:px-4 lg:w-64 px-5 py-2.5"
            />
            <IoSearch className="absolute text-2xl sm:right-4 right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <Button variant="primary" className="w-32">
              Book Now
            </Button>
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
