import { connect } from 'react-redux';

import CartLinkView from './CartLinkView';

import { cartSelectors } from '../../modules/cart/duck';

const mstp = state => ({
  qty: cartSelectors.getCartItemsQtyFigure(state),
});

export default connect(mstp)(CartLinkView);
