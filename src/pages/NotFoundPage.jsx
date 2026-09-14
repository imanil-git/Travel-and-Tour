import { Button } from "../components/common/Button";
export const NotFoundPage = () => (
  <section className="py-24 text-center">
    <p className="text-sm text-slate-500">404 — Page not found</p>
    <h1 className="my-5 text-4xl font-bold">
      Let's get you back on the trail.
    </h1>
    <Button to="/destination">Explore destinations</Button>
  </section>
);
