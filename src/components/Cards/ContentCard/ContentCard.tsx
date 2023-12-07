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
    appStore?: string,
    googlePlay?: string,
}

export default function ContentCard({title, description, url, github, appStore, googlePlay}: ContentCardProps) {
  return (
    <div className={styles.content_card}>
        <h2>{title}</h2>
        <span className={styles.content_wrapper}>
            <p>{description}</p>
            <div className={styles.links_container}>
              <CustomLink href={url} title="Visit Site" />
              <CustomLink href={github} title="GitHub" />
              {appStore ? <CustomLink href={appStore} title="App Store"/> : null}
              {googlePlay ? <CustomLink href={googlePlay} title="Google Play"/> : null}
            </div>
        </span>
    </div>
  )
}
