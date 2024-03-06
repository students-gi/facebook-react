import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler, // a JS function
  text: string
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;