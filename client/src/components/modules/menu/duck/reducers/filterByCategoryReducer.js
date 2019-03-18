import types from '../menuActionsTypes';

export default function filterByCategoryReducer(state = '', { type, payload }) {
  switch (type) {
    case types.FILTER_BY_CATEGORY_GET:
      return payload;

    case types.FILTER_BY_CATEGORY_CHANGED:
      return payload;

    case types.FILTER_BY_CATEGORY_CLEAR:
      return payload;

    default:
      return state;
  }
}
