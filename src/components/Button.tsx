import React, { ReactElement } from 'react';

import styles from '../styles/components/Button.module.scss';

interface ButtonProps {
  text: string;
  isPrimary: boolean;
  type: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({
  onClick,
  text,
  isPrimary,
  type,
  disabled,
}: ButtonProps): ReactElement {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${styles.btn} ${isPrimary ? styles.primary : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
