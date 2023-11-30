import React from 'react'
import styles from './ContentCard.module.css'
// Internal Components
import CustomLink from '@/components/CustomLink/CustomLink'
// Next.js
import Link from 'next/link'

interface ContentCardProps {
    title: string,
    description: string,
    url: string,
    github: string,
}

export default function ContentCard({title, description, url, github}: ContentCardProps) {
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
