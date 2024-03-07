import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*=====  Context imports  =====*/
import { useMealsContext } from "./providers/MealsProvider"
/*===== Component imports =====*/
import Card from "../../molecules/Card";

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