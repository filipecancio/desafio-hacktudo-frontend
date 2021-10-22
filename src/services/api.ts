import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackaton-olx-api.herokuapp.com/',
});

export { api };
