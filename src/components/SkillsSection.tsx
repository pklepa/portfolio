import React, { ReactElement } from 'react';

import styles from '../styles/components/SkillsSection.module.scss';

import SectionHeader from './SectionHeader';

interface Props {}

function SkillsSection({}: Props): ReactElement {
  return (
    <section className={styles.container}>
      <SectionHeader title="Tools & Skills" alignRight={false} />
    </section>
  );
}

export default SkillsSection;
