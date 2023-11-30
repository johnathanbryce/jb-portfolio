'use client'
import React from 'react'
import styles from './Header.module.css'
// Next.js
import Image from 'next/image'
import Link from 'next/link'
// External Libraries
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// Content Context
import { useControlContent } from '@/context/ContentProvider'

export default function Header() {
  const {setActiveContent} = useControlContent();

  return (
    <header className={styles.header}>
        <h2 className={styles.logo} onClick={() =>setActiveContent('Intro')}>JB</h2>
        <nav className={styles.nav}>
            <ul>
                <Link href="mailto:johnathanbryce@gmail.com" target='_blank' className={styles.nav_link}>
                    <MdOutlineEmail className={styles.nav_link_icon} />
                </Link>
                <Link href="https://www.linkedin.com/in/johnathanbryce/" target='_blank' className={styles.nav_link}>
                    <FaLinkedinIn className={styles.nav_link_icon} />
                </Link>
                <Link href="https://github.com/johnathanbryce" target='_blank' className={styles.nav_link}>
                    <FaGithub className={styles.nav_link_icon} />
                </Link>
            </ul>
        </nav>

    </header>
  )
}
