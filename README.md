# Karl Horning's Portfolio Site

## 📖 Table of Contents

- [Karl Horning's Portfolio Site](#karl-hornings-portfolio-site)
  - [📖 Table of Contents](#-table-of-contents)
  - [🤓 Overview](#-overview)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📦 Installation](#-installation)
  - [🚀 Scripts](#-scripts)
  - [📁 Project Structure](#-project-structure)
  - [🌐 Live Site](#-live-site)
  - [📌 To Do / Future Enhancements](#-to-do--future-enhancements)

---

## 🤓 Overview

This is the source code for my personal portfolio site, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). It showcases my work, values, skills, and certifications, with a focus on performance, accessibility, and clean design.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Languages**: TypeScript, JavaScript (ES6+)
- **Styling**: Tailwind CSS, AOS (Animate on Scroll)
- **Icons**: React Icons, FontAwesome
- **Image Optimisation**: Sharp
- **Linting & Formatting**:
  - ESLint (with `eslint-config-next`)
  - Prettier (with Tailwind plugin)

---

## 📦 Installation

```bash
git clone https://github.com/Karl-Horning/Karl-Horning.github.io.git
cd Karl-Horning.github.io
npm install
```

---

## 🚀 Scripts

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Start local development |
| `npm run build` | Build for production    |
| `npm start`     | Start production server |
| `npm run lint`  | Run ESLint checks       |

## 📁 Project Structure

```bash
src/
├── app/
│   ├── about/             # About page route
│   ├── contact/           # Contact page route
│   ├── layout.tsx         # Root layout for App Router
│   ├── not-found.tsx      # Custom 404 page
│   └── page.tsx           # Home page route
├── components/            # Reusable UI components
├── constants/             # Static values & config
├── lib/                   # Utility functions & helpers
├── types/                 # Custom TypeScript types
```

---

## 🌐 Live Site

Visit the live site at: [karlhorning.dev](https://www.karlhorning.dev)

---

## 📌 To Do / Future Enhancements

- [x] Add print styles
- [ ] Remove h1 background image when styles are disabled
- [x] Correct `HomeRout`
- [ ] Add correct routes to CMALT page metadata
- [ ] Add tests
- [ ] Improve Lighthouse scores
- [ ] Add analytics

---

Made with ❤️ by [Karl Horning](https://github.com/Karl-Horning)
