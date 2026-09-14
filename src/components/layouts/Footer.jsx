import { Link } from "react-router-dom";
import { navigation } from "../../data/navigation";
export const Footer = () => (
  <footer className="mt-16 rounded-t-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
    <div className="grid gap-10 md:grid-cols-3">
      <div>
        <h2 className="text-2xl font-bold">Tour and Travel Nepal.</h2>
        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
          From Himalayan trails to lakeside escapes, discover your next journey
          through Nepal.
        </p>
      </div>
      <nav aria-label="Footer navigation">
        <h3 className="mb-4 font-semibold">Explore</h3>
        <ul className="space-y-3 text-sm text-slate-300">
          {navigation.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <h3 className="mb-4 font-semibold">Make it your journey</h3>
        <p className="text-sm leading-7 text-slate-300">
          Explore destinations, compare itineraries and build your trip preview.
        </p>
        <Link
          to="/booking"
          className="mt-5 inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900"
        >
          Plan a trip →
        </Link>
      </div>
    </div>
    <p className="mt-10 border-t border-white/15 pt-4 text-sm text-center text-slate-400">
      © {new Date().getFullYear()} Travel Nepal. All rights reserved.
    </p>
  </footer>
);
