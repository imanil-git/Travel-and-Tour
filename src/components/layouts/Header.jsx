import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Tour.webp";
import { TbLogin2 } from "react-icons/tb";

export const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-white font-semibold" : "text-orange-500 hover:text-white"
    }`;

  return (
    <nav className="bg-black/20 fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8 bg-white" alt="Tours and Travel" />
          <span className="self-center text-xl text-heading font-semibold text-white whitespace-nowrap">
            Tours and Travel
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={navLinkClass}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className={navLinkClass}>
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button className="flex items-center bg-orange-500 text-white px-6 py-2 rounded-2xl">
                  <span>LogIn</span>
                  <TbLogin2 />
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
