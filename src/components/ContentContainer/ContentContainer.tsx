"use client";
import React, { useState, useEffect } from "react";
import styles from "./ContentContainer.module.css";
// Internal Components
import Intro from "../Intro/Intro";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import ContentCard from "../Cards/ContentCard/ContentCard";
import AboutContentCard from "../Cards/AboutContentCard/AboutContentCard";
import CategoryCard from "../Cards/CategoryCard/CategoryCard";
// Content Context
import { useControlContent } from "@/context/ContentProvider";

export default function ContentContainer() {
  // context
  const { activeContent, setActiveContent, setActiveTechStack } =
    useControlContent();
  // state
  const [activeCategory, setActiveCategory] = useState("Projects");

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  // sets the tech stack icons on click of active category
  useEffect(() => {
    switch (activeContent) {
      case "Quote Quest":
        setActiveTechStack(["typescript", "react", "css"]);
        break;
      case "Fit Friends":
        setActiveTechStack([
          "typescript",
          "node.js",
          "next.js",
          "firebase",
          "database",
          "api",
          "css",
        ]);
        break;
      case "Page Parrot":
        setActiveTechStack(["javascript", "css", "api"]);
        break;
      case "Screenshot Organizer":
        setActiveTechStack(["python"]);
        break;
      case "Dice Game":
        setActiveTechStack(["javascript", "jquery", "css"]);
        break;
      case "Romp":
        setActiveTechStack([
          "typescript",
          "node.js",
          "react",
          "api",
          "css",
          "database",
          "javascript",
        ]);
        break;
      case "Julien Verschooris":
        setActiveTechStack(["typescript", "next.js", "css"]);
        break;
      case "Labridge Farms":
        setActiveTechStack(["typescript", "next.js", "css"]);
        break;
      case "Caseway":
        setActiveTechStack([
          "typescript",
          "next.js",
          "python",
          "fastapi",
          "docker",
          "redis",
          "elasticsearch",
          "database",
          "api",
        ]);
        break;
      case "SolLuna Essence":
        setActiveTechStack(["javascript", "jquery", "css"]);
        break;
      case "MyTube":
        setActiveTechStack(["typescript", "react", "api", "css"]);
        break;
      default:
        setActiveTechStack([]);
    }
  }, [activeContent, setActiveTechStack]);

  // renders based on which category is clicked and thus active
  const renderContent = () => {
    switch (activeContent) {
      case "Intro":
        return <Intro />;
      case "About":
        return (
          <AboutContentCard title="About">
            <About />
          </AboutContentCard>
        );
      case "Skills":
        return (
          <AboutContentCard title="Skills">
            <Skills />
          </AboutContentCard>
        );
      case "Testimonials":
        return (
          <AboutContentCard title="Testimonials">
            <Testimonials />
          </AboutContentCard>
        );
      case "Fit Friends":
        return (
          <ContentCard
            title="Fit Friends"
            isActive={activeContent === "Fit Friends"}
            url="https://fitfriends.ca"
            github="https://github.com/johnathanbryce/fitfriends"
            techStack={[
              "TypeScript",
              "Node.js",
              "Next.js",
              "Firebase Realtime Database",
              "Firebase Auth",
            ]}
            description="A dynamic full-stack web application that enables users to create, join, and invite others to personalized fitness challenges. As my debut full-stack project, it exemplifies a seamless integration of front-end flair and back-end prowess, offering an interactive platform for fitness community building."
          />
        );
      case "Page Parrot":
        return (
          <ContentCard
            title="Page Parrot"
            isActive={activeContent === "Page Parrot"}
            url="https://chromewebstore.google.com/detail/page-parrot/ehilghlppkldlgcjcmcpkmampljodinn"
            github="https://github.com/johnathanbryce/page-parrot"
            techStack={["JavaScript", "Chrome Extension API"]}
            description="A Google Chrome extension that allows you to set, edit, and delete reminders for specific web pages. This project was an enjoyable return to vanilla JavaScript, marking my first venture into creating a Chrome extension."
          />
        );
      case "Screenshot Organizer":
        return (
          <ContentCard
            title="Screenshot Organizer"
            isActive={activeContent === "Screenshot Organizer"}
            github="https://github.com/johnathanbryce/screenshot-organizer"
            techStack={["Python", "macOS", "LaunchAgent"]}
            description="A lightweight macOS automation tool that automatically organizes screenshots into date-based folders with customizable naming conventions. Features easy setup, persistent background operation via LaunchAgent, configurable storage locations, and optional auto-cleanup. Designed for non-technical users with simple installation while maintaining full source transparency."
          />
        );
      case "Quote Quest":
        return (
          <ContentCard
            title="Quote Quest"
            isActive={activeContent === "Quote Quest"}
            url="https://quote-quest-liard.vercel.app/"
            github="https://github.com/johnathanbryce/quote-quest"
            techStack={["React", "TypeScript", "SCSS"]}
            description="A quote guessing game where players determine if a quote is AI-generated or attributed to one of four celebrities (Donald Trump, Charlie Sheen, Ozzy Osbourne, Kanye West). Players earn points by correctly identifying the source, competing head-to-head against the computer."
          />
        );
      case "Dice Game":
        return (
          <ContentCard
            title="Dice Game"
            isActive={activeContent === "Dice Game"}
            url="https://dice-game-jb.netlify.app"
            techStack={["JavaScript", "jQuery"]}
            github="https://github.com/johnathanbryce/Dice-Game"
            description="A dice rolling game against a computer. Highest number after 3 rolls wins! My final individual project for BCIT's COMP2131 - Web Development with Javascript that received a final grade of 100%."
          />
        );
      case "MyTube":
        return (
          <ContentCard
            title="MyTube"
            isActive={activeContent === "MyTube"}
            url="https://mytube-jb.vercel.app/"
            github="https://github.com/johnathanbryce/mytube"
            techStack={["React", "TypeScript", "Google API (YouTube)", "CSS"]}
            description="MyTube fetches data from multiple YouTube channels, displaying the 8 latest videos for each. With seamless integration with the YouTube API, it keeps me updated on the latest content from my favourite creators, all in one place."
          />
        );
      case "Caseway":
        return (
          <ContentCard
            title="Caseway"
            isActive={activeContent === "Caseway"}
            url="https://caseway.ai"
            techStack={[
              "TypeScript",
              "Next.js",
              "Python",
              "FastAPI",
              "Docker",
              "Redis",
              "ElasticSearch",
              "Digital Ocean",
              "Claude AI",
              "Gemini AI",
            ]}
            description="AI-powered legal technology platform serving 10k+ daily users. Core products include: (1) Legal Research Tool - intelligent case law analysis using Claude/Gemini with optimized RAG workflows, (2) Bespoke Agent - document management system enabling users to upload legal documents to ElasticSearch indices stored on Digital Ocean for AI-powered inference and retrieval, (3) Court Form Filler - automated form completion leveraging LLM integration. Products built with Next.js, TypeScript, Python, FastAPI, Docker, Redis, and ElasticSearch with comprehensive CI/CD pipelines."
          />
        );
      case "Romp":
        return (
          <ContentCard
            title="Romp"
            isActive={activeContent === "Romp"}
            url="https://rompathlete.com/"
            techStack={[
              "TypeScript/JavaScript",
              "React",
              "React Native",
              "Recoil",
              "Custom Backend APIs",
              "Google APIs",
            ]}
            github="https://github.com/rompAthlete/rompWebsite"
            appStore="https://apps.apple.com/us/app/romp-social-activity-planning/id1627077719"
            googlePlay="https://play.google.com/store/apps/details?id=com.rompAthlete&hl=en_US"
            description="Romp is a social activity planning platform for creating, sharing, and broadcasting events with your local network. I joined as a founding developer near the project's inception, contributing to key UI and app content decisions, initially building the website before transitioning to the React Native app."
          />
        );
      case "MCQ Markets":
        return (
          <ContentCard
            title="MCQ Markets"
            isActive={activeContent === "MCQ Markets"}
            url="https://www.mcqmarkets.com/"
            techStack={[
              "TypeScript",
              "Next.js",
              "Express.js",
              "MySQL",
              "AWS (Cognito + Amplify + Lambda)",
              "MaterialUI",
              "Jotai",
              "SCSS",
            ]}
            /* github="https://github.com/rompAthlete/rompWebsite" */
            description="In a 3-month contract, I developed a full-stack internal admin dashboard for MCQ Markets, managing platform settings, assets, and offerings, with integration to the primary website and a MySQL database on AWS Aurora. I also created the authorization flow for both the primary website and the admin dashboard using AWS Cognito, Amplify, and Lambda functions for email triggers. Additionally, I overhauled a disorganized codebase for the Reg CF landing page, handling layout improvements, Google API integrations, and managed hosting and updates across four subdomains via Plesk."
          />
        );
      case "JB Web Dev":
        return (
          <ContentCard
            title="JB Web Dev & Design"
            isActive={activeContent === "JB Web Dev"}
            url="https://www.bluewavedev.ca/"
            techStack={["TypeScript", "Next.js"]}
            github="https://github.com/johnathanbryce/johnbryce-web-dev"
            description="Promotes my professional web development abilities, focusing on small businesses as my target audience."
          />
        );
      case "Julien Verschooris":
        return (
          <ContentCard
            title="Julien Verschooris"
            isActive={activeContent === "Julien Verschooris"}
            url="https://www.julienverschooris.com/"
            techStack={["TypeScript", "Next.js"]}
            github="https://github.com/johnathanbryce/julien-verschooris"
            description="A portfolio website that showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer."
          />
        );
      case "Labridge Farms":
        return (
          <ContentCard
            title="Labridge Farms"
            isActive={activeContent === "Labridge Farms"}
            url="https://labridgefarms.com/"
            techStack={["TypeScript", "Next.js"]}
            github="https://github.com/johnathanbryce/labridge-farms"
            description="The digital gateway to Labridge Farms, highlighting their premium farm-raised meats and high-quality Labrador Retrievers. It offers visitors an opportunity to explore and buy farm-fresh meats and learn about adopting one of their available or upcoming Labrador Retrievers."
          />
        );
      case "SolLuna Essence":
        return (
          <ContentCard
            title="SolLuna Essence"
            isActive={activeContent === "SolLuna Essence"}
            url="https://www.sollunaessence.com/"
            github="https://github.com/johnathanbryce/SolLuna-Essence"
            techStack={["JavaScript", "jQuery", "SCSS", "CSS", "HTML"]}
            description="This site provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from Bio-Energy Healing Practitioner and Intuitive reader, Sydney Fisher."
          />
        );
      default:
        return <Intro />;
    }
  };

  return (
    <section className={styles.content_container}>
      <div className={styles.content_relative_wrapper}>
        <div key={activeContent} className={styles.content_details}>
          {renderContent()}
        </div>
      </div>

      {activeContent !== "About" &&
      activeContent !== "Skills" &&
      activeContent !== "Testimonials" ? (
        <div className={styles.projects_work_container}>
          <CategoryCard
            title="Projects"
            setActiveCategory={() => toggleActiveCategory("Projects")}
            contentList={[
              "Screenshot Organizer",
              "Fit Friends",
              "Page Parrot",
              "Quote Quest",
              "Dice Game",
              "MyTube",
            ]}
            setActiveContent={setActiveContent}
            isActive={activeCategory === "Projects"}
            activeContent={activeContent}
            maxVisibleItems={4}
          />
          <CategoryCard
            title="Clients"
            setActiveCategory={() => toggleActiveCategory("Work")}
            contentList={[
              "Caseway",
              "Julien Verschooris",
              "MCQ Markets",
              "Romp",
              "Labridge Farms",
              "SolLuna Essence",
            ]}
            setActiveContent={setActiveContent}
            isActive={activeCategory === "Work"}
            activeContent={activeContent}
            maxVisibleItems={4}
          />
        </div>
      ) : (
        <div className={styles.projects_work_container}>
          <CategoryCard
            title="Learn More"
            contentList={["About", "Skills", "Testimonials"]}
            setActiveContent={setActiveContent}
            isActive={true}
            activeContent={activeContent}
          />
        </div>
      )}
    </section>
  );
}
