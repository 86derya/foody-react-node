import { createSelector } from 'reselect';

const getCartIds = state => state.cart.ids;
const getItemsEntities = state => state.entities.dishes;

const getCartItemsQty = state => state.cart.qty;

const getCartItemsQtyFigure = createSelector(
  getCartIds,
  ids => (ids ? ids.length : []),
);

const getCartItems = createSelector(
  [getCartIds, getCartItemsQty, getItemsEntities],
  (ids, qties, dishes = {}) =>
    ids.map(id => ({
      ...dishes[id],
      qty: qties[id],
    })),
);

const getTotalPrice = createSelector(
  getCartItems,
  items => items.reduce((acc, item) => acc + item.price * item.qty, 0),
);

export default {
  getTotalPrice,
  getCartItems,
  getCartItemsQty,
  getCartItemsQtyFigure,
};
