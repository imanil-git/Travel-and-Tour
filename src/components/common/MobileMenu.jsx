import { IoSearch } from "react-icons/io5";
import { useMenuStore } from "../../store/useMenuStore";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export const MobileMenu = () => {
  const { toogleMenu, closeMenu } = useMenuStore();
  const navLinkClass = ({ isActive }) => {
    `transition-colors duration-200 ${
      isActive
        ? "text-gray-400 font-semibold"
        : "text-black hover:text-gray-700"
    }`;
  };
  return (
    <section className="flex flex-col gap-4 mb-4 md:hidden">
      <div className="flex flex-col gap-6 md:justify-between">
        <div className="relative w-fit">
          <input
            type="text"
            id="input-group-1"
            placeholder="Search Destinations"
            className="bg-[#efeff1] rounded-4xl w-80 px-5 py-2.5"
          />
          <IoSearch className="absolute text-2xl right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <Button variant="primary" className="w-28">
          Book Now
        </Button>
      </div>
      <ul className="items-center gap-4">
        <li>
          <NavLink className={navLinkClass} to="/" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClass} to="/destination">
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClass} to="/popular">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClass} to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkClass} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </section>
  );
};
