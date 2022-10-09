import axios from 'axios';

const baseURL = 'https://api.github.com/';
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const instance = axios.create({
  baseURL,
  auth: {
    username: clientId,
    password: clientSecret,
  },
});

export default instance;
