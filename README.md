# Backend .NET Developer Portfolio

A modern, professional portfolio site built with **React + TypeScript + Vite + Tailwind CSS**. No backend required to run it — it's a static site you can deploy anywhere (Vercel, Netlify, GitHub Pages, Azure Static Web Apps, etc.).

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional — preview the production build locally
```

The production files are output to `dist/`. Deploy that folder to any static host.

## How to personalize this site

You almost never need to touch component code. Everything you'd want to change lives in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Your name, title, hero copy, About Me text, links (GitHub/LinkedIn/email), CV file path, and whether the Experience section shows at all (`showExperience`) |
| `src/data/skills.ts` | Skill categories and the items inside each one |
| `src/data/projects.ts` | The project cards grid, **and** the single large "Featured Project" section |
| `src/data/experience.ts` | Education and experience timeline entries |
| `src/data/whatIDo.ts` | The 4 "What I Do" service cards |
| `src/data/github.ts` | Your GitHub username, featured repos, and an optional live-stats toggle |

### Step-by-step

1. **Profile & links** — Open `src/data/profile.ts` and replace every `[PLACEHOLDER]` with your real name, bio, and links. Set `links.cvUrl` to point at your resume (see below).
2. **About Me** — Fill in `profile.about.*` with your own words. Nothing here is pre-written for you on purpose — write it yourself so it sounds like you.
3. **Skills** — Edit `src/data/skills.ts`. Add/remove items in any category, or add a whole new category object; the grid re-flows automatically.
4. **Projects** — Edit the `projects` array in `src/data/projects.ts`. For each project:
   - Set `image` to a path under `public/projects/` (e.g. `/projects/my-app.png`) — drop the actual screenshot file into `public/projects/`.
   - Leave `liveUrl: ''` to automatically hide the "Live Demo" button for projects that aren't deployed.
5. **Featured project** — Edit the `featuredProject` object in the same file. This is your flagship project — the one that should look like a real production system, so write the architecture section with real detail.
6. **Experience / Education** — Edit `src/data/experience.ts`. If you don't have formal work experience yet, either delete the `exp-1` entry or set `profile.showExperience = false` in `profile.ts` to hide the whole section cleanly — the layout won't break.
7. **GitHub section** — Edit `src/data/github.ts`. Set `username` and list a few `featuredRepos`. If you want real (not fake) repo/follower counts pulled live from the GitHub API, set `enableLiveStats: true` — no API key needed, it uses GitHub's public REST API.
8. **Your CV** — Drop your resume file into `public/` (e.g. `public/cv.pdf`) and make sure `profile.links.cvUrl` matches (`/cv.pdf` by default).
9. **Contact form** — `src/components/Contact.tsx` currently simulates a successful submission on the client. Wire `handleSubmit` up to a real endpoint — a form service like Formspree, or your own ASP.NET Core minimal API endpoint — when you're ready to receive real messages.
10. **Favicon** — `public/favicon.svg` is a simple placeholder mark; swap it for your own if you like.

## Project structure

```
src/
  data/            ← all editable content lives here (see table above)
  components/      ← one component per section/UI piece, all presentational
  hooks/           ← useTheme (dark/light), useReveal (scroll animations),
                     useScrollSpy (active nav link)
  App.tsx          ← assembles all sections in order
  index.css        ← design tokens & reusable utility classes (btn-primary, card-surface, etc.)
tailwind.config.js ← color palette, fonts, and animation tokens
```

## Design notes

- **Palette**: neutral black/white/paper background with a single muted "signal green" accent, used sparingly for links, active states, and status indicators — a nod to terminal output and CI build badges rather than a generic gradient.
- **Type**: Space Grotesk (headings), Inter (body), JetBrains Mono (code, labels, stats).
- **Signature element**: the typing terminal window in the hero (`src/components/Terminal.tsx`) — reusable anywhere you want that same developer-native motif.
- Dark mode is on by default and persists via `localStorage`; the toggle lives in the navbar.
- All animations respect `prefers-reduced-motion`.

## Deploying

Any static host works. For example, with Vercel or Netlify: point them at this repo, set the build command to `npm run build` and the output directory to `dist`. No environment variables are required unless you wire up the contact form to an external service.
