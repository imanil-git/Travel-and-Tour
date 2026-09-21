import { Link } from "react-router-dom";

export const Breadcrumb = ({ bookingTitle }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm md:text-base flex-wrap">
      <Link to="/" className="text-lg hover:text-[#28364c] transition-colors">
        Home
      </Link>
      <span className="w-4 h-4 text-gray-400">/</span>

      <Link to="/destination" className="text-lg text-yellow-500 transition-colors">Booking</Link>

      <span className="w-4 h-4 text-gray-400">/</span>

      <span className="text-yellow-500">{bookingTitle}</span>
    </div>
  );
};
