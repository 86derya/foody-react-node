import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Menu from './MenuView';
import { menuOperations, menuSelectors, menuActions } from './duck';
import { cartActions } from '../cart/duck';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  componentDidMount() {
    const {
      fetchMenuItems,
      getFilterByCategory,
      fetchAvailableCategories,
      availableCategories,
    } = this.props;
    const category = getCategoryFromProps(this.props);

    if (availableCategories.length < 1) {
      fetchAvailableCategories();
    }
    getFilterByCategory(category);

    return fetchMenuItems(category);
  }

  render() {
    return <Menu {...this.props} />;
  }
}
const mapStateToProps = state => ({
  dishList: menuSelectors.getVisibleDishes(state),
  availableCategories: menuSelectors.getAvailableCategories(state),
  filterByCategory: menuSelectors.getFilterByCategory(state),
  filterByName: menuSelectors.getFilterByName(state),
  isLoading: menuSelectors.getIsLoading(state),
});
const mapDispatchToProps = {
  onAddToCart: cartActions.addToCart,
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchAvailableCategories: menuOperations.fetchAvailableCategories,
  onCategoryChange: menuActions.changeCategoryFilter,
  onClearCategorySelector: menuActions.clearCategoryFilter,
  getFilterByCategory: menuActions.getCategoryFilter,
  onFilterByNameChange: menuActions.changeNameFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
