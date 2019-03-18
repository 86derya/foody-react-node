import React from 'react';
import Select from 'react-select';

import styles from '../Menu.module.css';

const CategorySelector = props => {
  const {
    categoriesOption,
    selectedCategory,
    onCategoryChange,
    onClearCategorySelector,
    history,
    location,
  } = props;

  const options = [];
  categoriesOption.map(option =>
    options.push({ value: option.name, label: option.name }),
  );

  return (
    <>
      {selectedCategory && (
        <div className={styles.categorySelector_container}>
          <button
            className={styles.button__clearFilter}
            type="button"
            onClick={() => onClearCategorySelector(history)}
          >
            X
          </button>

          <p className={styles.selectedCategory__descr}>
            Selected Category: <span>{selectedCategory}</span>
          </p>
        </div>
      )}
      <Select
        className={styles.select}
        options={options}
        onChange={option => onCategoryChange(option.value, history, location)}
        value={selectedCategory}
        placeholder="Select Category..."
      />
    </>
  );
};
export default CategorySelector;
