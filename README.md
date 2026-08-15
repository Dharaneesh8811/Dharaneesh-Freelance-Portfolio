# Dharaneesh R — Portfolio

A single-page freelance portfolio built with React + Vite, Framer Motion, and React Icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/   Section components (Navbar, Hero, About, Skills, Services, Projects, WhyChooseMe, Contact, Footer)
  data/         Content for skills, services, projects, and "why choose me"
  index.css     Design tokens + global styles
  App.jsx       Assembles all sections
  main.jsx      React entry point
```

## Customizing

- **Colors & fonts**: edit the CSS variables at the top of `src/index.css`.
- **Content**: edit the arrays in `src/data/*.js` — components render straight from these.
- **Projects**: replace the placeholder thumbnails in `Projects.jsx` with real screenshots by swapping `<ProjectGlyph />` for an `<img loading="lazy" src="..." alt="..." />`.

## Contact form (already wired up)

The form in `src/components/Contact.jsx` submits to [Formspree](https://formspree.io) — no backend needed.

1. Go to formspree.io and create a free account.
2. Create a new form; it gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Open `src/components/Contact.jsx` and replace `FORM_ENDPOINT` near the top with that URL.
4. Submit the form once yourself (locally or on your live site) and confirm the activation email from Formspree — first submissions need this to start delivering to your inbox.

Prefer a different service (EmailJS, your own API route, etc.)? Just swap the `fetch` call inside `handleSubmit` — the rest of the component (state, validation, success/error UI) stays the same.

## Deploying (Vercel)

The fastest path to a live URL:

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Import the repo. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output Directory: `dist`).
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute, and every future push to `main` redeploys automatically.
5. Optional: add a custom domain under Project → Settings → Domains.

No GitHub account? You can also run `npx vercel` from inside the project folder and follow the prompts to deploy straight from your machine.
