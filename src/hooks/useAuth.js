import React, {
  useState, useContext, createContext, useEffect,
} from 'react';
import axios from 'axios';
import routes from '../routes.js';

const authContext = createContext();

const useAuthProvider = () => {
  const [user, setUser] = useState();
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const signIn = async (email, password) => {
    const result = {};
    const path = routes.signInPath();
    try {
      const data = { email, password };
      const response = await axios.post(path, data);
      setUser(JSON.parse(response.body));
      result.success = true;
      result.message = 'You is login!';
    } catch (error) {
      result.success = false;
      result.error = 'Something bad!';
    }
    return result;
  };

  const signUp = async (firstName, lastName, email, password) => {
    const result = {};
    const path = routes.signUpPath();
    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      await axios.post(path, data);
      result.success = true;
      result.message = 'Congratulation! User was created!';
    } catch (error) {
      result.success = false;
      result.error = 'Something bad!';
    }
    return result;
  };

  const refresh = async () => {
    setIsFetching(true);
    const path = routes.whoAmIPath();
    try {
      const response = await axios.get(path, { withCredentials: true });
      setUser(response.data);
      setIsAuthenticate(true);
    } catch (error) {
      console.log(error.message);
    }
    setIsFetching(false);
  };

  return {
    user,
    isAuthenticate,
    isFetching,
    refresh,
    signIn,
    signUp,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  useEffect(() => {
    auth.refresh();
  }, [auth.isAuthenticate]);

  // TODO: add loader
  return auth.isFetching ? null : (
    <authContext.Provider value={auth}>{children}</authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
