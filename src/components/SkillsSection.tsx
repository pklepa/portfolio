import React, { ReactElement } from 'react';

import styles from '../styles/components/SkillsSection.module.scss';

import SectionHeader from './SectionHeader';

interface Props {}

function SkillsSection({}: Props): ReactElement {
  return (
    <section className={styles.container}>
      <SectionHeader title="Tools & Skills" alignRight={false} />

      <div className={styles.cardsGrid}>
        <div className={styles.cardWrapper}>
          <h1>Front-end</h1>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardWrapper}>
          <h1>Back-end</h1>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardWrapper}>
          <h1>Miscellaneous</h1>
          <div className={styles.card}></div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
