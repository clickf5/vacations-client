import React from 'react';
import Loader from '../components/Loader.jsx';
import useRequireAuth from '../hooks/useRequireAuth.js';

export default (Component) => {
  const WithProtect = (props) => {
    const auth = useRequireAuth();

    if (!auth.user) {
      return <Loader />;
    }

    return <Component {...props} />;
  };

  return WithProtect;
};
