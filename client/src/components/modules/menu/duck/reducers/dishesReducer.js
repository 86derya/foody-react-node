import types from '../menuActionsTypes';

export default function dishesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      return payload.ids.dishes;
    default:
      return state;
  }
}
