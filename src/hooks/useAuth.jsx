// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { login as apiLogin } from '../service/api';
import User from '../types/User';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(new User(parsedUser.email, parsedUser.password));
    }
    setLoading(false);
  }, []);

  const login = async (user) => {
    setLoading(true);
    try {
      const userData = await apiLogin(user.email, user.password);
      localStorage.setItem('token', JSON.stringify(userData.token));
    } catch (error) {
      setError(true)
      throw error;
    } finally{
      setUser(user)
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, loading, error, login, logout };
};

export default useAuth;
