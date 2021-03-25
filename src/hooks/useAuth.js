import React, { useState, useContext, createContext } from 'react';

const authContext = createContext();

const useAuthProvider = () => {
  const [user, setUser] = useState();

  return {
    user,
    setUser,
  };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
