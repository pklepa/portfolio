import React, { ReactElement } from 'react';
import styles from '../styles/components/AboutSection.module.scss';

import SectionHeader from './SectionHeader';
import ProfilePic from './ProfilePic';
import Button from './Button';
import ScrollingText from './ScrollingText';

interface Props {
  contactRef: any;
}

function AboutSection({ contactRef }: Props): ReactElement {
  return (
    <section className={styles.container}>
      <SectionHeader title="About" align="right" />

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <ProfilePic />
        </div>

        <div className={styles.aboutWrapper}>
          <p>
            Deeply invested in the life-long learning mentality, I'm a
            full-stack developer who carries a keen eye for design in an
            user-first approach. My focus is in creating responsive layouts on
            the JavaScript stack of React and NodeJS, and from my background as
            an electrical engineer I'm well acquainted to bringing out solutions
            to complex problems.
          </p>

          <div className={styles.scrollerContainer}>
            <h1>I am a</h1>

            <ScrollingText
              text="Full-stack JavaScript Developer &middot; "
              direction="left"
            />
            <ScrollingText
              text="Front-end Developer &middot; "
              direction="right"
            />
            <ScrollingText
              text="Cool Millenial Fella &middot; "
              direction="left"
            />
          </div>

          <Button
            onClick={() => {
              contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
              });
            }}
            type="button"
            text="Say Hello"
            isPrimary
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
