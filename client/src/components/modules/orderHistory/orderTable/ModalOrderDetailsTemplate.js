import React from 'react';
import styles from '../OrderHistory.module.css';

const OrderDetails = ({ order }) => (
  <div className={styles.order__details_container}>
    <ul className={styles.order__details_list}>
      <li className={styles.order__details_item}>
        <p>Date:</p>Date: {order.date}
      </li>
      <li className={styles.order__details_item}>
        <p>Address:</p> {order.address}
      </li>
      <li className={styles.order__details_item}>
        <p>Price: </p>
        {order.price}
      </li>
      <li className={styles.order__details_item}>
        <p>Rated:</p> {order.rating}
      </li>
    </ul>
  </div>
);

export default OrderDetails;
