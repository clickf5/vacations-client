import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default (Component) => {
  const AuthRedirect = (props) => {
    const auth = useAuth();
    return (auth.user ? <Component {...props} /> : <Redirect to="/signin" />);
  };

  return AuthRedirect;
};
