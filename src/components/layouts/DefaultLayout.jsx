import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative">
        {/* Header */}
        <Header />

        {/* Main */}
        <main>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
