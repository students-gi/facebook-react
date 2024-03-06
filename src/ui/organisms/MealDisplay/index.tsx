import React from 'react';
/*===== Component imports =====*/
import MealsProvider from "./providers/MealsProvider"
import MealList from './MealList';
import MealCounter from './MealCounter';

function MealDisplay() {
  return (
    <MealsProvider>
      <MealList />
      <MealCounter />
    </MealsProvider>
  );
};

export default MealDisplay;