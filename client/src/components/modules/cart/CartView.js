import React from 'react';
import { Link } from 'react-router-dom';

import tbodyCells from './$configs/CartTableConfig';
import styles from './Cart.module.css';

const CartView = ({
  dishes,
  totalPrice,
  onDeleteDishFromCart,
  onIncrementDish,
  onDecrementDish,
  location,
}) => {
  const IncrementDishBtn = ({ id }) => (
    <button
      className={styles.incrementBtn}
      type="button"
      onClick={() => onIncrementDish(id)}
    />
  );
  const DecrementDishBtn = ({ id }) => (
    <button
      className={styles.decrementBtn}
      type="button"
      onClick={() => onDecrementDish(id)}
    />
  );
  const DeleteDishFromCart = ({ id }) => (
    <button
      className={styles.deleteBtn}
      type="button"
      onClick={() => onDeleteDishFromCart(id)}
    />
  );
  const th = tbodyCells.map(cell => (
    <th key={cell} className={styles.cartTable_headCell}>
      {cell}
    </th>
  ));
  const row = dishes.map(({ _id, image, name, price, qty }) => (
    <tr className={styles.cartTable_bodyRow} key={_id}>
      <td>
        <Link
          to={{
            pathname: `/menu/${_id}`,
            state: { from: location },
          }}
          className={styles.cartTable_dishLink}
        >
          <img src={image} alt={name} width="60" height="60" />
          {name}
        </Link>
      </td>
      <td> {price} </td>
      <td>
        <div className={styles.cartTable_tdQty}>
          <DecrementDishBtn id={_id} />
          <span>{qty}</span>
          <IncrementDishBtn id={_id} />
        </div>
      </td>
      <td> {qty * price} </td>
      <td>
        <DeleteDishFromCart id={_id} />
      </td>
    </tr>
  ));

  return (
    <>
      {dishes.length > 0 ? (
        <div className={styles.cart_container}>
          <h2>
            Ваша корзина
            <p className={styles.cartTable_totalPrice}>
              Total: <span>{totalPrice}</span>
            </p>
          </h2>
          <table>
            <thead>
              <tr className={styles.cartTable_headRow}>{th}</tr>
            </thead>
            <tbody>{row}</tbody>
          </table>
        </div>
      ) : (
        <h2>Вы еще ничего не добавили в корзину &#9785; </h2>
      )}
    </>
  );
};

export default CartView;
