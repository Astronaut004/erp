# LiteLink ERP — Marketing Site

The official marketing and product website for **LiteLink ERP** by Rigvedam Solutions. Built as a modern, fully responsive React application.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS + shadcn/ui (Radix UI) |
| Routing | React Router DOM v6 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Email | EmailJS |
| SEO | React Helmet Async |
| Data fetching | TanStack Query |
| Charts | Recharts |
| Testing | Vitest + Playwright |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & run

```bash
# Clone the repository
git clone <repo-url>
cd litelink-erp-launchpad-main

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:8080` (or the port Vite selects).

### Other scripts

```bash
npm run build      # Production build
npm run preview    # Preview the production build locally
npm run test       # Run unit tests (Vitest)
npm run lint       # Lint the codebase
```

---

## Features

- **Home** — Hero section, product highlights, and CTAs
- **Features** — Detailed breakdown of ERP capabilities
- **Solutions** — Industry-specific solution pages
- **Pricing** — Tiered pricing plans
- **Integrations** — Third-party integrations overview
- **Resources & Blog** — Articles, guides, and changelog
- **About & Careers** — Company information and open roles
- **Partners** — Partner ecosystem
- **Security** — Security posture and compliance info
- **Contact** — EmailJS-powered contact form
- **Dark mode** — Full light/dark theme support via `next-themes`
- **Scroll animations** — Framer Motion powered reveal effects
- **SEO** — Per-page meta tags via React Helmet Async
