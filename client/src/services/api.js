import axios from 'axios';

const BASE_URL = 'http://localhost:3001/orders';

const getAllOrders = () =>
  axios
    .get(BASE_URL)
    .then(response => response)
    .catch(error => {
      console.log(error);
    });

const getOrderById = id =>
  axios
    .get(`${BASE_URL}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

const deleteOrderById = id =>
  axios
    .delete(`${BASE_URL}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

const addOrder = ({ address, price, rating, date }) =>
  axios
    .post(BASE_URL, { address, rating, price, date })
    .then(response => response)
    .catch(error => {
      console.log(error);
    });

export { BASE_URL, getAllOrders, getOrderById, deleteOrderById, addOrder };
export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response;
};
