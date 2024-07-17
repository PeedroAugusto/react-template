import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.82:5000/api', 
  withCredentials: true, // Permitir cookies
});
export const login = async (email, password) => {
  try {
    const response = await api.post('/Login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
