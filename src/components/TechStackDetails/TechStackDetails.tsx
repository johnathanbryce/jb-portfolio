'use client'
import React from 'react'
import styles from './TechStackDetails.module.css'
//Next.js
import Image from 'next/image';
// External Libraries
import react from '../../../public/images/react.svg'
import next from '../../../public/images/next-js.svg'
import firebase from '../../../public/images/firebase.svg'
import database from '../../../public/images/database.svg'
import api from '../../../public/images/api.svg'
import css from '../../../public/images/css.svg'
import javascript from '../../../public/images/javascript.svg'
import typescript from '../../../public/images/typescript.svg'
import jquery from '../../../public/images/jquery.svg'
import nodejs from '../../../public/images/node-js.svg'
import python from '../../../public/images/python.svg'
import docker from '../../../public/images/docker.svg'
import redis from '../../../public/images/redis.svg'
import elasticsearch from '../../../public/images/elasticsearch.svg'
import fastapi from '../../../public/images/fastapi.svg'
// Content Context
import { useControlContent } from '@/context/ContentProvider'

export default function TechStackDetails() {
  // context
  const {activeTechStack, activeContent} = useControlContent();
  
  // don't render techstackdetails if activeContent is one of these
  if (activeContent === null || activeContent === 'About' || 
      activeContent === 'Skills' || activeContent === 'Intro' || 
      activeContent === 'Testimonials' || activeContent === 'Projects' ||
      activeContent === 'Back to Projects/Work'
    ) {
    return null;
  }
  
  return (
    <aside className={styles.tech_stack}>
        <Image src={javascript} className={`${styles.icon} ${activeTechStack.includes('javascript') ? styles.active : ''}`} priority width={50} height={50} alt="JavaScript's official logo "/>
        <Image src={typescript} className={`${styles.icon} ${activeTechStack.includes('typescript') ? styles.active : ''}`} priority width={50} height={50} alt="TypeScript's official logo"/>
        <Image src={python} className={`${styles.icon} ${activeTechStack.includes('python') ? styles.active : ''}`} priority width={50} height={50} alt="Python's official logo"/>
        <Image src={jquery} className={`${styles.icon} ${activeTechStack.includes('jquery') ? styles.active : ''}`} priority width={50} height={50} alt="jQuery's official logo"/>
        <Image src={nodejs} className={`${styles.icon} ${activeTechStack.includes('node.js') ? styles.active : ''}`}  priority width={50} height={50} alt="Node.js's official logo"/>
        <Image src={css} className={`${styles.icon} ${activeTechStack.includes('css') ? styles.active : ''}`}  priority width={50} height={50} alt="CSS's official logo"/>
        <Image src={next} className={`${styles.icon} ${activeTechStack.includes('next.js') ? styles.active : ''}`} priority width={50} height={50} alt="Next.js's official logo"/>
        <Image src={react} className={`${styles.icon} ${activeTechStack.includes('react') ? styles.active : ''}`} priority width={50} height={50} alt="React's official logo"/>
        <Image src={firebase} className={`${styles.icon} ${activeTechStack.includes('firebase') ? styles.active : ''}`} priority width={50} height={50} alt="Firebase's official logo"/>
        <Image src={database} className={`${styles.icon} ${activeTechStack.includes('database') ? styles.active : ''}`} priority width={50} height={50} alt="Firebase Realtime Database logo"/>
        <Image src={api} className={`${styles.icon} ${activeTechStack.includes('api') ? styles.active : ''}`} priority width={50} height={50} alt="A logo to signify the use of an API"/>
        <Image src={docker} className={`${styles.icon} ${activeTechStack.includes('docker') ? styles.active : ''}`} priority width={50} height={50} alt="Docker's official logo"/>
        <Image src={redis} className={`${styles.icon} ${activeTechStack.includes('redis') ? styles.active : ''}`} priority width={50} height={50} alt="Redis's official logo"/>
        <Image src={elasticsearch} className={`${styles.icon} ${activeTechStack.includes('elasticsearch') ? styles.active : ''}`} priority width={50} height={50} alt="ElasticSearch's official logo"/>
        <Image src={fastapi} className={`${styles.icon} ${activeTechStack.includes('fastapi') ? styles.active : ''}`} priority width={50} height={50} alt="FastAPI's official logo"/>
    </aside>
  )
}
