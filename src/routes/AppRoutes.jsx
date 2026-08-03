import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Route index element={<HomePage />} />
            </DefaultLayout>
          }
        />

        {/* Private Pages */}
      </Routes>
    </div>
  );
};
