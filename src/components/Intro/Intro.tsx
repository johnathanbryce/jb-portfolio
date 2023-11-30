import React from 'react'
import styles from './Intro.module.css'
// Next.js
import Link from 'next/link'

export default function Intro() {
  return (
    <section className={styles.intro}>
        <h1> Hello </h1>
        <span className={styles.content_wrapper}>
          <p> My name is Johnathan Bryce. I am a Vancouver-based Front-End Web Developer proficient in JavaScript, TypeScript, React, Next. js, CSS, and HTML </p>
          <p> I am passionate about crafting dynamic, engaging websites and applications, constantly fueling my drive for continuous learning and staying up-to-date with industry trends.</p>
          <p> For web development inquiries, email me at <Link href="mailto:johnathanbryce@gmail.com" target='_blank' > johnathanbryce@gmail.com.</Link> </p>
        </span>
    </section>
  )
}
