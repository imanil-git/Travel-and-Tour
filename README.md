# Travel Nepal

A React 19 / Vite single-page travel catalogue and trip planner, using Tailwind CSS, React Router and Zustand.

## Run locally

Use Node.js 22.12 or newer (Node 22 LTS recommended) and npm.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

## Structure

```text
src/
  assets/                 Local destination and editorial images
  components/
    common/               Shared Button, InputField, search, navigation helpers
    layouts/              Header, Footer, DefaultLayout
    ui/                   Reusable DestinationCard
    home/ about/ contact/  Page-specific sections
    destinations/         Destination filters
    detailPage/           Itinerary, details and trip customization entry
    booking/              Planner steps and summary
    popular/              Popular tour cards
  data/                   Package catalogue, add-ons, navigation
  pages/                  Route-level composition, including 404
  routes/                 Route definitions
  store/                  Booking and menu state
  utils/                  Shared local-date helper
public/                   Static files and SPA fallback
```

Keep page composition in pages, business state in store, catalogue content in data, and reusable controls in common. Booking input re-exports the common InputField for compatibility. The two BenefitCard and PopularCard designs have different content/layout contracts and remain feature-specific; avoid forcing unrelated cards into a large conditional component.

## Current scope

This is a hostable frontend preview. Package selection, guest limits, add-ons, price estimates, search, filters and navigation work locally. Booking and contact forms explicitly say they do not transmit data. No reservations, payments, email delivery or persistent customer records are implemented. Refreshing clears planner state. Package prices, reviews, team information and imagery are sample content to verify before business use.

## Hosting later

Build command: `npm run build`. Publish directory: `dist`. Install with `npm ci` using the committed lockfile. Do not use the development server as a production server.

- Vercel: import the repository as a Vite project; the included vercel.json provides SPA rewrites.
- Netlify: publish dist; public/_redirects is copied into the build so direct route visits resolve to index.html.
- Other static hosts: serve existing assets normally, then fall back to index.html for client-side routes.
- This configuration assumes hosting at the domain root. Subdirectory hosting requires coordinated Vite base and router basename changes.

Verify direct visits and refreshes on /destination, /booking and /booking/pokhara after deployment. Add the final domain to canonical/social metadata only once it is known.

References: [Vite static deployment](https://vite.dev/guide/static-deploy), [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite).

## Before accepting real customers

Connect a server-side booking/contact service with validation and confirmed delivery, verify package availability and prices server-side, integrate a payment provider with server-side verification if payment is required, and replace placeholder business details. Review image/font rights and replace sample ratings and team content. No secrets should be placed in frontend code or VITE_ variables. Existing optional font files remain in public but are no longer loaded; the UI uses system fonts.
