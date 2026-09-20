import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Whoops! This page does not exist.</h2>
        <Link href="/">Return home.</Link>
      </div>
    </main>
  )
}
