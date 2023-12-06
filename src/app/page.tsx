import styles from './page.module.css'
// Internal Components
import ContentContainer from '@/components/ContentContainer/ContentContainer';
import TechStackDetails from '@/components/TechStackDetails/TechStackDetails';

export default function Home() {
  return (
    <main className={styles.main}>
      <ContentContainer />
      <TechStackDetails />
    </main>
  )
}
