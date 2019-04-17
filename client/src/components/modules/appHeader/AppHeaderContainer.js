import React from 'react';
import { connect } from 'react-redux';

import SiteLogo from './logo';
import SiteNav from './siteNav';
import UserMenu from './userMenu/User-menu';
import CartLink from './cartLink';
import UserAuth from './userAuthLinks';
import { getIsAuthenticated, getUser } from '../../session/sessionSelectors';
import { signOut } from '../../session/sessionOperations';

import styles from './AppHeader.module.css';

const Header = ({ isAuthenticated, user, onSignOut, history, location }) => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <SiteLogo />
      <SiteNav />
      {isAuthenticated ? (
        <UserMenu user={user} onSignOut={onSignOut} history={history} />
      ) : (
        <UserAuth history={history} location={location} />
      )}
      <CartLink />
    </div>
  </header>
);

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onSignOut: signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
