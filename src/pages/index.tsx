import Head from 'next/head';
import AnimatedLogo from '../components/AnimatedLogo';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Klepa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <AnimatedLogo />
      </div>
    </>
  );
}
