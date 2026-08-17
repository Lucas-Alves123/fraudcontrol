import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Update this based on the environment later
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for JWT (if implemented in frontend auth)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
