import React from 'react'
import styles from './About.module.css'
// Next.js
import Image from 'next/image'
// Internal Assets
import profilePic from '../../../public/images/john-bryce.png';

export default function About() {
  return (
    <section className={styles.about}>
        <div className={styles.img_container}>
            <Image 
                src={profilePic}
                alt="John Bryce's profile picture."
                priority
                className={styles.profile_pic}
            />
        </div>
        <div className={styles.text_container}>
          <p> Beginning as a self-taught enthusiast, my web development journey began during the pandemic, and gained depth through four BCIT courses that deepened my interest in the field. What started as a hobby rapidly evolved into a passion, affirming my chosen career path. </p>
          <p> A pivotal lesson for me has been the shift from tutorial-based learning to hands-on coding and project creation. Embracing the principle of &quot;Just. Keep. Building.&quot; has shown me that practical experience is key to genuine growth and understanding in web development.</p>
          <p> Away from the keyboard, I&apos;m either at the gym, enjoying time with friends, or yelling at Canucks on my TV.</p>
        </div>
        <div className={styles.text_container_mobile_sub_380px}>
          <p> Started as a self-taught web developer during the pandemic, I expanded my skills through four BCIT courses. Moving from tutorials to hands-on projects, I embraced the &apos;Just. Keep. Building.&apos; approach for real growth. </p>
          <p> Away from the keyboard, I&apos;m either at the gym, enjoying time with friends, or yelling at Canucks on my TV.</p>
        </div>
  </section>
  )
}


