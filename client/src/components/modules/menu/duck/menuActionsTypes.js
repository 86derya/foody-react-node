const MENU_FETCH_REQUEST = '[menu dishList] FETCH_REQUEST';
const MENU_FETCH_SUCCESS = '[menu dishList] FETCH_SUCCESS';
const MENU_FETCH_ERROR = '[menu dishList] FETCH_ERROR';

const AVAILABLE_CATEGORIES_FETCH_REQUEST =
  '[menu availableCategories] FETCH_REQUEST';
const AVAILABLE_CATEGORIES_FETCH_SUCCESS =
  '[menu availableCategories] FETCH_SUCCESS';
const AVAILABLE_CATEGORIES_FETCH_ERROR =
  '[menu availableCategories] FETCH_ERROR';

const FILTER_BY_CATEGORY_GET = '[menu filterByCategory] FILTER_GET';
const FILTER_BY_CATEGORY_CHANGED = '[menu filterByCategory] FILTER_CHANGED';
const FILTER_BY_CATEGORY_CLEAR = '[menu filterByCategory] FILTER_CLEAR';

const FILTER_BY_DISH_NAME = '[menu filterByDishName] FILTER_CHANGED';

export default {
  MENU_FETCH_REQUEST,
  MENU_FETCH_SUCCESS,
  MENU_FETCH_ERROR,
  AVAILABLE_CATEGORIES_FETCH_REQUEST,
  AVAILABLE_CATEGORIES_FETCH_SUCCESS,
  AVAILABLE_CATEGORIES_FETCH_ERROR,
  FILTER_BY_CATEGORY_GET,
  FILTER_BY_CATEGORY_CHANGED,
  FILTER_BY_CATEGORY_CLEAR,
  FILTER_BY_DISH_NAME,
};
