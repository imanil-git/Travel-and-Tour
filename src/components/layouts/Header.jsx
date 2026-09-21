import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useMenuStore } from "../../store/useMenuStore";
import { MobileMenu } from "../common/MobileMenu";
import { Button } from "../common/Button";
import { DestinationSearch } from "../common/DestinationSearch";
import { navigation } from "../../data/navigation";
export const Header = () => {
  const { toggleMenu, isMenuOpen } = useMenuStore();
  return (
    <header className="bg-white py-5">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between gap-5"
      >
        <Link to="/" className="shrink-0 text-lg font-bold tracking-tight">
          Tour and Travel<span className="text-emerald-700">.</span>
        </Link>
        <div className="hidden items-center gap-5 xl:flex">
          {navigation.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-emerald-800 font-bold" : "text-slate-600 hover:text-slate-900"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          <DestinationSearch />
          <Button to="/booking" className="shrink-0 text-sm">
            Plan a trip
          </Button>
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="rounded-full bg-slate-900 p-3 text-white xl:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
};
