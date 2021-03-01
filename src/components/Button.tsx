import React, { ReactElement } from 'react';

import styles from '../styles/components/Button.module.scss';

interface Props {
  text: string;
  isPrimary: boolean;
  type: 'button' | 'submit';
  onClick?: () => void;
}

function Button({ onClick, text, isPrimary, type }: Props): ReactElement {
  return (
    <button
      onClick={onClick && onClick}
      type={type}
      className={`${styles.btn} ${isPrimary ? styles.primary : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
