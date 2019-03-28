import React, { Component } from 'react';
import OrdersHistoryTable from './orderTable/OrdersHistoryTable';
import OrderDetailsTemplate from './orderTable/ModalOrderDetailsTemplate';
import Modal from '../../modal';
import styles from './OrderHistory.module.css';
import * as API from './$services/apiOrders';
import Spinner from '../../spinner';

export default class OrderHistory extends Component {
  state = {
    orders: [],
    isModalOpen: false,
    orderDetails: {},
    isLoading: false,
    detailsShown: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.getAllUsers();
  }

  handleShowDetails = id => {
    this.setState({
      isModalOpen: true,
      isLoading: true,
      detailsShown: true,
    });
    this.getOrderDetails(id);
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      detailsShown: false,
    });
  };

  getAllUsers = () => {
    API.getAllOrders().then(orders =>
      this.setState({
        orders: orders.data,
        isLoading: false,
      }),
    );
  };

  getOrderDetails = ({ id }) => {
    API.getOrderById(id).then(order => {
      this.setState({
        isLoading: false,
        orderDetails: order,
        isModalOpen: true,
      });
    });
  };

  render() {
    const {
      isModalOpen,
      orders,
      orderDetails,
      isLoading,
      detailsShown,
    } = this.state;

    return (
      <div className={styles.order_history}>
        {isLoading ? (
          <Spinner />
        ) : (
          isModalOpen && (
            <Modal onClose={this.closeModal}>
              {detailsShown && <OrderDetailsTemplate order={orderDetails} />}
            </Modal>
          )
        )}
        <OrdersHistoryTable
          orders={orders}
          onShowDetails={this.handleShowDetails}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
