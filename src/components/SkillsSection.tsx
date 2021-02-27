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
          <div className={styles.card}>
            <div
              className={styles.row}
              style={{ justifyContent: 'space-between', padding: '0 20px' }}
            >
              <div className={styles.item}>
                <img src="/icons/icon_html.svg" alt="html" />
                <h2>HTML</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_css.svg" alt="css" />
                <h2>CSS</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_sass.svg" alt="sass" />
                <h2>SASS</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_javascript.svg" alt="javascript" />
                <h2>JavaScript</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_typescript.svg" alt="typescript" />
                <h2>TypeScript</h2>
              </div>
            </div>

            <div
              className={styles.row}
              style={{ justifyContent: 'space-between', padding: '0 20px' }}
            >
              <div className={styles.item}>
                <img src="/icons/icon_react.svg" alt="react" />
                <h2>React</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_redux.svg" alt="redux" />
                <h2>Redux</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_next.svg" alt="next" />
                <h2>NextJS</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img
                  src="/icons/icon_styledComponents.svg"
                  alt="styledComponents"
                />
                <h2>Styled Components</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_framer.svg" alt="framer" />
                <h2>Framer Motion</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <h1>Back-end</h1>
          <div className={styles.card}>
            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_nodejs.svg" alt="nodejs" />
                <h2>NodeJs</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_express.svg" alt="express" />
                <h2>Express</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_javascript.svg" alt="javascript" />
                <h2>JavaScript</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_typescript.svg" alt="typescript" />
                <h2>TypeScript</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_mongodb.svg" alt="mongodb" />
                <h2>MongoDB</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_pug.svg" alt="pug" />
                <h2>Pug / Jade</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_jest.svg" alt="jest" />
                <h2>Jest</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <h1>Miscellaneous</h1>
          <div className={styles.card}>
            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_git.svg" alt="git" />
                <h2>Git</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_github.svg" alt="github" />
                <h2>GitHub</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_firebase.svg" alt="firebase" />
                <h2>Firebase</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_webpack.svg" alt="webpack" />
                <h2>Webpack</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_figma.svg" alt="figma" />
                <h2>Figma</h2>
              </div>

              <div className={styles.item}>
                <img src="/icons/icon_illustrator.svg" alt="illustrator" />
                <h2>Adobe Illustrator</h2>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.item}>
                <img src="/icons/icon_linux.svg" alt="linux" />
                <h2>Linux</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
