'use client'
import React, {useState} from 'react'
import styles from './ContentContainer.module.css'
// Internal Components
import Intro from '../Intro/Intro'
import ContentCard from '../Cards/ContentCard/ContentCard'
import CategoryCard from '../Cards/CategoryCard/CategoryCard'
// Content Context
import { useControlContent } from '@/context/ContentProvider'

const defaultTheme = {
  '--accent-primary': '#C97064',
  '--accent-secondary': '#2196F3',
  // ...other default variables
};

const getThemeForCategory = (content: string) => {
  // Define your themes for different content
  const themes: any = {
    'Content1': {
      '--accent-primary': '#ff0000',
      '--accent-secondary': '#00ff00',
    },
    'Content2': {
      '--accent-primary': '#0000ff',
      '--accent-secondary': '#ff00ff',
    },
    // ...other content mappings
  };

  return themes[content] || defaultTheme;
};

export default function ContentContainer() {
  // context
  const {activeContent, setActiveContent} = useControlContent();
  // state
  const [activeCategory, setActiveCategory] = useState('Projects');

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };


  const renderContent = () => {
    switch (activeContent) {
      case 'Intro':
        return <Intro />;
      case 'Fit Friends':
        return <ContentCard title='Fit Friends' url='https://fitfriends.ca' github='https://github.com/johnathanbryce/fitfriends' description="Fit Friends is a dynamic full-stack web application that enables users to create, join, and invite others to personalized fitness challenges. As my debut full-stack project, it exemplifies a seamless integration of front-end flair and back-end prowess, offering an interactive platform for fitness community building."/>;
      case 'MyTube':
        return <ContentCard title='My Tube' url='https://mytube-jb.vercel.app/' github='https://github.com/johnathanbryce/mytube' description="MyTube fetches data from multiple YouTube channels, displaying the 8 latest videos for each. With seamless integration with the YouTube API, it keeps me updated on the latest content from my favourite creators, all in one place."/>;
      case 'Dice Game':
        return <ContentCard title='Dice Game' url='https://dice-game-jb.netlify.app' github='https://github.com/johnathanbryce/Dice-Game' description="A dice rolling game against a computer. Highest number after 3 rolls wins! My final individual project for BCIT's COMP2131 - Web Development with Javascript that received a grade of 100%."/>;
      case 'Romp':
        return <ContentCard title='Romp' url='https://rompathlete.com/' github='https://github.com/rompAthlete/rompWebsite' description="Romp is an activity planning social platform that allows you to create and share activities and events. You can broadcast what you are doing, when you are doing it, and then go and do it with the people you actually want to do it with, in your area."/>;
      case 'JB Web Dev':
        return <ContentCard title='JB Web Dev & Design' url='https://www.johnbrycewebdev.com/' github='https://github.com/johnathanbryce/johnbryce-web-dev' description="A landing page to promote my professional web development abilities, focusing on small businesses as my target audience."/>;
      case 'Julien Verschooris':
        return <ContentCard title='Julien Verschooris' url='https://www.julienverschooris.com/' github='https://github.com/johnathanbryce/julien-verschooris' description="This portfolio website showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer."/>;
      case 'Labridge Farms':
        return <ContentCard title='Labridge Farms' url='https://labridgefarms.com/' github='https://github.com/johnathanbryce/labridge-farms' description="This website serves as the digital gateway to Labridge Farms, showcasing their dual expertise in offering premium farm-raised meats and high-quality Labrador Retriever dogs and puppies. Visitors can explore and purchase the farm's selection of superior meats directly sourced from the farm's ethically-raised livestock. Additionally, the site features a dedicated section for Labrador Retriever's, providing detailed information on available dogs and puppies, their breeding standards, and how to bring these loyal and loving companions into their homes."/>;
      case 'SolLuna Essence':
        return <ContentCard title='SolLunna Essence' url='https://www.sollunaessence.com/' github='https://github.com/johnathanbryce/solLuna-essence' description="This website provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from Bio-Energy Healing Practitioner and Intuitive reader, Sydney Fisher."/>;
      default:
        return <Intro />;
    }
  };

  return (
    <section className={styles.content_container}>
      <div className={styles.content_relative_wrapper}>
        <div className={styles.content_details}>
          {renderContent()}
        </div>
      </div>

      <div className={styles.projects_work_container}>
        <CategoryCard 
          title="Projects" 
          onClick={() => toggleActiveCategory('Projects')}
          contentList={['Fit Friends', 'MyTube', 'Dice Game']} 
          setActiveContent={setActiveContent} 
          isActive={activeCategory === 'Projects'}
        />
        <CategoryCard 
          title="Work" 
          onClick={() => toggleActiveCategory('Work')}
          contentList={['Romp', 'JB Web Dev', 'Julien Verschooris', 'Labridge Farms', 'SolLuna Essence']} 
          setActiveContent={setActiveContent} 
          isActive={activeCategory === 'Work'}
        />
      </div>
    </section>
  )
}
