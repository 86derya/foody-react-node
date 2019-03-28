import React from 'react';
import { NavLink } from 'react-router-dom';

import withAuth from '../../../hocs/withAuth';

import routes from '../../../../configs/routes';
import styles from './userAuth.module.css';

const userAuth = () => (
  <div className={styles.wrap}>
    <NavLink
      to={routes.SIGN_UP}
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Sign up
    </NavLink>
    <NavLink
      to={routes.SIGN_IN}
      className={styles.link}
      activeClassName={styles.link_active}
    >
      Log in
    </NavLink>
  </div>
);

export default withAuth(userAuth);
