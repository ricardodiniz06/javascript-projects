import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
