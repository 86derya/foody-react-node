import React, { Component } from 'react';
import Select from 'react-select';
import queryString from 'query-string';

import styles from '../Menu.module.css';

class CategorySelector extends Component {
  handleFilterChange = selectedCategory => {
    const { onCategoryChange, history, location } = this.props;
    const prevCategory = queryString.parse(location.search).category;
    if (selectedCategory === prevCategory) return;
    onCategoryChange(selectedCategory, history, location);
  };

  render() {
    const {
      categoriesOption,
      selectedCategory,
      onClearCategorySelector,
      history,
    } = this.props;
    const options = [];
    categoriesOption.map(option =>
      options.push({ value: option.name, label: option.name }),
    );
    return (
      <>
        {selectedCategory && (
          <div className={styles.categorySelector_container}>
            <p className={styles.selectedCategory__descr}>
              Selected Category: <span>{selectedCategory}</span>
            </p>
            <button
              className={styles.button__clearFilter}
              type="button"
              onClick={() => onClearCategorySelector(history)}
            >
              X
            </button>
          </div>
        )}
        <Select
          className={styles.select}
          options={options}
          onChange={option => this.handleFilterChange(option.value)}
          value={selectedCategory}
          placeholder="Select Category..."
        />
      </>
    );
  }
}
export default CategorySelector;
