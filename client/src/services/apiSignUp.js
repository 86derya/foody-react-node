import axios from 'axios';

const setBaseURL = () => {
  axios.defaults.baseURL = 'http://localhost:8080';
};

const signUp = async user => {
  setBaseURL();
  const response = await axios.post('/auth/register', user);
  return response;
};
export default signUp;
