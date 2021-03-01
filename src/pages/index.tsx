// TODO: styles.container should be responsible for handling the spaces between each section
// TODO: Add fadeIn effects for the sections when the user scrolls into view

import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/pages/Home.module.scss';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [contactRef, setContactRef] = useState(null);
  const [heroRef, setHeroRef] = useState(null);

  return (
    <>
      <Head>
        <title>Pedro Klepa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main>
          <HeroSection setHeroRef={setHeroRef} />

          <AboutSection contactRef={contactRef} />
          <SkillsSection />
          <ContactSection setContactRef={setContactRef} />

          <Footer heroRef={heroRef} />
        </main>
      </div>
    </>
  );
}
