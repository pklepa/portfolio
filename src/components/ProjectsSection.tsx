import React, { ReactElement } from 'react';

import styles from '../styles/components/ProjectsSection.module.scss';

import SectionHeader from './SectionHeader';

interface Props {}

function ProjectsSection({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <SectionHeader title="Featured Projects" align="left" />
    </div>
  );
}

export default ProjectsSection;
