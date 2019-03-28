import React from 'react';

import styles from './MenuItem.module.css';

const Dish = ({ currentDish }) => (
  <div className={styles.dish_details}>
    <img
      className={styles.dish__image}
      src={currentDish.image}
      alt={currentDish.name}
    />
    <h2 className={styles.dish__name}> {currentDish.name} </h2>
    <p className={styles.dish__description}> {currentDish.description}</p>
    <p className={styles.dish__price}>Price: {currentDish.price} $</p>
    <p>Ингридиенты:</p>
    <ul className={styles.dish__ingredients_list}>
      {currentDish.ingredients &&
        currentDish.ingredients.map(ingr => (
          <li className={styles.dish__ingredients_item} key={ingr.name}>
            {ingr.name}
          </li>
        ))}
    </ul>
  </div>
);

export default Dish;
