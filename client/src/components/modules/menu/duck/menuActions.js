import { normalize } from 'normalizr';

import types from './menuActionsTypes';
import itemsSchema from '../../../redux/$configs/storeSchema';

const fetchRequest = () => ({
  type: types.MENU_FETCH_REQUEST,
});

const fetchSuccess = menuItems => {
  const normalizedItems = normalize(menuItems, [itemsSchema]);
  return {
    type: types.MENU_FETCH_SUCCESS,
    payload: {
      ids: {
        dishes: Object.keys(normalizedItems.entities.dishes),
      },
      entities: normalizedItems.entities,
    },
  };
};
const fetchError = error => ({
  type: types.MENU_FETCH_ERROR,
  payload: error,
});
const fetchAvailableCategoriesRequest = () => ({
  type: types.AVAILABLE_CATEGORIES_FETCH_REQUEST,
});

const fetchAvailableCategoriesSuccess = categories => ({
  type: types.AVAILABLE_CATEGORIES_FETCH_SUCCESS,
  payload: categories,
});

const fetchAvailableCategoriesError = error => ({
  type: types.AVAILABLE_CATEGORIES_FETCH_ERROR,
  payload: error,
});

const getCategoryFilter = categoryFromProps => ({
  type: types.FILTER_BY_CATEGORY_GET,
  payload: categoryFromProps || '',
});

const changeCategoryFilter = (category, history, location) => {
  history.push({
    pathname: location.pathname,
    search: `category=${category}`,
  });
  return {
    type: types.FILTER_BY_CATEGORY_CHANGED,
    payload: category,
  };
};

const clearCategoryFilter = history => {
  history.push({ pathname: '/menu' });
  return {
    type: types.FILTER_BY_CATEGORY_CLEAR,
    payload: '',
  };
};

const changeNameFilter = filter => ({
  type: types.FILTER_BY_DISH_NAME,
  payload: filter,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
  fetchAvailableCategoriesRequest,
  fetchAvailableCategoriesSuccess,
  fetchAvailableCategoriesError,
  getCategoryFilter,
  changeCategoryFilter,
  clearCategoryFilter,
  changeNameFilter,
};
