import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*=====  Context imports  =====*/
import { useMealsContext } from './providers/MealsProvider';

function MealCounter() {
  const meals = useMealsContext();
  return (
    <h3 id={styles.mealCounter}>Number of registered meals: {meals?.length}</h3>
  )
}

export default MealCounter;