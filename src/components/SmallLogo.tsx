import React, { ReactElement } from 'react';
import styles from '../styles/components/SmallLogo.module.scss';

interface Props {
  onClick?: () => void;
}

function SmallLogo({ onClick }: Props): ReactElement {
  return (
    <div onClick={onClick} className={styles.logoContainer}>
      <h1>pk</h1>

      <div className={styles.solidBackground} />
      <div className={styles.gradientBackground} />
    </div>
  );
}

export default SmallLogo;
