import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1 pt-16"><Outlet /></main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
