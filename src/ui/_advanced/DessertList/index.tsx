import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*===== Component imports =====*/
import Heading1 from 'src/ui/atoms/Heading1';

type dessert = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  calories: number,
  allergens: string[]
}

// Supposed import from a database
const dessertData: dessert[] = [
  {
    id: 1,
    name: "Chocolate Cake",
    price: 8.99,
    image: 'chocolate_cake.jpg',
    description: "Decadent chocolate cake with a rich flavor.",
    calories: 350,
    allergens: ['gluten', 'dairy']
  },
  {
    id: 2,
    name: "Cheesecake",
    price: 6.99,
    image: 'cheesecake.jpg',
    description: "Creamy cheesecake with a graham cracker crust.",
    calories: 400,
    allergens: ['dairy']
  },
  {
    id: 3,
    name: "Tiramisu",
    price: 7.49,
    image: 'tiramisu.jpg',
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    calories: 650,
    allergens: ['gluten', 'dairy']
  },
  {
    id: 4,
    name: 'Vanilla Ice Cream',
    price: 5.49,
    image: 'vanilla_ice_cream.jpg',
    description: "Homemade vanilla ice cream with actual cow's milk striaght from a farm!",
    calories: 200,
    allergens: ['dairy']
  },
  {
    id: 5,
    name: "Panna Cotta",
    price: 6.99,
    image: 'panna_cotta.jpg',
    description: "A creamy Italian dessert with caramel sauce",
    calories: 200,
    allergens: ['dairy']
  },
  {
    id: 6,
    name: "Red Velvet Cake",
    price: 11.99,
    image: 'red_velvet_cake.jpg',
    description: "Moist red velvet cake with cream cheese frosting that tastes just criminal",
    calories: 380,
    allergens: ['gluten', 'dairy']
  },
  {
    id: 7,
    name: "Key Lime Pie",
    price: 8.49,
    image: 'key_lime_pie.jpg',
    description: "A refreshing key lime pie with graham cracker crust",
    calories: 220,
    allergens: ['gluten', 'dairy']
  },
  {
    id: 8,
    name: "Banana Bread",
    price: 5.99,
    image: 'banana_bread.jpg',
    description: "Homemade banana bread with walnuts",
    calories: 180,
    allergens: ['gluten', 'nuts']
  },
  {
    id: 9,
    name: "Apple Pie",
    price: 7.99,
    image: 'apple_pie.jpg',
    description: "A classic apple pie with cinnamon, just like grandma used to make",
    calories: 250,
    allergens: ['gluten', 'dairy']
  },
  {
    id: 10,
    name: "Lemon Tart",
    price: 9.49,
    image: 'lemon_tart.jpg',
    description: "The best lemon tart you would not believe does not have any gluten in it.",
    calories: 260,
    allergens: []
  }

];

function DessertList() {
  const glutenFreeItems = dessertData
    .filter(dessert => !dessert.allergens.includes('gluten'))
    .sort((a, b) => a.price - b.price)
    .map(dessert => {
      const text = `${dessert.name} - $${dessert.price}`
      return <li key={dessert.id}>{text}</li>
    });

  return (
    <div id={styles.DessertList}>
      <Heading1 title="Gluten-free deserts" />
      <ul>{glutenFreeItems}</ul>
    </div>
  );
}

export default DessertList;