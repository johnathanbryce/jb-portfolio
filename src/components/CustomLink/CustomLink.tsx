import React from 'react'
import styles from './CustomLink.module.css'
// Next.js
import Link from 'next/link'

interface CustomLinkProps {
    title: string,
    href: string,
   
}

export default function CustomLink({href, title}: CustomLinkProps) {
  return (
    <Link className={styles.link} href={href} target="_blank"> {title}</Link>
  )
}
