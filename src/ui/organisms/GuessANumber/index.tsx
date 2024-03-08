import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Button from 'src/ui/atoms/Button';

const GUESS_MIN = 1;
const GUESS_MAX = 10;

function getRandom(min: number, max: number) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function handleClick() {
  let randomNum = getRandom(GUESS_MIN, GUESS_MAX);
  //console.log(randomNum);

  let userInput = prompt('Make your guess!');
  alert(
    `Computer rolled: ${randomNum},
    You guessed: ${userInput}`
  );
}

function GuessANumber() {
  return (
    <div id={styles.Guess}>
      <Button
        onClick={handleClick}
        text={`Guess a number between ${GUESS_MIN} and ${GUESS_MAX}`}
      />
    </div>
  );
}

export default GuessANumber;