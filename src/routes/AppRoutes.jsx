import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Destination } from "../pages/Destination";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { Gallery } from "../pages/Gallery";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="destination" element={<Destination />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private Pages */}
      </Routes>
    </div>
  );
};
