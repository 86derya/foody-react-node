import { combineReducers } from 'redux';

import types from '../cartActionsTypes';

function ids(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload.id) ? state : [...state, payload.id];

    case types.DELETE_FROM_CART:
      return state.filter(id => id !== payload.id);

    case types.CLEAN_CART:
      return payload;

    default:
      return state;
  }
}

function qty(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };

    case types.INCREMENT_AMOUNT:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
      };

    case types.DECREMENT_AMOUNT:
      return {
        ...state,
        [payload.id]: state[payload.id] > 1 ? state[payload.id] - 1 : 1,
      };

    case types.DELETE_FROM_CART: {
      const { [payload.id]: _, ...newState } = state;

      return newState;
    }
    default:
      return state;
  }
}

export default combineReducers({
  ids,
  qty,
});
