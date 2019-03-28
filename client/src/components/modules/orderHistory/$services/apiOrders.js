import axios from 'axios';

import baseURL from '../../../../configs/serverUrl';

const setBaseURL = () => {
  axios.defaults.baseURL = baseURL;
};

const getAllOrders = () => {
  setBaseURL();
  axios
    .get('/orders')
    .then(response => response)
    .catch(error => {
      console.log(error);
    });
};

const getOrderById = id => {
  setBaseURL();
  axios
    .get(`/orders/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
};

const deleteOrderById = id => {
  setBaseURL();
  axios
    .delete(`/orders/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
};

const addOrder = ({ address, price, rating, date }) => {
  setBaseURL();
  axios
    .post('/orders', { address, rating, price, date })
    .then(response => response)
    .catch(error => {
      console.log(error);
    });
};

export { getAllOrders, getOrderById, deleteOrderById, addOrder };
