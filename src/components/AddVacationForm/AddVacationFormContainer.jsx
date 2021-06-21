import React, { useState } from 'react';
import ModalContainer from '../Modal/ModalContainer.jsx';
import AddVacationForm from './AddVacationForm.jsx';

const AddVacationFormContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    const toogle = !isOpen;
    setIsOpen(toogle);
  };

  return (
    <>
      <button
        type="button"
        className="px-4 py-1 flex justify-center items-center  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full"
        onClick={handleOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
        Add vacation
      </button>
      <ModalContainer isOpen={isOpen}>
        <AddVacationForm />
      </ModalContainer>
    </>
  );
};

export default AddVacationFormContainer;
