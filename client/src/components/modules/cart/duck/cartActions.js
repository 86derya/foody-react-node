import types from './cartActionsTypes';

const deleteFromCart = id => ({
  type: types.DELETE_FROM_CART,
  payload: { id },
});

const incrementQty = id => ({
  type: types.INCREMENT_AMOUNT,
  payload: { id },
});

const decrementQty = id => ({
  type: types.DECREMENT_AMOUNT,
  payload: { id },
});

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: { id },
});

export const cleanCart = () => ({
  type: types.CLEAN_CART,
  payload: [],
});

export default {
  cleanCart,
  addToCart,
  deleteFromCart,
  incrementQty,
  decrementQty,
};
