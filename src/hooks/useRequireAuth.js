import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './useAuth.js';

const useRequireAuth = (redirectUrl = '/signin') => {
  const auth = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (auth.user === false) {
      history.push(redirectUrl);
    }
  }, [auth, history]);

  return auth;
};

export default useRequireAuth;
