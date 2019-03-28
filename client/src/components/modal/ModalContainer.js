import React, { Component, createRef } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleCloseModal);
    window.addEventListener('keydown', this.handleESCWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleCloseModal);
    window.removeEventListener('keydown', this.handleESCWindow);
  }

  handleCloseModal = ({ target }) => {
    const { onClose } = this.props;
    if (target !== this.containerRef.current) return;
    onClose();
  };

  handleESCWindow = e => {
    const { onClose } = this.props;
    const keyDown = e.keyCode;
    if (keyDown !== 27) return;
    onClose();
  };

  render() {
    const { onClose, children } = this.props;
    const CloseModalBtn = () => (
      <button className={styles.button} type="button" onClick={onClose}>
        Close
      </button>
    );
    return (
      <div className={styles.backdrop} ref={this.containerRef}>
        <div className={styles.modal}>
          <div> {children} </div>
          <CloseModalBtn />
        </div>
      </div>
    );
  }
}
