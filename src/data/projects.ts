export type Project = {
  title: string;
  description: string;
  techStack: string[];
  icons: string[];
  url?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Screenshot Organizer",
    github: "https://github.com/johnathanbryce/screenshot-organizer",
    techStack: ["Python", "macOS", "LaunchAgent"],
    icons: ["python"],
    description:
      "A lightweight macOS automation tool that automatically organizes screenshots into date-based folders with customizable naming conventions. Features easy setup, persistent background operation via LaunchAgent, configurable storage locations, and optional auto-cleanup. Designed for non-technical users with simple installation while maintaining full source transparency.",
  },
  {
    title: "Fit Friends",
    url: "https://fitfriends.ca",
    github: "https://github.com/johnathanbryce/fitfriends",
    techStack: ["TypeScript", "Node.js", "Next.js", "Firebase Realtime Database", "Firebase Auth"],
    icons: ["typescript", "node.js", "next.js", "firebase", "database", "api", "css"],
    description:
      "A dynamic full-stack web application that enables users to create, join, and invite others to personalized fitness challenges. As my debut full-stack project, it exemplifies a seamless integration of front-end flair and back-end prowess, offering an interactive platform for fitness community building.",
  },
  {
    title: "Page Parrot",
    url: "https://chromewebstore.google.com/detail/page-parrot/ehilghlppkldlgcjcmcpkmampljodinn",
    github: "https://github.com/johnathanbryce/page-parrot",
    techStack: ["JavaScript", "Chrome Extension API"],
    icons: ["javascript", "css", "api"],
    description:
      "A Google Chrome extension that allows you to set, edit, and delete reminders for specific web pages. This project was an enjoyable return to vanilla JavaScript, marking my first venture into creating a Chrome extension.",
  },
  {
    title: "Quote Quest",
    url: "https://quote-quest-liard.vercel.app/",
    github: "https://github.com/johnathanbryce/quote-quest",
    techStack: ["React", "TypeScript", "SCSS"],
    icons: ["typescript", "react", "css"],
    description:
      "A quote guessing game where players determine if a quote is AI-generated or attributed to one of four celebrities (Donald Trump, Charlie Sheen, Ozzy Osbourne, Kanye West). Players earn points by correctly identifying the source, competing head-to-head against the computer.",
  },
  {
    title: "MyTube",
    url: "https://mytube-jb.vercel.app/",
    github: "https://github.com/johnathanbryce/mytube",
    techStack: ["React", "TypeScript", "Google API (YouTube)", "CSS"],
    icons: ["typescript", "react", "api", "css"],
    description:
      "MyTube fetches data from multiple YouTube channels, displaying the 8 latest videos for each. With seamless integration with the YouTube API, it keeps me updated on the latest content from my favourite creators, all in one place.",
  },
];

export const work: Project[] = [
  {
    title: "Caseway",
    url: "https://caseway.ai",
    techStack: [
      "TypeScript",
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Docker",
      "Nginx",
      "DigitalOcean",
      "Azure",
      "GitHub Actions",
      "Claude & Gemini APIs",
      "LangChain + LangGraph",
    ],
    icons: ["typescript", "next.js", "python", "fastapi", "docker", "redis", "elasticsearch", "database", "api"],
    description:
      "Lead engineer on Casey, Caseway's AI-powered legal research platform for lawyers and researchers across Canada. I took over an existing Next.js/FastAPI codebase and became primary author of the backend. I re-architected the research agent with dual-model routing, prompt caching, and auto-compaction for long conversations, cutting daily LLM spend from roughly $150 to $60. I built the unattended pipeline that ingested 7.8M case PDFs (about 2 TB) from Harvard's Caselaw Access Project, the Elasticsearch-backed public case law search, and Bespoke Agent, a multi-tenant document RAG product. I owned the DigitalOcean infrastructure, CI/CD, and production releases, and led a four-person offshore development team.",
  },
  {
    title: "MCQ Markets",
    url: "https://www.mcqmarkets.com/",
    techStack: [
      "TypeScript",
      "Next.js",
      "Express.js",
      "MySQL",
      "AWS (Cognito + Amplify + Lambda)",
      "MaterialUI",
      "Jotai",
      "SCSS",
    ],
    icons: ["typescript", "next.js", "node.js", "database", "api", "css"],
    description:
      "In a 3-month contract, I developed a full-stack internal admin dashboard for MCQ Markets, managing platform settings, assets, and offerings, with integration to the primary website and a MySQL database on AWS Aurora. I also created the authorization flow for both the primary website and the admin dashboard using AWS Cognito, Amplify, and Lambda functions for email triggers. Additionally, I overhauled a disorganized codebase for the Reg CF landing page, handling layout improvements, Google API integrations, and managed hosting and updates across four subdomains via Plesk.",
  },
  {
    title: "Romp",
    url: "https://rompathlete.com/",
    techStack: ["TypeScript/JavaScript", "React", "React Native", "Recoil", "Custom Backend APIs", "Google APIs"],
    icons: ["typescript", "node.js", "react", "api", "css", "database", "javascript"],
    description:
      "Romp is a social activity planning platform for creating, sharing, and broadcasting events with your local network. I joined as a founding developer near the project's inception, contributing to key UI and app content decisions, initially building the website before transitioning to the React Native app.",
  },
  {
    title: "Julien Verschooris",
    url: "https://www.julienverschooris.com/",
    techStack: ["TypeScript", "Next.js"],
    icons: ["typescript", "next.js", "css"],
    description:
      "A portfolio website that showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer.",
  },
  {
    title: "Labridge Farms",
    url: "https://labridgefarms.com/",
    techStack: ["TypeScript", "Next.js"],
    icons: ["typescript", "next.js", "css"],
    description:
      "The digital gateway to Labridge Farms, highlighting their premium farm-raised meats and high-quality Labrador Retrievers. It offers visitors an opportunity to explore and buy farm-fresh meats and learn about adopting one of their available or upcoming Labrador Retrievers.",
  },
  {
    title: "SolLuna Essence",
    url: "https://www.sollunaessence.com/",
    techStack: ["JavaScript", "jQuery", "SCSS", "CSS", "HTML"],
    icons: ["javascript", "jquery", "css"],
    description:
      "This site provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from Bio-Energy Healing Practitioner and Intuitive reader, Sydney Fisher.",
  },
];

export const allProjects = [...projects, ...work];
