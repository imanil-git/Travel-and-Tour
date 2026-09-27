# Travel Nepal

A React / Vite travel catalogue and trip planner using Tailwind CSS, React Router and Zustand.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

## Project structure

- `src/data/destinations.js`: the shared tour catalogue; `addOns.js` contains booking extras.
- `src/hooks/useContactForm.js`: contact values, validation, pending lock and submission feedback.
- `src/hooks/useBookingSummary.js`: selected booking inputs and derived pricing.
- `src/utils/filterDestinations.js`: shared search, category, region, activity, price, rating and sorting rules.
- `src/utils/bookingPricing.js`: numeric booking totals; add-ons are charged once per booking.
- `src/store/useBookingStore.js`: the current booking draft and request receipt.
- `src/components/common/`: shared inputs, buttons, traveler counter and headings.
- `src/components/destinations/FilterDrawer.jsx`: native modal dialog with Escape, contained focus and focus restoration.
- `src/components/about/TeamMemberCard.jsx`: shared team-card markup.
- `src/components/home/PackageCard.jsx`: home-page package card, separate from the Popular page's card.
- `tests/`: filtering and pricing regression checks with Node's built-in test runner.

Page-specific components remain grouped by feature. The two BenefitCard designs have different contracts and remain separate. The catalogue is local data; no Redux or TanStack Query migration is included.

## Behavior

Popular categories come from the catalogue. Its sort dropdown changes the displayed order; popularity means review count, not actual bookings. Favorites survive filtering while the page remains mounted. Destination search uses the `q` URL parameter; other filters are local to the page. The mobile filter dialog shares the same filter values as the desktop sidebar.

Selecting a package in the booking wizard resets guests to one and clears add-ons. Starting from a detail page creates a fresh draft with the chosen date and guest count. Successful email submission records a request reference, not a confirmed reservation. The draft and receipt are memory-only and clear on refresh.

The contact form disables input during submission, prevents a second in-flight submission, preserves values on failure, and clears them on success. Both booking and contact forms send email when configured. For automated testing, intercept EmailJS requests rather than sending real messages.

## Email configuration

Set these values in a local `.env.local` file (do not commit it):

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TEMPLATE_ID=your_booking_template_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
```

Vite variables are exposed to the browser. These are browser integration identifiers; never put private API keys or server credentials in them. Delivery depends on the configured EmailJS service and templates. There is no booking database, verified availability or payment integration.

## Accessibility and assets

Routes have primary headings. The carousel offers pause/resume and stops autoplay for reduced-motion preferences. Displayed photos use resized WebP copies; original JPEGs remain as source assets. Optional legacy font files in `public` are not used by the interface.

## Hosting

Build with `npm run build` and publish `dist`. Vercel rewrites and the Netlify `_redirects` file support direct route visits. This configuration assumes hosting at the domain root.

Before business use, replace sample catalogue/team content and verify prices and availability through a backend. Navigating away during an in-flight booking request is not yet coordinated with a new draft; a future request-lifecycle change should guard against late responses updating another draft.
