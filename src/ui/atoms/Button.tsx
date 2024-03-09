import React, { MouseEventHandler } from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';

type ButtonProps = {
  id?: string,
  className?: string,

  onClick: MouseEventHandler, // a JS function
  text: string
}

function Button({ id, className, text, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      className={`${styles.button} ${className}`}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;