/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styles from '../Authorization.module.css';
import SignUpConfig from '../$configs/SignUpConfig.json';
import signUp from '../$services/apiSignUp';
import routes from '../../../../configs/routes';

const INITIAL_STATE = {
  nickName: '',
  email: '',
  password: '',
  phone: '',
};
const redirectTo = routes.SIGN_IN;
class SignUp extends Component {
  state = { ...INITIAL_STATE };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    signUp({ ...this.state }).then(({ data }) =>
      data.status === 'success'
        ? // eslint-disable-next-line no-alert
          (alert(
            `User with nickName: < ${
              data.user.nickName
            } > created successfuly. Process to login with your credentials`,
          ),
          history.push(redirectTo))
        : (console.log(data), alert(data.reason)),
    );
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const input = SignUpConfig.map(el => (
      <label key={el.label} className={styles.label}>
        {el.label}
        <input
          key={el.name}
          className={styles.input}
          onChange={this.handleChange}
          name={el.name}
          type={el.type}
          value={this.state[el.name]}
          autoComplete={el.autoComplete}
          placeholder={el.placeholder}
          required={el.required}
        />
      </label>
    ));
    return (
      <div className={styles.auth_container}>
        <form className={styles.auth_form} onSubmit={this.handleSubmit}>
          {input}
          <button className={styles.button} type="submit">
            Sign up!
          </button>
        </form>
      </div>
    );
  }
}
export default SignUp;
