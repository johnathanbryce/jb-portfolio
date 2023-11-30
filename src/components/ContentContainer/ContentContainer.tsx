'use client'
import React from 'react'
import styles from './ContentContainer.module.css'
// Internal Components
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Work from '../Work/Work'
import Intro from '../Intro/Intro'
// Content Context
import { useControlContent } from '@/context/ContentProvider'

export default function ContentContainer() {
  const {activeContent, setActiveContent} = useControlContent();

  const renderContent = () => {
    switch (activeContent) {
      case 'Intro':
        return <Intro />;
      case 'Fit Friends':
        return <div>Content for Fit Friends</div>;
      case 'MyTube':
        return <div>Content for MyTube</div>;
      case 'Dice Game':
        return <div>Content for Dice Game</div>;
      case 'Romp':
        return <div>Romp</div>;
      case 'JB Web Dev':
        return <div> jb web dev</div>;
      case 'Julien Verschooris':
        return <div> JV</div>;
      case 'Labridge Farms':
        return <div>LF </div>;
      case 'SolLuna Essence':
        return <div>Solluna</div>;
      default:
        return <Intro />;
    }
  };

  return (
    <section className={styles.content_container}>
      <div className={styles.content_details}>
        {renderContent()}
      </div>

      <Projects setActiveContent={setActiveContent} />
      <Work setActiveContent={setActiveContent} />

    </section>
  )
}
