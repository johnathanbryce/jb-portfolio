'use client'
import React from 'react'
import styles from './Header.module.css'
// Next.js
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
        <svg onClick={() =>setActiveContent('Intro')} className={styles.jb_svg} width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4966 9.64C14.0566 9.64 12.8566 9.22 11.8966 8.38C10.9766 7.5 10.5166 6.38 10.5166 5.02C10.5166 3.7 10.9766 2.62 11.8966 1.78C12.8566 0.899997 14.0566 0.459997 15.4966 0.459997C16.9366 0.459997 18.1166 0.899997 19.0366 1.78C19.9966 2.62 20.4766 3.7 20.4766 5.02C20.4766 6.38 19.9966 7.5 19.0366 8.38C18.1166 9.22 16.9366 9.64 15.4966 9.64ZM8.41664 55.54C6.13664 55.54 4.27664 55 2.83664 53.92C1.43664 52.84 0.736641 51.52 0.736641 49.96C0.736641 48.6 1.25664 47.62 2.29664 47.02C3.49664 48.38 5.15664 49.06 7.27664 49.06C8.75664 49.06 9.85664 48.66 10.5766 47.86C11.3366 47.1 11.7166 46.02 11.7166 44.62V17.02C11.7166 15.38 12.3366 14.22 13.5766 13.54C14.8166 12.82 16.6966 12.46 19.2166 12.46V44.68C19.2166 46.72 18.7566 48.56 17.8366 50.2C16.9566 51.84 15.6966 53.14 14.0566 54.1C12.4166 55.06 10.5366 55.54 8.41664 55.54ZM27.5576 5.5C27.5576 3.9 28.1776 2.66 29.4176 1.78C30.6976 0.899997 32.5976 0.459997 35.1176 0.459997V14.38C34.5576 14.82 34.1176 15.22 33.7976 15.58L34.0376 15.88C35.1176 14.84 36.5176 14.02 38.2376 13.42C39.9976 12.78 41.6176 12.46 43.0976 12.46C46.6576 12.46 49.4976 13.46 51.6176 15.46C53.7376 17.42 54.7976 20 54.7976 23.2V32.74C54.7976 34.82 54.2776 36.68 53.2376 38.32C52.1976 39.96 50.7976 41.24 49.0376 42.16C47.2776 43.08 45.3976 43.54 43.3976 43.54C41.2776 43.54 39.4176 43.12 37.8176 42.28C36.2576 41.4 34.8376 40.12 33.5576 38.44L33.3176 38.68C33.4776 38.96 33.6776 39.24 33.9176 39.52C34.1576 39.8 34.3376 40.02 34.4576 40.18C34.4576 41.3 33.9176 42.14 32.8376 42.7C31.7576 43.26 29.9976 43.54 27.5576 43.54V5.5ZM41.1776 37.06C43.1776 37.06 44.6976 36.66 45.7376 35.86C46.8176 35.02 47.3576 33.8 47.3576 32.2V23.68C47.3576 22.16 46.8176 21 45.7376 20.2C44.6576 19.36 43.1376 18.94 41.1776 18.94C39.4176 18.94 37.9376 19.38 36.7376 20.26C35.5776 21.14 34.9976 22.2 34.9976 23.44V32.5C34.9976 33.82 35.5776 34.92 36.7376 35.8C37.8976 36.64 39.3776 37.06 41.1776 37.06Z" 
                stroke="#F9F9F9" 
                fill="#1D1D20"
            />
        </svg>
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
