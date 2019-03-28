import React from 'react';
import styles from '../OrderHistory.module.css';
import tbodyCells from '../$configs/OrderHistoryTableConfig';

const OrderHistoryTable = ({ orders, onShowDetails }) => {
  const ShowMoreBtn = id => (
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        onShowDetails(id);
      }}
    >
      Детальнее
    </button>
  );

  const th = tbodyCells.map(cell => <th key={cell}>{cell}</th>);
  const row = orders.map(({ id, date, price, address, rating }) => (
    <tr className={styles.tbody_row} key={id}>
      <td> {date} </td>
      <td> {price} </td>
      <td> {address} </td>
      <td> {rating} </td>
      <td className={styles.btn_cell}>
        <ShowMoreBtn id={id} />
      </td>
    </tr>
  ));

  return (
    <div className={styles.order_table}>
      <table>
        <thead>
          <tr>{th}</tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    </div>
  );
};

export default OrderHistoryTable;
