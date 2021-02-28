import React, { ReactElement } from 'react';
import styles from '../styles/components/SectionHeader.module.scss';

interface Props {
  title: string;
  align: 'left' | 'right' | 'center';
}

function SectionHeader({ title, align }): ReactElement<Props> {
  let headerAlignment;
  switch (align) {
    case 'right':
      headerAlignment = 'alignRight';
      break;
    case 'center':
      headerAlignment = 'alignCenter';
      break;
    default:
      headerAlignment = 'alignLeft';
      break;
  }

  return (
    <header
      className={`${styles.grid} ${align === 'center' && styles.alignCenter}`}
    >
      <div className={`${styles.headerContainer} ${styles[headerAlignment]}`}>
        {align === 'center' && <div className={styles.line} />}

        <h1>{title}</h1>

        <div className={styles.line} />
      </div>

      <div className={styles.emptySpace} />
    </header>
  );
}

export default SectionHeader;
