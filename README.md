# John Bryce - Portfolio

Personal portfolio at [jbryce.dev](https://www.jbryce.dev). Built with Next.js 16, React 19, and TypeScript.

## Overview

Single-page site with animated category navigation. All project and work content lives in one typed array in `src/data/projects.ts`; the cards, lists, and tech-stack icons are derived from it.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Icons**: React Icons
- **Carousel**: Embla Carousel
- **Node.js**: >= 20.0.0

## Features

- Dynamic project and client showcase
- Interactive category navigation (Projects/Work/About)
- Tech stack visualization with dynamic icon highlighting
- Responsive design for mobile, tablet, and desktop
- Smooth animations and transitions
- Direct links to live projects and GitHub repos
- Contact integration (Email, LinkedIn, GitHub)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ContentContainer/  # Main content switcher
│   ├── Cards/             # Project and client cards
│   ├── Header/            # Navigation header
│   ├── Footer/            # Social links footer
│   ├── Intro/             # Landing section
│   ├── About/             # About me section
│   ├── Skills/            # Skills grid
│   ├── Testimonials/      # Client testimonials
│   └── TechStackDetails/  # Tech stack icons
├── context/
│   └── ContentProvider.tsx # Global state management
├── data/
│   └── projects.ts        # All project and work content
└── styles/
    ├── globals.css        # Global styles
    ├── vars.css           # CSS variables
    └── reset.css          # CSS reset
```

## Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johnathanbryce/jb-portfolio.git
cd jb-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contact

- **Email**: johnathanbryce@gmail.com
- **LinkedIn**: [linkedin.com/in/johnathanbryce](https://www.linkedin.com/in/johnathanbryce/)
- **GitHub**: [github.com/johnathanbryce](https://github.com/johnathanbryce)

## License

This project is open source and available for reference. Please do not copy the content or design without permission.
