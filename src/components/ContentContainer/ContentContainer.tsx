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
// Data
import { projects, work, allProjects } from "@/data/projects";

export default function ContentContainer() {
  // context
  const { activeContent, setActiveContent, setActiveTechStack } =
    useControlContent();
  // state
  const [activeCategory, setActiveCategory] = useState("Projects");

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  const activeProject = allProjects.find((p) => p.title === activeContent);

  // sets the tech stack icons on click of active category
  useEffect(() => {
    setActiveTechStack(activeProject?.icons ?? []);
  }, [activeProject, setActiveTechStack]);

  // renders based on which category is clicked and thus active
  const renderContent = () => {
    if (activeProject) {
      return (
        <ContentCard
          title={activeProject.title}
          url={activeProject.url}
          github={activeProject.github}
          techStack={activeProject.techStack}
          description={activeProject.description}
        />
      );
    }
    switch (activeContent) {
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
            contentList={projects.map((p) => p.title)}
            setActiveContent={setActiveContent}
            isActive={activeCategory === "Projects"}
            activeContent={activeContent}
            maxVisibleItems={4}
          />
          <CategoryCard
            title="Work"
            setActiveCategory={() => toggleActiveCategory("Work")}
            contentList={work.map((p) => p.title)}
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
