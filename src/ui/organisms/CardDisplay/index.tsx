import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Card from "src/ui/molecules/Card";

function CardDisplay() {
  return (
    <div id={styles.cardDisplay}>
      <Card
        title='Hello from 1st card&apos;s title!'
        subtitle='and a &quot;hey&quot; from 1st card&apos;s subtitle'
      />
      <Card
        title='Hello from 2nd card&apos;s title!'
        subtitle='and a &quot;hey&quot; from 2nd card&apos;s subtitle'
        paragraph='This card even has its own paragraph!'
      />
      <Card
        title='Hello from 3rd card&apos;s title!'
      />
    </div>
  );
}

export default CardDisplay;