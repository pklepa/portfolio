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
        {projects.map((project, index) => {
          if (index > 2) return;

          return (
            <div key={project.title} className={styles.projectWrapper}>
              {project.photos.map((photo, i) => {
                return (
                  <img
                    key={`${project.title}-img-${i}`}
                    className={i > 0 ? styles.desktopOnly : ''}
                    src={photo}
                    alt="Preview pic"
                    style={{ width: '100%' }}
                  />
                );
              })}

              <div className={styles.projectDetails}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>

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
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
