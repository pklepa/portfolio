// TODO: styles.container should be responsible for handling the spaces between each section
// TODO: Add fadeIn effects for the sections when the user scrolls into view

import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Klepa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ContactSection />

          <Footer />
        </main>
      </div>
    </>
  );
}
