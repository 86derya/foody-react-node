import axios from 'axios';

import {
  authRequest,
  authSuccess,
  authError,
  signOutRequest,
  signOutSuccess,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './sessionActions';

import { cleanCart } from '../components/modules/cart/duck/cartActions';
import { getToken } from './sessionSelectors';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

// export const signUp = credentials => dispatch => {
//   axios
//     .post('http://localhost:8080/auth/register', credentials)
//     .then(
//       ({ data }) =>
//         data.status === 'success'
//           ? dispatch(authSuccess(data))
//           : dispatch(authError(data.user)),
//       // setAuthHeader(data.token);
//     )
//     .catch(error => console.log(error));
// };

export const signIn = credentials => dispatch => {
  dispatch(authRequest());

  axios
    .post('http://localhost:8080/auth/login', credentials)
    .then(({ data }) =>
      data.status === 'success'
        ? (setAuthHeader(data.token), dispatch(authSuccess(data)))
        : dispatch(authError(data.message)),
    )
    .catch(error => dispatch(authError(error)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());

  const token = getToken(getState());

  const config = {
    headers: {
      Authorization: token,
    },
  };

  return axios
    .post('http://localhost:8080/auth/signout', {}, config)
    .then(() => {
      dispatch(signOutSuccess());
      dispatch(cleanCart());
    });
};

export const getCurrentUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(getCurrentUserRequest());

  axios
    .post('http://localhost:8080/auth/current')
    .then(({ data }) => {
      setAuthHeader(token);
      return dispatch(getCurrentUserSuccess(data.user));
    })
    .catch(error => {
      // dispach екшен чтобы убрать токен из state
      clearAuthHeader();
      console.log('Error while refreshing: ', error);
    });
};
