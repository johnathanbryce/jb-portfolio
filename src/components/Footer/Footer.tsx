import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p aria-label="Copyright year 2023 by John Bryce"> &copy; {new Date().getFullYear()} John Bryce</p>
    </footer>
  )
}
