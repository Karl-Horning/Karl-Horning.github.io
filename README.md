# karlhorning.dev

Personal portfolio and blog — a statically exported Next.js site with Playwright + axe-core accessibility testing built in.

**Live site:** [karlhorning.dev](https://www.karlhorning.dev)

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **CSS Modules**
- **React Icons**
- Deployed to **GitHub Pages** via GitHub Actions with a custom domain

## Notable decisions

**Single source of truth for routes** — `lib/routes.ts` drives the generated sitemap and Playwright smoke tests. Add a route here when a new page is created.

**Single source of truth for projects** — `lib/projects.ts` defines the `ProjectMeta` interface and exports `PROJECTS` sorted by display order. Each project has a `meta.ts` alongside its page; the shared `ProjectLayout` component derives the sidebar, links, and prev/next navigation from that data automatically.

**SEO** — Each page exports typed metadata with Open Graph and Twitter cards, canonical URLs, and a default OG image. The site is registered with Google Search Console.

**Accessibility testing** — Playwright with `@axe-core/playwright` for automated accessibility checks on every route across desktop and mobile viewports, alongside manual screen reader and keyboard testing.

**CSS architecture** — CSS Modules for component-scoped styles; `globals.css` holds design tokens and shared utilities only.

**CI/CD** — GitHub Actions builds and deploys to GitHub Pages on every merge to main.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the development server |
| `build` | Production build (static export) |
| `start` | Start the Next.js server (run `build` first) |
| `lint` | Run ESLint |
| `test` | Run Playwright tests |
| `test:ui` | Run Playwright tests with the interactive UI |
| `check-links` | Check for broken links on the live site |
| `check-links:local` | Check for broken links on the local server |

## License

Released under the [MIT License](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
