import React from 'react';
import { useAuth } from '../hooks/useAuth';
import withRedirect from './withRedirect.js';

export default (ComposeComponent) => {
  const WithAuthRedirect = (props) => {
    const { redirectTo = '/signin' } = props;

    const auth = useAuth();

    const Component = withRedirect(ComposeComponent);

    return <Component redirect={!auth.isAuthenticate} redirectTo={redirectTo} {...props} />;
  };

  return WithAuthRedirect;
};
