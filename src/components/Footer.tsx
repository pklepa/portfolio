// TODO: When the user clicks the SmallLogo, scroll back to the top

import React, { ReactElement } from 'react';
import styles from '../styles/components/Footer.module.scss';
import SmallLogo from './SmallLogo';

interface Props {
  heroRef: any;
}

function Footer({ heroRef }: Props): ReactElement {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <span>Pedro Klepa &middot; 2021</span>
        <SmallLogo
          onClick={() => {
            heroRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'start',
            });
          }}
        />
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
