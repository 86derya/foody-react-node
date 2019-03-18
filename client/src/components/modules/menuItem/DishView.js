import React from 'react';
import styles from './MenuItem.module.css';

const Dish = ({
  currentDish: { image, price, ingredients, name, description },
}) => (
  <div className={styles.dish_details}>
    <img className={styles.dish__image} src={image} alt={name} />
    <h2 className={styles.dish__name}> {name} </h2>
    <p className={styles.dish__description}> {description}</p>
    <p className={styles.dish__price}>Price: {price} $</p>
    <p>Ингридиенты:</p>
    <ul className={styles.dish__ingredients_list}>
      {ingredients &&
        ingredients.map(ingr => (
          <li className={styles.dish__ingredients_item} key={ingr}>
            {ingr}
          </li>
        ))}
    </ul>
  </div>
);

export default Dish;
