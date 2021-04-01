import React from 'react';
import useRequireAuth from '../hooks/useRequireAuth.js';

const Main = () => {
  const auth = useRequireAuth();

  if (!auth.user) {
    return <div>Loading!</div>;
  }

  return <div>Hello world!</div>;
};

export default Main;
