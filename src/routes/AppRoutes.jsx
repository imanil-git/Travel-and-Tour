import { NotFoundPage } from "../pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { About } from "../pages/About";
import { Destination } from "../pages/Destination";
import { Contact } from "../pages/Contact";
import { PopularPage } from "../pages/PopularPage";
import { DetailPage } from "../pages/DetailPage";
import BookingPage from "../pages/BookingPage";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<DefaultLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route path="destination" element={<Destination />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="booking/:slug" element={<DetailPage />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* Private Pages */}
      </Routes>
    </div>
  );
};
