import React from 'react'
import styles from './Skills.module.css'

export default function Skills() {
  return (
  <article className={styles.skills}>
    <div className={styles.skills_category}>
        <h5>Frontend</h5>
        <ul>
            <li>JavaScript ES6, TypeScript</li>
            <li>Vanilla CSS, SASS</li>
            <li>React, Next.js, jQuery </li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>Backend</h5>
        <ul>
            <li>Node.js</li>
            <li>Python, FastAPI</li>
            <li>Firebase Realtime Database</li>
            <li>Firebase Authentication</li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>APIs:</h5>
        <ul>
          <li>RESTful APIs, Google APIs</li>
          <li>Custom Backend APIs</li>
          <li>API Integration</li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>AI & Infrastructure:</h5>
        <ul>
          <li>LLM Agent Building (Claude, Gemini)</li>
          <li>Docker, Docker Compose</li>
          <li>ElasticSearch, Redis</li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>Misc:</h5>
        <ul>
          <li>Git/GitHub</li>
          <li>Recoil</li>
          <li>React Router</li>
          <li>Figma</li>
        </ul>
    </div>
  </article>
  )
}
