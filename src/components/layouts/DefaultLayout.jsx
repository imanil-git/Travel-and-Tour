import { RouteEffects } from "../common/RouteEffects";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white mx-4 lg:mx-8">
      <RouteEffects />
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
      <div className="relative flex-1">
        {/* Header */}
        <Header />

        {/* Main */}
        <main id="main-content">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
