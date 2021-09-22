import axios from 'axios';

const api = axios.create({
  baseURL: 'https://684d-187-18-206-216.ngrok.io',
});

export default api;