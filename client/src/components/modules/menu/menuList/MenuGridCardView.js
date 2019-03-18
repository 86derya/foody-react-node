import React, { Fragment } from 'react';
import styles from '../Menu.module.css';

const MenuGridCard = ({ name, image, price, description }) => {
  const dishImg = (
    <img className={styles.menu_card_image} src={image} alt="dish_photo" />
  );
  const dishName = <p className={styles.menu_card_title}> {name} </p>;
  const dishPrice = <p className={styles.menu_card_price}>Price: {price} $</p>;
  const dishDescr = (
    <p className={styles.menu_card_description}> {description} </p>
  );

  return (
    <Fragment>
      {dishImg}
      {dishName}
      {dishPrice}
      {dishDescr}
    </Fragment>
  );
};

export default MenuGridCard;
