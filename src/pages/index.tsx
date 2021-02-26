import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

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
        </main>
      </div>
    </>
  );
}
