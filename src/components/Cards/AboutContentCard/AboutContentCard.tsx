'use client'
import React from 'react'
import styles from './AboutContentCard.module.css'
// Content Context
import { useControlContent } from '@/context/ContentProvider'

interface ContentCardProps {
    title?: string,
    children: any,
    route?: string,
    routeTitle?: string

}

export default function AboutContentCard({title, children}: ContentCardProps) {
  // context
  const {setActiveContent} = useControlContent();
  return (
    <div className={styles.content_card}>
      <h2>{title}</h2>
      <span className={styles.content_wrapper}>
          {children}
          <div className={styles.button_container}>
              <button className={styles.button} onClick={() =>setActiveContent('Projects')}>
                Projects/Work
              </button>
          </div>
      </span>
    </div>
  )
}
