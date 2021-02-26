import React, { ReactElement } from 'react';
import styles from '../styles/components/SectionHeader.module.scss';

interface Props {
  title: string;
}

function SectionHeader({ title }): ReactElement<Props> {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.line} />
    </header>
  );
}

export default SectionHeader;
