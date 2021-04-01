import React from 'react';
import Loader from './Loader.jsx';
import useRequireAuth from '../hooks/useRequireAuth.js';

const Main = () => {
  const auth = useRequireAuth();

  if (!auth.user) {
    return <Loader />;
  }

  return <div>{`Hello, ${auth.user.firstName}`}</div>;
};

export default Main;
