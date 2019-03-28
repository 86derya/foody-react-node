/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import NewOrderFormConfig from '../$configs/NewOrderFormConfig.json';
import styles from './NewOrder.module.css';

const INNITIAL_STATE = {
  address: '',
  price: '',
  rating: '',
};

export default class NewOrderForm extends Component {
  state = { ...INNITIAL_STATE };

  reset = () => {
    this.setState({ ...INNITIAL_STATE });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { address, price, rating } = this.state;
    const { onPostOrder } = this.props;
    onPostOrder({ address, price, rating });
    this.setState({ ...INNITIAL_STATE });
  };

  render() {
    const SubmitBtn = () => (
      <button className={styles.button} type="submit">
        Submit
      </button>
    );

    const input = NewOrderFormConfig.map(el => (
      <label className={styles.label} key={el.name}>
        {el.name}:
        <input
          key={el.name}
          className={styles.input}
          onChange={this.handleChange}
          name={el.name}
          type={el.type}
          value={this.state[el.name]}
          autoComplete={el.autoComplete}
          placeholder={el.placeholder}
          required
        />
      </label>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {input}
          <SubmitBtn />
        </form>
      </div>
    );
  }
}
