import React, { ReactElement } from 'react';
import styles from '../styles/components/ScrollingText.module.scss';

interface Props {
  direction: 'left' | 'right';
}

function ScrollingText({ direction }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <span className={direction === 'left' ? styles.toLeft : styles.toRight}>
        Full-stack JavaScript Developer &middot; Full-stack JavaScript Developer
        &middot; Full-stack JavaScript Developer &middot; Full-stack JavaScript
        Developer &middot;
      </span>
    </div>
  );
}

export default ScrollingText;
