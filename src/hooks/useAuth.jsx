import { useState, useEffect } from 'react';
import { login as apiLogin } from '../service/auth/authService';
import User from '../types/User';

/**
 * Custom hook for handling user authentication.
 * @returns {Object} An object containing user information, loading state, error state, login function, and logout function.
 */
const useAuth = () => {
  // State variables
  const [user, setUser] = useState(null); // Current authenticated user
  const [loading, setLoading] = useState(false); // Loading state for authentication requests
  const [error, setError] = useState(false); // Error state for authentication requests

  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Retrieve user data from local storage
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser); // Parse user data
      setUser(new User(parsedUser.email, parsedUser.password)); // Set user state with parsed user data
    }
    setLoading(false); // Set loading state to false
  }, []); // Run effect hook on component mount

  /**
   * Function to perform user login.
   * @param {User} user - User object containing email and password.
   * @returns {Promise<void>} - Promise that resolves when login is successful.
   * @throws {Error} - Throws an error if login fails.
   */
  const login = async (user) => {
    setLoading(true); // Set loading state to true
    try {
      const userData = await apiLogin(user); // Perform login request
      localStorage.setItem('token', JSON.stringify(userData.token)); // Store authentication token in local storage
      setUser(user); // Set user state with provided user object
    } catch (error) {
      setError(true); // Set error state to true
      throw error; // Throw error if login fails
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  /**
   * Function to perform user logout.
   * @returns {void}
   */
  const logout = () => {
    localStorage.removeItem('token'); // Remove authentication token from local storage
    setUser(null); // Set user state to null
  };

  // Return state variables and authentication functions
  return { user, loading, error, login, logout };
}

export default useAuth;
