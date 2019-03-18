import React from 'react';
import { connect } from 'react-redux';

import SiteLogo from './SiteLogo';
import SiteNav from './SiteNav';
import UserMenu from './userMenu/User-menu';
import CartLink from './cartLink';
import UserAuth from './userAuth';
import { getIsAuthenticated, getUser } from '../../session/sessionSelectors';
import { signOut } from '../../session/sessionOperations';

import styles from './AppHeader.module.css';

const Header = ({ isAuthenticated, user, onSignOut, history, location }) => (
  <div className={styles.header}>
    <SiteLogo />
    <SiteNav />
    {isAuthenticated ? (
      <UserMenu user={user} onSignOut={onSignOut} history={history} />
    ) : (
      <UserAuth history={history} location={location} />
    )}
    <CartLink />
  </div>
);

const mapStateToProps = state => ({
  user: getUser(state),
  isAuthenticated: getIsAuthenticated(state),
});

const options = { pure: false };

const mapDispatchToProps = {
  onSignOut: signOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  options,
)(Header);
