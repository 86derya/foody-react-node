import React from 'react';
import { connect } from 'react-redux';

import avatar from './$assets/avatar.png';
import { getUser } from '../../session/sessionSelectors';
import formConfig from './$configs/userAccountFormConfig.json';

import styles from './Account.module.css';

const Account = ({ onSubmit, user, onChange }) => {
  const input = formConfig.map(el => (
    <label key={el.label} className={styles.label}>
      {el.label}
      <input
        key={el.name}
        className={styles.input}
        onChange={onChange}
        name={el.name}
        type={el.type}
        // value={[el.name]}
        autoComplete={el.autoComplete}
        placeholder={el.placeholder}
      />
    </label>
  ));
  const UserAvatar = (
    <img className={styles.user_avatar} src={user.avatar} alt="avatar" />
  );
  const DefaultAvatar = (
    <img className={styles.user_avatar} src={avatar} alt="avatar" />
  );
  return (
    <>
      <h2 className={styles.header}>Account details</h2>
      <div className={styles.wrap}>
        <div className={styles.info}>
          {user.avatar ? UserAvatar : DefaultAvatar}
          <p className={styles.name}>
            Name: <span className={styles.name_details}> {user.name}</span>
          </p>
          <p className={styles.phone}>
            Phone:
            {user.phone ? (
              <span className={styles.phone_details}> {user.phone}</span>
            ) : (
              <span className={styles.phone_details}> N/A</span>
            )}
          </p>
          <p className={styles.email}>
            @: <span className={styles.email_details}> {user.email}</span>
          </p>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          {input}
          <button type="submit">update</button>
        </form>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Account);
