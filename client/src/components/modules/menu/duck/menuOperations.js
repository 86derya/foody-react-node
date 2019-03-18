import axios from 'axios';

import actions from './menuActions';

axios.defaults.baseURL = 'http://localhost:8080';

const fetchMenuItems = category => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = category
      ? await axios.get(`/menu?category=${category}`)
      : await axios.get(`/menu`);
    console.log(response);
    dispatch(actions.fetchSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};

const fetchAvailableCategories = () => async dispatch => {
  dispatch(actions.fetchAvailableCategoriesRequest());

  try {
    const response = await axios.get(`/categories`);
    dispatch(actions.fetchAvailableCategoriesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchAvailableCategoriesError(error));
  }
};
export default {
  fetchMenuItems,
  fetchAvailableCategories,
};