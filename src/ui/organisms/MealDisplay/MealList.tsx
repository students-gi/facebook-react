import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*=====  Context imports  =====*/
import { useMealsContext } from "./providers/MealsProvider"
/*===== Component imports =====*/
import Card from "src/ui/molecules/Card";

function MealList() {
  const meals = useMealsContext();

  return (
    <div id={styles.mealList}>
      {meals?.map((mealName: string) => (
        <Card
          title={mealName}
        />
      ))}
    </div>
  )
}

export default MealList;