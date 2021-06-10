import React from 'react';
import Modal from './Modal.jsx';

const ModalContainer = (props) => {
  const { isOpen, children } = props;
  return (
    isOpen && (
    <Modal>
      <div className="absolute h-screen w-full z-10 inset-0 overflow-y-auto">
        <div className="absolute w-full h-full inset-0 bg-gray-500 opacity-75" />
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />
          <div className="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div>
              <div className="rounded-lg p-8 bg-white shadow">
                <div className="bg-white dark:bg-gray-800 ">
                  <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    )
  );
};

export default ModalContainer;
