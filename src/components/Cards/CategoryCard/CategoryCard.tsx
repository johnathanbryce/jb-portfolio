import React from 'react'
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
    title: string,
    contentList: any,
    setActiveContent: (content: string | null) => void;
    setActiveCategory?: () => void,
    isActive: boolean;
}

export default function CategoryCard({title, contentList, setActiveContent, setActiveCategory,  isActive}: CategoryCardProps) {
  return (
    <div className={`${isActive ? styles.active : ''} ${styles.category_card}`}>
        <h2 className={styles.title} onClick={setActiveCategory}>{title}</h2>
        <ul className={styles.list_flex_wrapper}>
            {contentList.map((activeSection: any, index: number) => (
            <li key={index} className={styles.link} onClick={() => {
                console.log(activeSection)
                setActiveContent(activeSection);
            }}>
                <span className={styles.link_text}>{activeSection}</span>
            </li>
            ))}
        </ul>
    </div>
  )
}

         
