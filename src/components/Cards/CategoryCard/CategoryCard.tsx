"use client";
import React, { useState, useEffect } from "react";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  title: string;
  contentList: string[];
  setActiveContent: (content: string | null) => void;
  setActiveCategory?: () => void;
  isActive: boolean;
  activeContent: string | null;
  maxVisibleItems?: number; // Number of items to show before "View More"
}

export default function CategoryCard({
  title,
  contentList,
  setActiveContent,
  setActiveCategory,
  activeContent,
  isActive,
  maxVisibleItems = contentList.length, // Default to showing all items
}: CategoryCardProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // ensures that on the secondary click of activeSection, 'Intro' content is displayed
  const handleItemClick = (clickedSection: string) => {
    setActiveContent(clickedSection);
    setActiveSection(clickedSection);
  };

  // removes .active_link class when a different CategoryCard is selected
  useEffect(() => {
    if (!isActive) {
      setActiveSection(null);
    }
  }, [isActive]);

  // synchronize activeSection with activeContent from context
  useEffect(() => {
    if (activeContent && !contentList.includes(activeContent)) {
      setActiveSection(null);
    } else {
      setActiveSection(activeContent);
    }
  }, [activeContent, contentList]);

  // Determine which items to display
  const hasMore = contentList.length > maxVisibleItems;
  const visibleItems = isExpanded ? contentList : contentList.slice(0, maxVisibleItems);
  const hiddenCount = contentList.length - maxVisibleItems;

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering setActiveCategory
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${isActive ? styles.active : ""} ${styles.category_card}`}
      onClick={setActiveCategory}
    >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list_flex_wrapper}>
        {visibleItems.map((content: any, index: number) => (
          <li
            key={index}
            className={`${styles.link} ${activeSection === content ? styles.active_link : ""}`}
            onClick={() => {
              handleItemClick(content);
            }}
          >
            <div className={styles.link_text}>{content}</div>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          className={styles.view_more_button}
          onClick={toggleExpanded}
          aria-label={isExpanded ? "View less items" : `View ${hiddenCount} more items`}
        >
          {isExpanded ? "View Less" : `View More (${hiddenCount})`}
        </button>
      )}
    </div>
  );
}
