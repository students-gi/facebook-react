import React, { MouseEventHandler } from 'react';

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
      className={className}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;