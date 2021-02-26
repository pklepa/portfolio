import { symlink } from 'fs';
import React, { ReactElement } from 'react';

import styles from '../styles/components/Button.module.scss';

interface Props {
  text: string;
  isPrimary: boolean;
}

function Button({ text, isPrimary }): ReactElement<Props> {
  return (
    <button className={`${styles.btn} ${isPrimary ? styles.primary : ''}`}>
      {text}
    </button>
  );
}

export default Button;
