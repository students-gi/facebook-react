import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Card from "../../molecules/Card";

function DayTitles() {
  // Getting the required day and time properties
  const time = new Date();
  const dayName = time.toLocaleString("en-gb", { weekday: 'long' });
  const isMorning = (time.getHours() >= 5 && time.getHours() < 12);

  let dayMessage;
  switch (dayName.toLowerCase()) {
    case 'wednesday':
      dayMessage = `It's ${dayName}, my dude~`
      break;
    case 'friday':
      dayMessage = `Survive this ${dayName}, and you'll be able to relax tomorow`
      break;
    case 'saturday':
    case 'sunday':
      dayMessage = `Enjoy this ${dayName} of yours`
      break;

    default:
      dayMessage = `Happy ${dayName}`
      break;
  }

  return (
    <Card
      className={styles.DayTitles}
      title={dayMessage}
      // Check the Card .tsx to see the conditional render "closer to metal"
      paragraph={isMorning ? 'Did ya take your pick-me-up yet?' : undefined}
    />
  );
}

export default DayTitles;