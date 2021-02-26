import React, { ReactElement } from 'react';
import styles from '../styles/components/SectionHeader.module.scss';

interface Props {
  title: string;
  alignRight: boolean;
}

function SectionHeader({ title, alignRight }): ReactElement<Props> {
  return (
    <header className={styles.grid}>
      <div
        className={styles.headerContainer}
        style={{ order: alignRight ? 2 : 1 }}
      >
        <h1>{title}</h1>

        <div className={styles.line} />
      </div>

      <div className={styles.emptySpace} />
    </header>
  );
}

export default SectionHeader;
