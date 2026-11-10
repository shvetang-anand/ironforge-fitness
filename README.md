# IRONFORGE FITNESS — React Demo Website

A responsive, luxury black-and-white gym website made with React, Vite and CSS. Built as a fictional brand for a developer portfolio.

## Features
- Responsive desktop and mobile navigation
- Minimal monochrome art direction with image-led sections
- Programs, philosophy, membership pricing and contact sections
- Monthly/yearly membership price toggle
- Membership-specific booking modal
- Validated demo intro-session form with confirmation summary
- No backend required; form submission is simulated in the browser
- Reduced-motion support and accessible modal labels

## Run locally
1. Install Node.js LTS from https://nodejs.org/ if it is not already installed.
2. Extract this folder and open it in VS Code.
3. Open a terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production website to `dist/`.

## Deploy free with Render
1. Create a GitHub repository and push this project.
2. In Render, choose **New + → Static Site** and connect the repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy. No environment variables are required.

You can also deploy to Vercel or Netlify by importing the repository and using the same build command and `dist` output folder.

## Before presenting to a real client
- Replace the fictional brand details, location, email, hours, statistics and prices.
- Replace the Unsplash image URLs with appropriately licensed gym photography if desired.
- Connect the enquiry form to a backend or form provider if real bookings are required. The current form only shows a local demo confirmation and does not send or store personal information.
- The displayed plans and prices are illustrative and are not a real gym offer.
