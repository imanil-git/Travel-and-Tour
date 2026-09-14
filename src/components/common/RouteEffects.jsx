import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMenuStore } from "../../store/useMenuStore";
export function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    useMenuStore.getState().closeMenu();
    const titles = {
      "/": "Discover your next journey",
      "/destination": "Destinations",
      "/popular": "Popular tours",
      "/booking": "Plan your trip",
      "/about": "About",
      "/contact": "Contact",
    };
    document.title = `${titles[pathname] || "Explore Nepal"} | Travel Nepal`;
  }, [pathname]);
  return null;
}
