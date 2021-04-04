import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './useAuth.js';

const useRequireAuth = (redirectUrl = '/sign-in') => {
  const auth = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (auth.user === false) {
      history.push(redirectUrl);
    }
  }, [auth, history, redirectUrl]);

  return auth;
};

export default useRequireAuth;
