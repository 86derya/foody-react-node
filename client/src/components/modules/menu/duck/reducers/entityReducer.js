import types from '../menuActionsTypes';

export default function entityReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      return payload.entities;

    // case types.ADD_SUCCESS:
    //   return [...state, payload];

    // case types.DELETE_SUCCESS:
    //   return state.filter(item => item.id !== payload);

    default:
      return state;
  }
}
