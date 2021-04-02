import React from 'react';
import { Redirect } from 'react-router-dom';

export default (Component) => {
  const WithRedirect = (props) => {
    const {
      redirect = false,
      redirectTo = '/',
    } = props;

    return redirect ? <Redirect to={redirectTo} /> : <Component {...props} />;
  };

  return WithRedirect;
};
