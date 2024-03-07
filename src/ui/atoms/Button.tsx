import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  id?: string,
  onClick?: MouseEventHandler, // a JS function
  text: string
}

function Button({ id, text, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;