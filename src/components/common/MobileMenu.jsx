import { NavLink } from "react-router-dom";
import { useMenuStore } from "../../store/useMenuStore";
import { navigation } from "../../data/navigation";
import { DestinationSearch } from "./DestinationSearch";
import { Button } from "./Button";
export const MobileMenu = () => {
  const closeMenu = useMenuStore((state) => state.closeMenu);
  return <nav id="mobile-navigation" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") { closeMenu(); document.querySelector('[aria-controls="mobile-navigation"]')?.focus(); } }} className="mt-5 space-y-4 rounded-2xl border border-slate-200 p-4 xl:hidden">
    <DestinationSearch onSearch={closeMenu} />
    <div className="flex flex-col gap-1">{navigation.map(({to, label}) => <NavLink key={to} to={to} end={to === "/"} onClick={closeMenu} className={({ isActive }) => `rounded-lg px-3 py-2 ${isActive ? "bg-slate-100 font-bold" : "text-slate-600"}`}>{label}</NavLink>)}</div>
    <Button to="/booking" onClick={closeMenu}>Plan a trip</Button>
  </nav>;
};
