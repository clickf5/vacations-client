import React, {
  useState, useContext, createContext, useEffect,
} from 'react';
import axios from 'axios';
import routes from '../routes.js';

const authContext = createContext();

const useAuthProvider = () => {
  const [user, setUser] = useState();
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const signIn = async (email, password) => {
    const path = routes.signInPath();
    try {
      const data = { email, password };
      const response = await axios.post(path, data, { withCredentials: true });
      setUser(JSON.parse(response.body));
    } catch (error) {
      console.log(error.message);
    }
  };

  const refresh = async () => {
    const path = routes.whoAmIPath();
    try {
      const response = await axios.get(path, { withCredentials: true });
      setUser(response.data);
      setIsAuthenticate(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    user,
    isAuthenticate,
    refresh,
    signIn,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  useEffect(() => {
    auth.refresh();
  }, [auth.isAuthenticate]);

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
