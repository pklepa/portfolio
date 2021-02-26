import React, { ReactElement } from 'react';
import styles from '../styles/components/ProfilePic.module.scss';

interface Props {}

function ProfilePic({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img
        src="/images/pk_draw.jpeg"
        className={`${styles.secondary} ${styles.left}`}
      />
      <img
        src="/images/pk_draw.jpeg"
        className={`${styles.secondary} ${styles.right}`}
      />

      <img src="/images/pk_draw.jpeg" alt="Small doodle of myself" />

      <img
        src="/images/pk_draw2.png"
        alt="Alternative doodle of myself"
        className={styles.easterEgg}
      />
    </div>
  );
}

export default ProfilePic;
