import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {
  const { children } = props;
  const element = document.createElement('div');
  element.className = 'relative';

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  });

  return ReactDOM.createPortal(
    children,
    element,
  );
};

export default Modal;
