import React, { ReactElement } from 'react';
import styles from '../styles/components/AboutSection.module.scss';

import SectionHeader from './SectionHeader';
import ProfilePic from './ProfilePic';
import Button from './Button';

function AboutSection(): ReactElement {
  return (
    <div className={styles.container}>
      <SectionHeader title="About" alignRight />

      <ProfilePic />

      <div className={styles.aboutWrapper}>
        <p>
          Deeply invested in the life-long learning mentality, I'm a full-stack
          developer who carries a keen eye for design in an user-first approach.
          My focus is in creating responsive layouts on the JavaScript stack of
          React and NodeJS, and from my background as an electrical engineer I'm
          well acquainted to bringing out solutions to complex problems.
        </p>

        <Button text="Say Hello" isPrimary />
      </div>
    </div>
  );
}

export default AboutSection;
