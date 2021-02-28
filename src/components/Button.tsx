import { symlink } from 'fs';
import React, { ReactElement } from 'react';

import styles from '../styles/components/Button.module.scss';

interface Props {
  text: string;
  isPrimary: boolean;
  type: string;
}

function Button({ text, isPrimary, type }): ReactElement<Props> {
  return (
    <button
      type={type}
      className={`${styles.btn} ${isPrimary ? styles.primary : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
