import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartLink.module.css';
import routes from '../../../configs/routes';

const CartLinkView = ({ qty }) => (
  <div className={styles.container}>
    <div>
      <Link to={routes.CART}>
        <img
          className={styles.image}
          src="http://icons.iconarchive.com/icons/rafiqul-hassan/blogger/256/Shopping-Cart-icon.png"
          width="60"
          alt="cart"
        />
        {qty > 0 && <span className={styles.amount}>{qty}</span>}
      </Link>
    </div>
  </div>
);

export default CartLinkView;
