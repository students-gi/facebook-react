import React, { useState, useRef } from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Button from 'src/ui/atoms/Button';

function Calculator() {
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLParagraphElement>(null);
  const [result, setResult] = useState(0);

  // ES6 function that controls all of the output, basically
  const calculate = (e: React.MouseEvent<Element, MouseEvent>, operation: string) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current?.value);
    setResult((prevResult) => {
      switch (operation) {
        case 'plus':
          return prevResult + inputValue;
        case 'minus':
          return prevResult - inputValue;
        case 'times':
          return prevResult * inputValue;
        case 'divide':
          return prevResult / inputValue;
        case 'reset':
          return 0;
        default:
          throw new Error("UNDEFINED CALCULATION");
      }
    });
  };

  const resetInput = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div id={styles.Calculator}>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div className={styles.controls}>
          <Button
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => calculate(e, 'plus')}
            text='add' />
          <Button
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => calculate(e, 'minus')}
            text='subtract' />
          <Button
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => calculate(e, 'times')}
            text='multiply' />
          <Button
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => calculate(e, 'divide')}
            text='divide' />
          <Button
            className={styles.reset}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => resetInput(e)}
            text='reset the input' />
          <Button
            className={styles.reset}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => calculate(e, 'reset')}
            text='reset the result' />
        </div>
      </form>
    </div>
  );
}

export default Calculator;
