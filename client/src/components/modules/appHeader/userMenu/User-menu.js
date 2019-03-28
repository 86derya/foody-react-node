import React, { Component, createRef } from 'react';

import DropDown from './DropDown';
import styles from './UserMenu.module.css';
import avatar from '../../userAccount/$assets/avatar.png';

export default class UserMenu extends Component {
  state = {
    isDropDownOpen: false,
  };

  userNavContainer = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideUserNavContainer = this.userNavContainer.current.contains(
      e.target,
    );
    const { isDropDownOpen } = this.state;
    if (!isTargetInsideUserNavContainer && isDropDownOpen) {
      this.toggleDropDown();
    }
  };

  toggleDropDown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { user, onSignOut, history } = this.props;
    const UserAvatar = (
      <img className={styles.user_avatar} src={user.avatar} alt="avatar" />
    );
    const DefaultAvatar = (
      <img className={styles.user_avatar} src={avatar} alt="avatar" />
    );

    const userName = <span className={styles.user_name}>{user.nickName}</span>;
    return (
      <>
        <div
          className={styles.user_menu__container}
          onClick={this.toggleDropDown}
          ref={this.userNavContainer}
        >
          {user.avatar ? UserAvatar : DefaultAvatar}
          <span className={styles.loginedSpan}>Welcome, </span>
          {userName}
          {isDropDownOpen && (
            <DropDown onSignOut={onSignOut} history={history} />
          )}
        </div>
      </>
    );
  }
}
