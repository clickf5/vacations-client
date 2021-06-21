import React from 'react';
import AddVacationFormContainer from '../AddVacationForm/AddVacationFormContainer.jsx';

const Dashboard = () => (
  <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
    <div className="relative flex flex-col justify-center h-full px-3 mx-auto flex-center">
      <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
        <div className="relative p-1 flex items-end justify-end w-full ml-5 mr-4 sm:mr-0 sm:right-auto">
          <AddVacationFormContainer />
        </div>
      </div>
    </div>
  </header>
);

export default Dashboard;
