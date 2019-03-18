import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Menu.module.css';
import MenuGridCard from './MenuGridCardView';

const MenuGrid = ({ dishList, match, location, onAddToCart }) => {
  const MenuGridItem = dishList.map(({ id, name, price, image }) => (
    <li className={styles.menu_item} key={id}>
      <Link
        to={{
          pathname: `${match.url}/${id}`,
          state: { from: location },
        }}
      >
        <MenuGridCard name={name} price={price} image={image} />
      </Link>
      <button
        className={styles.addToCartBtn}
        type="button"
        onClick={() => onAddToCart(id)}
      />
    </li>
  ));
  return (
    <div className={styles.menu__grid_container}>
      <ul className={styles.menu_list}>{MenuGridItem}</ul>
    </div>
  );
};
export default MenuGrid;
