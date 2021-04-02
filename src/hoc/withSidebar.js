import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import withProtect from './withProtect.js';

export default (Component) => {
  const WithSidebar = (props) => (
    <div className="flex items-start justify-between container mx-auto">
      <Sidebar />
      <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <Component {...props} />
      </div>
    </div>
  );

  return withProtect(WithSidebar);
};
