import React, { ReactElement } from 'react';
import styles from '../styles/components/Footer.module.scss';
import SmallLogo from './SmallLogo';

function Footer(): ReactElement {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <span>Pedro Klepa &middot; 2021</span>
        <SmallLogo />
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
