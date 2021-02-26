import React, { ReactElement } from 'react';
import styles from '../styles/components/AboutSection.module.scss';

import SectionHeader from './SectionHeader';
import ProfilePic from './ProfilePic';

function AboutSection(): ReactElement {
  return (
    <div className={styles.container}>
      <SectionHeader title="About" />

      <ProfilePic />
    </div>
  );
}

export default AboutSection;
