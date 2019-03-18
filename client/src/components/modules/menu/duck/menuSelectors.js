import { createSelector } from 'reselect';

const getDishesIds = state => state.dishListIds;
const getDishesEntities = state => state.entities.dishes;
const getAvailableCategories = state => state.availableCategories;
const getFilterByCategory = state => state.filterByCategory;
const getFilterByName = state => state.filterByName;
const getIsLoading = state => state.isLoading;

const getAllDishes = createSelector(
  [getDishesIds, getDishesEntities],
  (dishListIds, dishes) => dishListIds.map(id => dishes[id]),
);

const getFilteredByNameDishes = createSelector(
  [getAllDishes, getFilterByName],
  (dishes, filterbyName) =>
    dishes.filter(dish =>
      dish.name.toLowerCase().includes(filterbyName.toLowerCase()),
    ),
);

const getVisibleDishes = state =>
  getFilterByName(state) ? getFilteredByNameDishes(state) : getAllDishes(state);

export default {
  getFilterByName,
  getAvailableCategories,
  getFilterByCategory,
  getFilteredByNameDishes,
  getVisibleDishes,
  getIsLoading,
};
