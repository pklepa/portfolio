import { symlink } from 'fs';
import React, { ReactElement } from 'react';
import styles from '../styles/components/SmallLogo.module.scss';

interface Props {}

function SmallLogo({}: Props): ReactElement {
  return (
    <div className={styles.logoContainer}>
      <h1>pk</h1>

      <div className={styles.solidBackground} />
      <div className={styles.gradientBackground} />
    </div>
  );
}

export default SmallLogo;
