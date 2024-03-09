import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*===== Component imports =====*/
import MealsProvider from "./providers/MealsProvider"
import MealList from './MealList';
import MealCounter from './MealCounter';

function MealDisplay() {
  return (
    <div id={styles.mealDisplay}>
      <MealsProvider>
        <MealList />
        <MealCounter />
      </MealsProvider>
    </div>
  );
};

export default MealDisplay;