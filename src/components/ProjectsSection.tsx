import React, { ReactElement } from 'react';

import { projects } from '../../projects_data.js';
import styles from '../styles/components/ProjectsSection.module.scss';
import Button from './Button';

import SectionHeader from './SectionHeader';

interface Props {}

function ProjectsSection({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <SectionHeader title="Featured Projects" align="left" />

      <div className={styles.projectsContainer}>
        <div className={styles.projectWrapper}>
          <img
            src={projects[0]?.photoUrl}
            alt="Preview pic"
            style={{ width: '100%' }}
          />

          <div className={styles.projectDetails}>
            <h1>{projects[0]?.title}</h1>
            <p>{projects[0]?.description}</p>

            <div className={styles.buttonsWrapper}>
              <Button
                type="button"
                text="Review the code"
                isPrimary={false}
              ></Button>

              <Button type="button" text="See it live" isPrimary></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
