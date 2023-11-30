import Image from 'next/image'
import styles from './page.module.css'
// Internal Components
import Header from '@/components/Header/Header'
import ContentContainer from '@/components/ContentContainer/ContentContainer';
import Intro from '@/components/Intro/Intro';


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ContentContainer />
    </main>
  )
}
