import types from '../menuActionsTypes';

export default function availableCategoriesReducer(
  state = [],
  { type, payload },
) {
  switch (type) {
    case types.AVAILABLE_CATEGORIES_FETCH_SUCCESS:
      return payload;

    default:
      return state;
  }
}
