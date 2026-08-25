import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { About } from "../pages/About";
import { Destination } from "../pages/Destination";
import { Service } from "../pages/Service";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="destination" element={<Destination />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
        </Route>
        {/* Private Pages */}
      </Routes>
    </div>
  );
};
