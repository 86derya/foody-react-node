import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../AppHeader.module.css';
import navList from '../$configs/siteNavConfig';

const SiteNav = () => {
  const navItem = navList.map(item => (
    <li className={styles.navigation_item} key={item.name}>
      <NavLink
        to={item.path}
        className={styles.navigation_link}
        activeClassName={styles.navigation_alink}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.navigation_container}>
      <ul className={styles.navigation_list}> {navItem} </ul>
    </nav>
  );
};
export default SiteNav;
