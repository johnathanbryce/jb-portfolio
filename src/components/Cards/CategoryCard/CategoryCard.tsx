"use client";
import React, { useState } from "react";
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // the highlighted item is derived from context: only when this card is active and owns the content
  const activeSection =
    isActive && activeContent && contentList.includes(activeContent) ? activeContent : null;

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
            onClick={() => setActiveContent(content)}
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
