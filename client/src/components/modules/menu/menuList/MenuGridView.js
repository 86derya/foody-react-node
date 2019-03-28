import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Menu.module.css';
import MenuGridCard from './MenuGridCardView';

const MenuGrid = ({ dishList, match, location, onAddToCart }) => {
  const MenuGridItem = dishList.map(
    ({ _id, name, price, image, description, currency }) => (
      <li className={styles.menu_item} key={_id}>
        <Link
          className={styles.menu_item_link}
          to={{
            pathname: `${match.url}/${_id}`,
            state: { from: location },
          }}
        >
          <MenuGridCard
            name={name}
            price={price}
            image={image}
            description={description}
            currency={currency}
          />
        </Link>
        <button
          className={styles.addToCartBtn}
          type="button"
          onClick={() => onAddToCart(_id)}
        />
      </li>
    ),
  );
  return (
    <div className={styles.menu__grid_container}>
      <ul className={styles.menu_list}>{MenuGridItem}</ul>
    </div>
  );
};
export default MenuGrid;
