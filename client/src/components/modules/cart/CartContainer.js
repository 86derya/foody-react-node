import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartView from './CartView';
import { cartActions, cartSelectors } from './duck';
import { menuOperations } from '../menu/duck';

class CartContainer extends Component {
  componentDidMount() {
    const { fetchMenuItems } = this.props;
    fetchMenuItems();
  }

  goBack = () => {
    const { history, location } = this.props;
    history.push({
      pathname: '/menu',
      state: { from: location },
    });
  };

  render() {
    return <CartView {...this.props} />;
  }
}
const mapStateToProps = state => ({
  dishes: cartSelectors.getCartItems(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});
const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  onDecrementDish: cartActions.decrementQty,
  onIncrementDish: cartActions.incrementQty,
  onDeleteDishFromCart: cartActions.deleteFromCart,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartContainer);
