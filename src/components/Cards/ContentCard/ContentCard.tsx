import React from 'react'
import styles from './ContentCard.module.css'
// Internal Components
import CustomLink from '@/components/CustomLink/CustomLink'

interface ContentCardProps {
    title: string,
    isActive: boolean,
    description: string,
    url: string,
    github: string,
}

export default function ContentCard({title, isActive, description, url, github}: ContentCardProps) {
  return (
    <div className={styles.content_card}>
        <h2>{title}</h2>
        <span className={styles.content_wrapper}>
            <p>{description}</p>
            <div className={styles.links_container}>
              <CustomLink href={url} title="View Site" />
              <CustomLink href={github} title="View GitHub" />
            </div>
        </span>
    </div>
  )
}
