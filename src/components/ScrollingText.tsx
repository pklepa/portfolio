import React, { ReactElement } from 'react';
import styles from '../styles/components/ScrollingText.module.scss';

interface Props {
  text: string;
  direction: 'left' | 'right';
}

function ScrollingText({ text, direction }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <span className={direction === 'left' ? styles.toLeft : styles.toRight}>
        {Array(4).fill(text).join(' ')}
      </span>
    </div>
  );
}

export default ScrollingText;
