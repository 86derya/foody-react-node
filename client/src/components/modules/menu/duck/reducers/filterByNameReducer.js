import types from '../menuActionsTypes';

export default function filterByNameReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FILTER_BY_DISH_NAME:
      return payload;
    // case types.FILTER_BY_CATEGORY_CLEAR:
    //   return '';
    // case types.FILTER_BY_CATEGORY_CHANGED:
    //   return '';
    // case types.MENU_FETCH_SUCCESS:
    //   return '';

    default:
      return state;
  }
}
