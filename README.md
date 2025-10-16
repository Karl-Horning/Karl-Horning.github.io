# KarlHorning.dev — Developer Portfolio

---

<p>
  <img src="https://img.shields.io/github/deployments/Karl-Horning/Karl-Horning.github.io/github-pages?label=GitHub%20Pages&logo=github" alt="Deploy" style="vertical-align:middle; margin-right:8px;" />
  <img src="https://img.shields.io/badge/Lighthouse_Performance-99-brightgreen" alt="Lighthouse Performance 99" style="vertical-align:middle; margin-right:8px;" />
  <img src="https://img.shields.io/badge/Lighthouse_Accessibility-100-brightgreen" alt="Lighthouse Accessibility 100" style="vertical-align:middle; margin-right:8px;" />
  <img src="https://img.shields.io/badge/Lighthouse_Best_Practices-100-blue" alt="Lighthouse Best Practices 100" style="vertical-align:middle; margin-right:8px;" />
  <img src="https://img.shields.io/badge/Lighthouse_SEO-100-blueviolet" alt="Lighthouse SEO 100" style="vertical-align:middle; margin-right:8px;" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" style="vertical-align:middle; margin-right:8px;" />
</p>

---

## 📖 Table of Contents

- [KarlHorning.dev — Developer Portfolio](#karlhorningdev--developer-portfolio)
  - [📖 Table of Contents](#-table-of-contents)
  - [🤓 Overview](#-overview)
  - [🎨 Design Approach](#-design-approach)
  - [♿ Accessibility \& Performance](#-accessibility--performance)
    - [Accessibility Principles](#accessibility-principles)
    - [Performance Practices](#performance-practices)
  - [📸 Screenshot](#-screenshot)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📦 Installation](#-installation)
  - [🚀 Scripts](#-scripts)
  - [📁 Project Structure](#-project-structure)
  - [✍️ Code Style \& Linting](#️-code-style--linting)
  - [🔍 Tests](#-tests)
  - [🌐 Live Site](#-live-site)
    - [Latest Lighthouse Scores (16 Oct 2025)](#latest-lighthouse-scores-16-oct-2025)
  - [📌 Roadmap](#-roadmap)
  - [📚 Further Reading](#-further-reading)
  - [📄 Licence](#-licence)
  - [👤 Author](#-author)

---

## 🤓 Overview

**KarlHorning.dev** is my centralised developer portfolio — a single, accessible [Next.js](https://nextjs.org/) build that replaces the need to maintain multiple stacks.
It unifies my **projects**, **blog**, and **CMALT portfolio** into one modular, maintainable codebase.

The site reflects my approach to professional front-end development:

- built for **accessibility**, **performance**, and **clarity**
- structured around predictable, typed data
- documented consistently through **JSDoc** and **TypeScript**

Migrating from Eleventy to Next.js reduced maintenance by roughly **2–3 hours per month**, while improving accessibility, scalability, and performance.

---

## 🎨 Design Approach

The site prioritises **clarity**, **readability**, and **inclusivity** over visual excess.
Typography, spacing, and colour are all built around accessibility and tone:

- **Layout:** Grid-based rhythm with clear typographic hierarchy
- **Colour palette:** Balanced, accessible contrasts for both light and dark modes (`#F6E6EC`, `#C1EOF6`, `#EDABC6`, `#4C9DCD`, `#CB2D6F`, `#163753`)
- **Animations:** Subtle and purposeful — for example, a light CSS glitch hover effect on the logo adds character without distraction
- **Responsiveness:** Mobile-first, optimised for clarity across all devices
- **Interaction:** Keyboard- and screen reader-friendly components throughout

The goal is to maintain a calm, professional aesthetic while adhering to WCAG 2.2 AA standards.

---

## ♿ Accessibility & Performance

Accessibility and performance are tested continuously during development and post-deployment using **Lighthouse**, **axe**, and **WAVE**.

### Accessibility Principles

- Semantic HTML and ARIA roles used consistently
- Visible "Skip to content" link for keyboard users
- Logical heading structure (`h1–h3`) across pages
- All media includes descriptive `alt` text
- Form elements fully labelled and focus-managed
- Colour contrast verified in both modes

### Performance Practices

- **Static generation** via `next export`
- **Optimised media** using Sharp and Next/Image
- **No tracking or third-party scripts**
- **Lighthouse scores:**

  - Performance: 97 (Mobile) / 99 (Desktop)
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

---

## 📸 Screenshot

![Homepage screenshot](public/img/projects/karlhorning-dev.webp)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **UI:** React 19 + Tailwind CSS
- **Tooling:** ESLint + Prettier (Tailwind plugin)
- **Icons:** React Icons
- **Image Optimisation:** Sharp
- **Deployment:** GitHub Pages (static export)
- **Accessibility:** WCAG-aware, semantic, ARIA-friendly components
- **CI/CD:** GitHub Actions for linting, type checks, build, and `next export`

---

## 📦 Installation

```bash
git clone https://github.com/Karl-Horning/Karl-Horning.github.io.git
cd Karl-Horning.github.io
npm install
```

---

## 🚀 Scripts

| Command              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `npm run dev`        | Start local development with Turbopack             |
| `npm run build`      | Build for production                               |
| `npm start`          | Serve static build locally                         |
| `npm run lint`       | Run ESLint checks                                  |
| `npm run build:data` | Regenerate JSON data (projects, posts, CMALT, RSS) |

---

## 📁 Project Structure

```bash
src/
├── app/                    # App Router pages (Home, About, Projects, CMALT, etc.)
├── components/             # Reusable UI and layout components
├── lib/                    # Metadata, constants, and helper functions
├── types/                  # Shared TypeScript types (UI, data models)
├── public/data/            # JSON-based blog, project, and CMALT data
```

The architecture follows a **clear separation of concerns** between content, types, and logic — designed for scalability and maintainability.

---

## ✍️ Code Style & Linting

This project uses:

- **ESLint** with `eslint-config-next`
- **Prettier** with the Tailwind CSS plugin
- **Conventional Commits** (including custom scopes such as `a11y` and `ux`)
- **JSDoc annotations** to document functions and datasets

---

## 🔍 Tests

Planned testing stack:

- **Jest** and **React Testing Library** for UI components
- **axe-core** integration for automated accessibility checks

```bash
npm run test
```

---

## 🌐 Live Site

Visit: [karlhorning.dev](https://www.karlhorning.dev)

### Latest Lighthouse Scores (16 Oct 2025)

| Metric         | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 97     | 99      |
| Accessibility  | 100    | 100     |
| Best Practices | 100    | 100     |
| SEO            | 100    | 100     |

---

## 📌 Roadmap

- [x] Migrate from Eleventy to Next.js
- [x] Add Projects & CMALT portfolio routes
- [x] Achieve 100 Accessibility and SEO scores
- [x] Automate CI/CD deployment via GitHub Actions
- [ ] Add Jest test coverage
- [ ] Integrate privacy-friendly analytics

---

## 📚 Further Reading

- [KarlHorning.dev - Building a Modern, Accessible Developer Portfolio](https://www.karlhorning.dev/projects/karlhorning-dev)
- [GitHub Repository](https://github.com/Karl-Horning/Karl-Horning.github.io)
- [CMALT Portfolio](https://www.karlhorning.dev/cmalt)
- [Blog](https://www.karlhorning.dev/blog)
- [Projects](https://www.karlhorning.dev/projects)

---

## 📄 Licence

MIT © 2025 Karl Horning

---

## 👤 Author

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)
