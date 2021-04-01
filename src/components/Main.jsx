import React from 'react';
import useRequireAuth from '../hooks/useRequireAuth.js';

const Main = () => {
  const auth = useRequireAuth();

  if (!auth.user) {
    return <div>Loading!</div>;
  }

  return <div>{`Hello, ${auth.user.firstName}`}</div>;
};

export default Main;
