// TODO: Add a LOAD MORE button after 3 loaded projects
// TODO: Optimize images using 'next/image'
// TODO: Transform images grid into a rolling caroussel and include desktop images as well
// TODO: Maybe clicking the images should open a full screen caroussel
// TODO: At the end of all projects, put a "And a lot more on my Github" or "Like what you see? Get in touch!"

import React, { ReactElement } from 'react';

import styles from '../styles/components/ProjectsSection.module.scss';

import { projects } from '../../projects_data.js';

import SectionHeader from './SectionHeader';
import Button from './Button';
import SkillTag from './SkillTag';

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
              <div className={styles.imagesWrapper}>
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
              </div>

              <div className={styles.projectDetails}>
                <h1>{project.title}</h1>

                <div className={styles.skillsContainer}>
                  {project.tools.map((tool) => {
                    return <SkillTag key={tool} skillName={tool} />;
                  })}
                </div>
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
