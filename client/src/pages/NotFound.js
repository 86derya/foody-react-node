import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../configs/routes';

// import banan from '../data/banan.png';
import styles from '../components/index.module.css';

const NotFoundPage = () => (
  <div className={styles.notFound_container}>
    <h1>Error 404</h1>
    <h2>Whoops...something went wrong</h2>
    <p>
      The page you were looking for can’t be found – it may have been moved or
      deleted. Please try again or click
      <Link className={styles.menuPage__link} to={routes.MENU}>
        here
      </Link>
      to return to the menu page.
    </p>
    {/* <img src={banan} alt="not_found" width="600 px" /> */}
  </div>
);
export default NotFoundPage;
