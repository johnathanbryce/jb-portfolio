import React from 'react'
import styles from './About.module.css'
// Next.js
import Image from 'next/image'
// Internal Assets
import profilePic from '../../../public/images/john-bryce.png';

export default function About() {
  return (
    <article className={styles.about}>
        <div className={styles.img_container}>
            <Image 
                src={profilePic}
                alt="John Bryce's profile picture."
                priority
                className={styles.profile_pic}
            />
        </div>
        <div className={styles.text_container}>
          <p> I came to software from analyst roles in the public sector, teaching myself during the pandemic and rounding that out with courses at BCIT. What started as a hobby became a career: founding frontend developer at Romp, contract full stack work for MCQ Markets, and then lead engineer on Caseway&apos;s AI legal research platform, where I ran the backend, the infrastructure, and a small offshore team. </p>
          <p> The lesson that stuck was the shift from tutorials to shipping. &quot;Just. Keep. Building.&quot; is still how I learn anything new, whether that&apos;s an agent framework or a data pipeline.</p>
          <p> Away from the keyboard, I&apos;m either at the gym, enjoying time with friends, or yelling at the Canucks on my TV.</p>
        </div>
  </article>
  )
}


