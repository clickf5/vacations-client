import React, {
  useState, useContext, createContext, useEffect,
} from 'react';
import axios from 'axios';
import routes from '../routes.js';

const authContext = createContext();

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const path = routes.signInPath();
    const payload = { email, password };

    try {
      const { data } = await axios.post(path, payload);
      setUser(data);
    } catch (error) {
      setUser(false);
      const { data } = error.response;
      return [true, data.message];
    }

    return [null, 'You is login!'];
  };

  const signUp = async (firstName, lastName, email, password) => {
    const path = routes.signUpPath();
    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      await axios.post(path, payload);
    } catch (error) {
      const { data } = error.response;
      return [true, data.message];
    }

    return [null, 'Congratulation! User was created!'];
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
