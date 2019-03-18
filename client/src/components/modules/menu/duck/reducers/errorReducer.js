import types from '../menuActionsTypes';

export default function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_REQUEST:
      return null;

    case types.MENU_FETCH_ERROR:
      return payload;

    default:
      return state;
  }
}
