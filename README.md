# Nexxus Documentation

Documentation site for **Nexxus**, an event and production management platform
for entertainment and talent agencies.

## Getting started

```sh
npm install
npm run dev
```

For the dev server in background mode (see `AGENTS.md`):

```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the local dev server              |
| `npm run build`   | Build the production site to `dist/`    |
| `npm run preview` | Preview the production build locally    |
| `npm run astro`   | Run the Astro CLI (e.g. `astro --help`) |

## Project structure

```
src/content/docs/    Documentation content (MDX)
├── getting-started/ Introduction, Overview, Roles & Access
├── events/          Events Overview, Creating an Event, Event Details,
│                    Talent Assignments, Rehearsals, Event Checklist
├── clients/         Clients Overview, Creating a Client, Client Details
├── talents/         Talent Overview, Talent Onboarding, My Profile
├── call-sheets/     Call Sheets Overview, Templates, Creating, Sending
├── calendar/        Calendar Overview, Calendar Entries
├── messages/        Direct Messages, Group Messages, Sharing Call Sheets
├── media/           Media Management
└── administration/  Users, Roles & Permissions, Access Control
astro.config.mjs     Site config, including the sidebar
public/              Static assets (logo, favicon)
```

## Adding content

1. Add an MDX file under the relevant folder in `src/content/docs/`.
2. Give it a `title` and a one-sentence `description` in the frontmatter.
3. Register the page in the `sidebar` array in `astro.config.mjs` with its
   slug (e.g. `events/overview`).
