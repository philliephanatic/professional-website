# Nolan Young — Professional Website  
_Server-rendered, performance-first personal site built with Node.js, Express, and EJS_

This repository contains the source code for my professional website, designed to demonstrate how I approach website architecture, performance, experimentation, and long-term maintainability.

The site reflects how I think about **high-traffic, SEO-sensitive web surfaces**: prioritizing fast initial load, predictable behavior, accessibility, and clean operational workflows over unnecessary complexity.

It is intentionally **server-rendered**, **modular**, and **deployment-stable**, mirroring the standards I apply to production web environments.

---

## 🎯 Objectives

- Demonstrate a modern, server-rendered web architecture optimized for performance and SEO  
- Showcase a modular, maintainable CSS and layout system  
- Emphasize disciplined experimentation, technical site operations, and execution quality  
- Deliver a polished, professional experience suitable for client-facing and executive review  

---

## 🚀 Tech Stack

**Runtime**  
- Node.js (ESM modules enabled)

**Web Framework**  
- Express 5

**Rendering**  
- EJS (server-side rendered templates)

**Styling**  
- Semantic HTML  
- Modular CSS architecture  
- Global design tokens via CSS variables  
- Mobile-first, responsive layout system

**Client Enhancements**  
- Minimal JavaScript for interaction only (no client-heavy rendering)  
- Swiper.js for controlled, performance-conscious UI motion

---

## 🧱 Architecture Overview

The site follows a **layout-driven, server-rendered architecture** designed for clarity, speed, and stability:

- Pages rendered as complete HTML on the server  
- Shared layout and reusable partials (head, header, footer)  
- Route-level SEO metadata (title, description, canonical URLs)  
- Clean, human-readable URLs:
  - `/`
  - `/about`
  - `/contact`

This approach ensures:
- Fast first paint and predictable Core Web Vitals  
- Full crawlability for search engines  
- Deterministic builds and stable deployments  
- Minimal runtime risk in production

---

## 📁 Project Structure

src/
├── server.js # Express app entry point
├── routes/
│ └── index.js # Page routing + metadata
├── views/
│ ├── pages/ # Page-level EJS templates
│ │ ├── index.ejs
│ │ ├── about.ejs
│ │ └── contact.ejs
│ └── partials/ # Shared layout components
│ ├── head.ejs
│ ├── header.ejs
│ └── footer.ejs
├── public/
│ ├── css/ # Modular CSS by responsibility
│ │ ├── globalstyles.css
│ │ ├── layout.css
│ │ ├── components.css
│ │ ├── modules.css
│ │ └── page-specific files
│ ├── js/ # Page-scoped JS only
│ ├── img/ # Optimized SVG assets
│ ├── fonts/ # Self-hosted web fonts
│ └── favicon/ # Favicon assets


---

## 🔍 Performance & SEO Considerations

- Server-rendered HTML for immediate content availability  
- No client-side rendering dependencies  
- Minimal JavaScript footprint  
- Accessible semantic markup and heading hierarchy  
- Stable layout behavior across viewport sizes  
- SEO-safe routing and canonical URLs  

---

## ☁️ Deployment

The site is deployed on **Render** and configured for continuous deployment from GitHub.

Key considerations:
- Production behavior validated against real-world hosting constraints  
- Architecture intentionally minimizes runtime work to reduce startup impact  

---

## 📌 Notes

This project is not intended as a framework showcase or a tool comparison exercise.  
Every architectural decision reflects **tradeoffs made deliberately**, favoring:

- Reliability over novelty  
- Clarity over abstraction  
- Long-term maintainability over short-term velocity  

---

## 📬 Contact

For professional inquiries or collaboration, reach out via LinkedIn.  
Links are available directly on the live site.

---

© Nolan Young
