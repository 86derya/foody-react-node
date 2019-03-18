import axios from 'axios';

import actions from './menuActions';

axios.defaults.baseURL = 'http://localhost:3001';

// const fetchMenuItems = () => async dispatch => {
//   dispatch(actions.fetchRequest());

//   try {
//     const response = await axios.get(`/menu`);
//     dispatch(actions.fetchSuccess(response.data));
//   } catch (error) {
//     dispatch(actions.fetchError(error));
//   }
// };

const fetchMenuItems = category => async dispatch => {
  dispatch(actions.fetchRequest());
  try {
    const response = category
      ? await axios.get(`/menu?category=${category}`)
      : await axios.get(`/menu`);
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
