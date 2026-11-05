# Bavly Ashraf — Senior Frontend & Software Engineer Portfolio

A sleek, responsive, high-performance developer portfolio for **Bavly Ashraf** (Software Engineer & Frontend Architect). Designed with a deep obsidian aesthetic, dual-stacked architectural typography, subtle electric cyan accents, and high-concurrency architecture breakdowns.

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict schema typing & strict compiler checks)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom technical grid, neon glow tokens, deep obsidian `#030508` theme)
- **Typography:** [Syne](https://fonts.google.com/specimen/Syne) (Display headers) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code & technical metadata)
- **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/) (Smooth page scroll tracking and modal spring physics)
- **Modal Architecture:** React Portals (`createPortal` to `document.body`) ensuring modals always render above the floating navigation
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Architecture:** Single source of truth in `src/data/portfolio.ts` with strict TypeScript interfaces

---

## ✨ Key Highlights

- **Floating Persistent Navigation:** Dynamic central pill bar that stays pinned to the top as you scroll with active section tracking, while the brand logo and resume CTA scroll away with the hero.
- **Architectural Typography:** Solid dual-stacked display typography with radiant cyan beacon styling (`BAVLY ASHRAF.`).
- **Streamlined Projects View:** Minimalist, uncluttered project cards on the main page paired with deep-dive technical modals featuring complete 4-step neural pipeline schematics (Input Sketch → Generator GAN → Discriminator → Real Portrait).
- **Clean Responsive Drawer:** Compact mobile floating pill with animated hamburger toggle, smooth drawer drawer transitions, and responsive layout.
- **Interactive Contact Deck:** One-click clipboard copy for email and phone numbers with animated status toast notification.
- **Current Availability:** Active live indicator: *Available for Engineering Roles in Cairo, Egypt & Remote*.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or later recommended)
- `npm` or `yarn` / `pnpm`

### Installation & Run

```bash
# 1. Clone repository
git clone https://github.com/<YOUR_GITHUB_USERNAME>/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📁 Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom minimalist cyan/obsidian SVG favicon
│   └── Bavly-Ashraf-Resume.pdf # Printable PDF resume
├── src/
│   ├── components/
│   │   ├── About.tsx           # Bio, honors degree, certifications & skill cards
│   │   ├── Contact.tsx         # Contact deck, quick-copy cards, and social links
│   │   ├── Experience.tsx      # Chronological work history & engineering impact
│   │   ├── Footer.tsx          # Minimalist site footer
│   │   ├── Hero.tsx            # Dual-stacked hero header & availability badge
│   │   ├── Navbar.tsx          # Floating pill menu & mobile drawer navigation
│   │   ├── ProjectModal.tsx    # React Portal architecture deep-dive dialog
│   │   ├── Projects.tsx        # Streamlined project showcase
│   │   ├── Skills.tsx          # Categorized competency matrix
│   │   └── Toast.tsx           # Instant feedback toast notification
│   ├── data/
│   │   └── portfolio.ts        # Centralized portfolio content & project data
│   ├── types/
│   │   └── portfolio.ts        # TypeScript models and interfaces
│   ├── App.tsx                 # Root layout container
│   ├── index.css               # Tailored grid background & custom utilities
│   └── main.tsx                # React 19 entry point
├── .gitignore                  # Git ignore rules for clean repo state
├── index.html                  # HTML entry point with preconnected Google Fonts
├── package.json                # Project dependencies & npm scripts
├── postcss.config.js           # PostCSS configuration for Tailwind
├── tailwind.config.js          # Extended theme tokens & custom font configurations
└── vite.config.ts              # Vite config with relative asset base configuration
```

---

## 🌐 Deployment

### GitHub Pages (Automated via GitHub Actions)
1. In your GitHub repository, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Every push to `main` automatically runs the workflow in `.github/workflows/deploy.yml`, builds the production bundle, and deploys it with zero downtime.

### Vercel / Netlify
Import the repository directly. Vercel automatically detects Vite and builds to `dist/`.

---

## 📄 License

MIT © [Bavly Ashraf](https://github.com/bavly001)
