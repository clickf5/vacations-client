import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx';

const modalRoot = document.getElementById('modal-root');

const ModalContainer = (props) => {
  const { isOpen, children } = props;

  const element = document.createElement('div');
  // element.className = 'relative';

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  });

  return (
    isOpen && ReactDOM.createPortal(
      <Modal>{children}</Modal>,
      element,
    )
  );
};

export default ModalContainer;
