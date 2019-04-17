import React from 'react';

import Spinner from '../../spinner';
import CategorySelector from './categorySelector';
import FilterByName from './filterByName';
import MenuGrid from './menuGrid/MenuGridView';
import styles from './Menu.module.css';

const Menu = ({
  dishList,
  match,
  location,
  history,
  availableCategories,
  filterByCategory,
  onCategoryChange,
  onClearCategorySelector,
  onFilterByNameChange,
  filterByName,
  isLoading,
  onAddToCart,
}) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className={styles.container}>
        <CategorySelector
          categoriesOption={availableCategories}
          selectedCategory={filterByCategory}
          onCategoryChange={onCategoryChange}
          onClearCategorySelector={onClearCategorySelector}
          history={history}
          location={location}
        />
        <FilterByName
          filter={filterByName}
          onFilterChange={({ target }) => onFilterByNameChange(target.value)}
        />
        <MenuGrid
          dishList={dishList}
          match={match}
          location={location}
          onAddToCart={onAddToCart}
        />
      </div>
    )}
  </>
);
export default Menu;
