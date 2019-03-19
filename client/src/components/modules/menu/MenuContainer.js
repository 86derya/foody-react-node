import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Menu from './MenuView';
import { menuOperations, menuSelectors, menuActions } from './duck';
import { cartActions } from '../cart/duck';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends PureComponent {
  componentDidMount() {
    const category = getCategoryFromProps(this.props);
    const {
      fetchMenuItems,
      fetchAvailableCategories,
      getFilterByCategory,
    } = this.props;
    console.log('BAMS');
    getFilterByCategory(category);

    fetchAvailableCategories();

    return fetchMenuItems(category);
  }

  // shouldComponentUpdate(prevProps) {
  //   // const { getFilterByCategory } = this.props;
  //   const currentCategory = getCategoryFromProps(this.props);

  //   const nextCategory = getCategoryFromProps(prevProps);
  //   console.log(currentCategory + nextCategory);
  //   // console.log(nextCategory);
  //   // if (currentCategory !== nextCategory) {
  //   //   return false;
  //   // }
  //   return true;
  // }

  // componentDidUpdate(prevProps) {
  //   const { fetchMenuItems } = this.props;

  //   const prevCategory = getCategoryFromProps(prevProps);
  //   const nextCategory = getCategoryFromProps(this.props);

  //   if (prevCategory !== nextCategory) {
  //     fetchMenuItems(nextCategory);
  //   }
  // }

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
