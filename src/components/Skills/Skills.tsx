import React from 'react'
import styles from './Skills.module.css'

export default function Skills() {
  return (
  <article className={styles.skills}>
    <div className={styles.skills_category}>
        <h5>Languages & Frameworks</h5>
        <ul>
            <li>Python, FastAPI</li>
            <li>TypeScript, JavaScript</li>
            <li>Next.js, React, React Native</li>
            <li>Node.js</li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>AI & Retrieval</h5>
        <ul>
          <li>Claude & Gemini APIs</li>
          <li>LangChain + LangGraph</li>
          <li>RAG & hybrid search (Elasticsearch)</li>
          <li>Agent tool calling</li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>Backend & Data</h5>
        <ul>
            <li>PostgreSQL, Redis</li>
            <li>SQLAlchemy + Alembic</li>
            <li>Prisma</li>
            <li>Celery</li>
        </ul>
    </div>

    <div className={styles.skills_category}>
        <h5>Infrastructure & DevOps</h5>
        <ul>
          <li>DigitalOcean, Azure</li>
          <li>Docker, Nginx</li>
          <li>GitHub Actions CI/CD</li>
          <li>AWS (Cognito, Lambda), Sentry</li>
        </ul>
    </div>
  </article>
  )
}
