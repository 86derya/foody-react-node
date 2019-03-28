import axios from 'axios';
import baseURL from '../../../../configs/serverUrl';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

const getMenuItemById = async id => {
  setBaseURL();
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};
export default getMenuItemById;
