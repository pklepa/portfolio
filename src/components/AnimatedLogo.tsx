import { ReactElement } from 'react';

import styles from '../styles/components/AnimatedLogo.module.scss';

interface Props {}

function AnimatedLogo(): ReactElement<Props> {
  return (
    <div className={styles.logoContainer}>
      <h1>pedro klepa</h1>
    </div>
  );
}

export default AnimatedLogo;
