import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  clickHandler?: MouseEventHandler, // a JS function
  text: string
}

function Button({ text, clickHandler }: ButtonProps) {
  return (
    <button onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;