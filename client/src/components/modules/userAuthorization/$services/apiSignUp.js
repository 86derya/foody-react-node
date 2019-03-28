import axios from 'axios';
import baseURL from '../../../../configs/serverUrl';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

const signUp = async user => {
  setBaseURL();
  const response = await axios.post('/auth/register', user);
  return response;
};
export default signUp;
