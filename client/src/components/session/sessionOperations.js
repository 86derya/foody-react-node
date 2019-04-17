import axios from 'axios';

import baseURL from '../../configs/serverUrl';

import {
  authRequest,
  authSuccess,
  authError,
  signOutRequest,
  signOutSuccess,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './sessionActions';

import { cleanCart } from '../modules/cart/duck/cartActions';
import { getToken } from './sessionSelectors';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// const setHeader = () => {
//   axios.defaults.headers = {};
// };
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const signIn = credentials => dispatch => {
  setBaseURL();
  dispatch(authRequest());
  // console.log('credentials', credentials);
  return axios
    .post('/auth/login', credentials)
    .then(({ data }) =>
      data.status === 'success'
        ? (setAuthHeader(data.token), dispatch(authSuccess(data)))
        : dispatch(authError(data.message)),
    )
    .catch(error => dispatch(authError(error)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());
  setBaseURL();

  const token = getToken(getState());

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return axios.post('auth/logout', {}, config).then(() => {
    dispatch(signOutSuccess());
    dispatch(cleanCart());
  });
};

export const getCurrentUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;

  setBaseURL();
  setAuthHeader(token);
  dispatch(getCurrentUserRequest());

  axios
    .post('/auth/current', {})
    .then(({ data }) => {
      // console.log('data ', data);
      setAuthHeader(token);
      return dispatch(getCurrentUserSuccess(data.user));
    })
    .catch(error => {
      // dispach екшен чтобы убрать токен из state
      clearAuthHeader();
      console.log('Error while refreshing: ', error);
    });
};
