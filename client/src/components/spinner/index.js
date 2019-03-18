import React from 'react';
import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.backdrop}>
    <div className={styles.loader}> Loading... </div>
  </div>
);

export default Spinner;
