import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Klepa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>hello mundo</h1>
      </div>
    </>
  );
}
