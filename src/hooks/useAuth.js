import React, { useState, useContext, createContext } from 'react';

const authContext = createContext();

const useAuthProvider = () => {
  const [user, setUser] = useState();

  const signin = () => {

  };

  const signout = () => {

  };

  const signup = () => {

  };

  return {
    user,
    signin,
    signout,
    signup,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
