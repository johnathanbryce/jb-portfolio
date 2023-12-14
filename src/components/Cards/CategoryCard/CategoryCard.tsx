'use client'
import React, {useState, useEffect} from 'react'
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
    title: string,
    contentList: string[],
    setActiveContent: (content: string | null) => void;
    setActiveCategory?: () => void,
    isActive: boolean;
}

export default function CategoryCard({title, contentList, setActiveContent, setActiveCategory,  isActive}: CategoryCardProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

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
 
    return (
    <div className={`${isActive ? styles.active : ''} ${styles.category_card}`}>
        <h2 className={styles.title} onClick={setActiveCategory}>{title}</h2>
        <ul className={styles.list_flex_wrapper}>
            {contentList.map((content: any, index: number) => (
            <li 
                key={index} 
                className={`${styles.link} ${activeSection === content ? styles.active_link : ''}`} 
                onClick={() => {handleItemClick(content)
            }}>
                <div className={styles.link_text}>{content}</div>
            </li>
            ))}
        </ul>
    </div>
  )
}

         
