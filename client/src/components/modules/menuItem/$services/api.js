import axios from 'axios';
import baseURL from '../../../../configs/serverUrl';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

export const getMenuItemById = async id => {
  setBaseURL();
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

export const postMenuItemComment = async (id, comment) => {
  setBaseURL();
  const response = await axios.put(`/menu/${id}/comments`, comment);
  return response.data;
};
