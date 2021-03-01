// TODO: Find a way to replicate the initial animation from Animated Logo when the user clicks or periodically

import React, { ReactElement, useEffect, useRef } from 'react';
import styles from '../styles/components/HeroSection.module.scss';
import AnimatedLogo from './AnimatedLogo';

interface Props {
  setHeroRef: (arg0: any) => void;
}

function HeroSection({ setHeroRef }: Props): ReactElement {
  const heroRef = useRef(null);

  useEffect(() => {
    setHeroRef(heroRef);
  }, [heroRef]);

  return (
    <div ref={heroRef} className={styles.container}>
      <AnimatedLogo />

      <img
        src="/icons/arrow_down.svg"
        alt="Scroll down"
        className={styles.firstArrow}
      />
      <img src="/icons/arrow_down.svg" alt="" className={styles.secondArrow} />
      <img src="/icons/arrow_down.svg" alt="" className={styles.thirdArrow} />
    </div>
  );
}

export default HeroSection;
