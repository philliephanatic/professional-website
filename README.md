# Nolan Young — Professional Website

**Live site → [young-marketing.io](https://young-marketing.io)**  
*Server-rendered, performance-first personal site built with Node.js, Express 5, and EJS*

---

## What This Is

A production-deployed personal website built to reflect how I think about **web operations at scale**: server-side rendering for crawlability and Core Web Vitals, a structured CSS design token system for long-term maintainability, and deliberate architectural trade-offs that favor reliability over novelty.

This is not a framework experiment. Every decision mirrors the standards I apply to high-traffic, SEO-sensitive marketing surfaces — where operational clarity, fast delivery, and predictable behavior matter more than abstraction.

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Runtime | Node.js (ESM modules) | Lightweight, production-stable |
| Framework | Express 5 | Minimal surface area, full control |
| Rendering | EJS (SSR) | Complete HTML on first byte — no hydration lag |
| Styling | Modular CSS + design tokens | Scalable system without a framework dependency |
| Client JS | Vanilla JS + Swiper.js | Mobile nav toggle, FAQ accordion, carousel behavior — no framework overhead |
| Deployment | Render (CI/CD via GitHub) | Push-to-deploy from `main`, zero manual steps |

---

## Architecture

The site follows a **layout-driven, server-rendered pattern** — the same approach I'd apply to a B2B SaaS marketing site:

- Complete HTML rendered on the server → fast first paint, reliable Core Web Vitals
- Shared layout partials (`head.ejs`, `header.ejs`, `footer.ejs`) → single source of truth for global changes
- Route-level SEO metadata (title, description, canonical URL, Open Graph) injected via a `baseMeta` object spread — clean, DRY, scalable
- Canonical URLs assembled with trailing-slash normalization to prevent duplicate indexing
- Liveness and readiness health check endpoints (`/health`, `/ready`) for production deployment signaling
- Graceful SIGTERM/SIGINT shutdown handling — clean restarts without dropped connections
```
src/
├── server.js                  # Express entry point, health checks, graceful shutdown
├── routes/
│   └── index.js               # Page routing + per-route SEO metadata
├── views/
│   ├── pages/                 # Page-level EJS templates
│   │   ├── index.ejs
│   │   ├── about.ejs
│   │   └── contact.ejs
│   └── partials/              # Shared layout components
│       ├── head.ejs
│       ├── header.ejs
│       └── footer.ejs
└── public/
    ├── css/                   # Modular CSS by responsibility
    │   ├── tokens.css         # Design tokens: type scale, spacing, color, breakpoints
    │   ├── base.css           # Reset and global defaults
    │   ├── header-footer.css  # Navigation and footer layout
    │   ├── layout.css         # Page-level structure and grid
    │   ├── components.css     # Reusable UI components
    │   ├── modules.css        # Section-level content modules
    │   └── pages/             # Page-specific overrides
    ├── js/                    # Page-scoped JS only
    │   ├── global-header.js   # Mobile nav toggle
    │   └── index.js           # Logo marquee, AI carousel, FAQ accordion
    ├── img/                   # Optimized SVG and PNG assets
    ├── fonts/                 # Self-hosted web fonts
    └── favicon/               # Full favicon set including webmanifest
```

---

## CSS Design System

The stylesheet architecture is built around a `tokens.css` file that defines all design decisions as CSS custom properties — updated across 6 responsive breakpoints:

- **Typography** — fluid type scale from mobile baseline to 2xl monitor (`--fs-h1` through `--fs-body`)
- **Color** — semantic aliases (`--text-color-primary`, `--bg-module-*`, `--bg-primary-cta`) decoupled from raw hex values
- **Spacing** — consistent scale (`--space-xs` through `--space-xl`) plus layout-specific tokens
- **Breakpoints** — xs (320px), sm (375px), md (768px), lg (1024px), xl (1440px), 2xl (2000px+)

This approach means a single token change propagates globally — the same principle I'd apply managing a CMS-driven marketing site.

---

## SEO & Performance Approach

- **Server-rendered HTML** — content immediately available to crawlers, no JS execution required
- **Per-route metadata** — title, description, canonical, and Open Graph tags set individually per page
- **Canonical URL normalization** — trailing slash stripped at assembly to prevent duplicate indexing
- **Self-hosted fonts** — eliminates render-blocking from third-party font requests
- **Semantic heading hierarchy** — correct H1→H2→H3 structure across all pages
- **Full favicon set** — SVG, ICO, Apple Touch, webmanifest, Safari pinned tab

---

## AI Workflow

This project was built and iterated with AI throughout — architecture decisions, CSS refactoring, debugging, and copy review. I treat AI tooling as a first-class collaborator and apply it wherever it improves speed and output quality without sacrificing judgment.

---

## Deployment

Deployed on **Render** with continuous deployment from the `main` branch.

- Push to `main` → automatic build and deploy
- `/health` endpoint confirms process and HTTP server are responding
- `/ready` endpoint confirms app is ready to serve traffic before Render routes requests to it

---

## Contact

[LinkedIn](https://www.linkedin.com/in/nolanyoung/) · [young-marketing.io](https://young-marketing.io)

---

*Built by Nolan Young*
