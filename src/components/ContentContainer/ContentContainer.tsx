'use client'
import React, {useState, useEffect} from 'react'
import styles from './ContentContainer.module.css'
// Internal Components
import Intro from '../Intro/Intro'
import ContentCard from '../Cards/ContentCard/ContentCard'
import CategoryCard from '../Cards/CategoryCard/CategoryCard'
import TechStackDetails from '../TechStackDetails/TechStackDetails'
// Content Context
import { useControlContent } from '@/context/ContentProvider'

export default function ContentContainer() {
  // context
  const {activeContent, setActiveContent, setActiveTechStack} = useControlContent();
  // state
  const [activeCategory, setActiveCategory] = useState('Projects');

  const toggleActiveCategory = (category: string) => {
    setActiveCategory(category);
  };

  // sets the tech stack icons on click of active category
  useEffect(() => {
    switch (activeContent) {
      case 'Fit Friends':
        setActiveTechStack(['typescript', 'next.js', 'firebase', 'database', 'api', 'css']);
        break;
      case 'MyTube':
        setActiveTechStack(['typescript', 'next.js', 'css', 'api']);
        break;
      case 'Dice Game':
        setActiveTechStack(['javascript', 'jquery', 'css']);
        break;
      case 'Romp':
        setActiveTechStack(['typescript', 'react', 'api', 'css', 'database', 'javascript']);
        break;
      case 'JB Web Dev':
        setActiveTechStack(['typescript', 'next.js', 'css']);
        break;
      case 'Julien Verschooris':
        setActiveTechStack(['typescript', 'next.js', 'css']);
        break;
      case 'Labridge Farms':
        setActiveTechStack(['typescript', 'next.js', 'css']);
        break;
      case 'SolLuna Essence':
        setActiveTechStack(['javascript', 'jquery', 'css']);
        break;
      default:
        setActiveTechStack([]);
    }
  }, [activeContent, setActiveTechStack]);
  

  // renders based on which category is clicked and thus active
  const renderContent = () => {
    switch (activeContent) {
      case 'Intro':
        return <Intro/>;
      case 'Fit Friends':
        return <ContentCard  title='Fit Friends' isActive={activeContent === 'Fit Friends'} url='https://fitfriends.ca' github='https://github.com/johnathanbryce/fitfriends' description="Fit Friends is a dynamic full-stack web application that enables users to create, join, and invite others to personalized fitness challenges. As my debut full-stack project, it exemplifies a seamless integration of front-end flair and back-end prowess, offering an interactive platform for fitness community building."/>;
      case 'MyTube':
        return <ContentCard  title='My Tube' isActive={activeContent === 'MyTube'} url='https://mytube-jb.vercel.app/' github='https://github.com/johnathanbryce/mytube' description="MyTube fetches data from multiple YouTube channels, displaying the 8 latest videos for each. With seamless integration with the YouTube API, it keeps me updated on the latest content from my favourite creators, all in one place."/>;
      case 'Dice Game':
        return <ContentCard  title='Dice Game' isActive={activeContent === 'Dice Game'}  url='https://dice-game-jb.netlify.app' github='https://github.com/johnathanbryce/Dice-Game' description="A dice rolling game against a computer. Highest number after 3 rolls wins! My final individual project for BCIT's COMP2131 - Web Development with Javascript that received a grade of 100%."/>;
      case 'Romp':
        return <ContentCard  title='Romp' isActive={activeContent === 'Romp'}  url='https://rompathlete.com/' github='https://github.com/rompAthlete/rompWebsite' description="Romp is an activity planning social platform that allows you to create and share activities and events. You can broadcast what you are doing, when you are doing it, and then go and do it with the people you actually want to do it with, in your area."/>;
      case 'JB Web Dev':
        return <ContentCard  title='JB Web Dev & Design' isActive={activeContent === 'JB Web Dev'}  url='https://www.johnbrycewebdev.com/' github='https://github.com/johnathanbryce/johnbryce-web-dev' description="A landing page to promote my professional web development abilities, focusing on small businesses as my target audience."/>;
      case 'Julien Verschooris':
        return <ContentCard  title='Julien Verschooris' isActive={activeContent === 'Julien Verschooris'}  url='https://www.julienverschooris.com/' github='https://github.com/johnathanbryce/julien-verschooris' description="This portfolio website showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer."/>;
      case 'Labridge Farms':
        return <ContentCard  title='Labridge Farms' isActive={activeContent === 'Labridge Farms'}  url='https://labridgefarms.com/' github='https://github.com/johnathanbryce/labridge-farms' description="This website serves as the digital gateway to Labridge Farms, showcasing their dual expertise in offering premium farm-raised meats and high-quality Labrador Retriever dogs and puppies. Visitors can explore and purchase the farm's selection of superior meats directly sourced from the farm's ethically-raised livestock. Additionally, the site features a dedicated section for Labrador Retriever's, providing detailed information on available dogs and puppies, their breeding standards, and how to bring these loyal and loving companions into their homes."/>;
      case 'SolLuna Essence':
        return <ContentCard  title='SolLunna Essence' isActive={activeContent === 'SolLuna Essence'}  url='https://www.sollunaessence.com/' github='https://github.com/johnathanbryce/solLuna-essence' description="This website provides current and prospective patrons a landing page to learn about and access services for spiritual healing and guidance techniques from Bio-Energy Healing Practitioner and Intuitive reader, Sydney Fisher."/>;
      default:
        return <Intro />;
    }
  };

  return (
    <section className={styles.content_container}>
      <div className={styles.content_flex_wrapper}>
        <div className={styles.content_relative_wrapper}>
          <div key={activeContent} className={styles.content_details}>
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
      </div>
      <TechStackDetails />
    </section>
  )
}
