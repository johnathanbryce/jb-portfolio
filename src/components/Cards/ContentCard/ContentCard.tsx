import React from 'react'
import styles from './ContentCard.module.css'
// Internal Components
import CustomLink from '@/components/CustomLink/CustomLink'

interface ContentCardProps {
    title: string,
    techStack: string[],
    isActive: boolean,
    description: string,
    url: string,
    github: string,
    appStore?: string,
    googlePlay?: string,
}

export default function ContentCard({title, techStack, description, url, github, appStore, googlePlay}: ContentCardProps) {
  return (
    <article className={styles.content_card}>
        <h2>{title}</h2>
        <div className={styles.content_wrapper}>
            <p>{description}</p>
            <ul className={styles.tech_stack_container}>
              {techStack?.map((tech, index) => (
                <li key={index}>&bull; {tech}</li>
              ))}
            </ul>
            <div className={styles.links_container}>
              <CustomLink href={url} title="Visit Site" />
              <CustomLink href={github} title="GitHub" />
              {appStore ? <CustomLink href={appStore} title="App Store"/> : null}
              {googlePlay ? <CustomLink href={googlePlay} title="Google Play"/> : null}
            </div>
        </div>
    </article>
  )
}
