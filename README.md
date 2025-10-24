# John Bryce - Web Development Portfolio

A modern, interactive portfolio website showcasing my full-stack web development projects and professional experience. Built with Next.js 14, TypeScript, and React, featuring dynamic content management and responsive design.

## Overview

This portfolio highlights my work as a full-stack developer, including projects ranging from AI-powered legal research platforms to personal automation tools. The site features an intuitive navigation system with animated transitions and interactive project cards.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Icons**: React Icons
- **Carousel**: Embla Carousel
- **Node.js**: >= 18.0.0

## Features

- Dynamic project and client showcase
- Interactive category navigation (Projects/Clients/About)
- Tech stack visualization with dynamic icon highlighting
- Responsive design for mobile, tablet, and desktop
- Smooth animations and transitions
- Direct links to live projects, GitHub repos, and app stores
- Contact integration (Email, LinkedIn, GitHub)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
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
└── styles/
    ├── globals.css        # Global styles
    ├── vars.css           # CSS variables
    └── reset.css          # CSS reset
```

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
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

## Featured Projects

- **Screenshot Organizer** - Python macOS automation tool for organizing screenshots
- **Fit Friends** - Full-stack fitness challenge platform (Next.js, Firebase)
- **Page Parrot** - Chrome extension for webpage reminders
- **Quote Quest** - AI vs. Celebrity quote guessing game

## Professional Experience

- **Caseway** - AI-powered legal research platform (Next.js, Python, FastAPI, ElasticSearch)
- **MCQ Markets** - Full-stack admin dashboard and authorization flow
- **Romp** - Social activity planning app (React Native)


## Contact

- **Email**: contact@bluewavedev.ca
- **LinkedIn**: [linkedin.com/in/johnbryce-web-dev](https://www.linkedin.com/in/johnbryce-web-dev/)
- **GitHub**: [github.com/johnathanbryce](https://github.com/johnathanbryce)

## License

This project is open source and available for reference. Please do not copy the content or design without permission.
