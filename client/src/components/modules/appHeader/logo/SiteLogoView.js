import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../$assets/logo.png';
import styles from '../AppHeader.module.css';
import routes from '../../../../configs/routes';

const SiteLogo = () => (
  <Link to={routes.HOME}>
    <img className={styles.site_logo} src={Logo} alt="logo" />
  </Link>
);
export default SiteLogo;
