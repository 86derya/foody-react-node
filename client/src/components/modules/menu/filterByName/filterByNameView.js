import React from 'react';
import styles from '../Menu.module.css';

const filterbyNameInput = ({ filter, onFilterChange }) => (
  <>
    <input
      className={styles.filterByName_input}
      type="text"
      value={filter}
      onChange={onFilterChange}
      placeholder=" Filter by name..."
    />
    {filter && (
      <p className={styles.filterByName_summary}>
        Filter by dish name:
        <span className={styles.filterByName_filterBy}> {filter}</span>
        <span className={styles.filterByName_blinking}>...</span>
      </p>
    )}
  </>
);

export default filterbyNameInput;
