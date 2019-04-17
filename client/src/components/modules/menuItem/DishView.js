import React from 'react';

import styles from './MenuItem.module.css';

const Dish = ({ currentDish, id, onAddToCart }) => (
  <div className={styles.dish_details}>
    <img
      className={styles.dish__image}
      src={currentDish.image}
      alt={currentDish.name}
    />
    <h2 className={styles.dish__name}> {currentDish.name} </h2>
    <p className={styles.dish__description}> {currentDish.description}</p>
    <p className={styles.dish__price}>Price: {currentDish.price} $</p>
    <p className={styles.dish__ingredients}>Ингридиенты:</p>
    <ul className={styles.dish__ingredients_list}>
      {currentDish.ingredients &&
        currentDish.ingredients.map(item => (
          // eslint-disable-next-line no-underscore-dangle
          <li className={styles.dish__ingredients_item} key={item._id}>
            {currentDish.ingredients[currentDish.ingredients.length - 1] ===
            item
              ? item.name
              : `${item.name},`}
          </li>
        ))}
    </ul>
    <button
      type="button"
      className={styles.addToCartBtn}
      onClick={() => onAddToCart(id)}
    />
  </div>
);

export default Dish;
