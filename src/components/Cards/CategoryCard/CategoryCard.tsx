import React from 'react'
import styles from './CategoryCard.module.css';
// Content Context
import { useControlContent } from '@/context/ContentProvider'

interface CategoryCardProps {
    title: string,
    contentList: any,
    setActiveContent: (content: string | null) => void;
    onClick: () => void,
    isActive: boolean;
}

export default function CategoryCard({title, contentList, setActiveContent, onClick, isActive}: CategoryCardProps) {
    // context
  const {activeContent, setActiveTechStack} = useControlContent();
  return (
    <div className={`${isActive ? styles.active : ''} ${styles.category_card}`}>
        <h2 className={styles.title} onClick={onClick}>{title}</h2>
        <ul className={styles.list_flex_wrapper}>
            {contentList.map((project: any, index: number) => (
            <li key={index} className={styles.link} onClick={() => setActiveContent(project)}>
                <span className={styles.link_text}>{project}</span>
            </li>
            ))}
        </ul>
    </div>
  )
}

         
