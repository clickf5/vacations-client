import React, {
  useState, useContext, createContext, useEffect,
} from 'react';
import axios from 'axios';
import routes from '../routes.js';

const authContext = createContext();

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const result = {};
    const path = routes.signInPath();
    try {
      const data = { email, password };
      const response = await axios.post(path, data);
      setUser(response.data);
      result.success = true;
      result.message = 'You is login!';
    } catch (error) {
      setUser(false);
      result.success = false;
      result.error = error;
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

  useEffect(() => {
    const refresh = async () => {
      try {
        const path = routes.whoAmIPath();
        const response = await axios.get(path, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        setUser(false);
      }
    };
    refresh();
  }, []);

  return {
    user,
    signIn,
    signUp,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
