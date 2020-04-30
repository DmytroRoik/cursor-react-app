import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const api = {
  getStats: date => BASE_CONNECTION.get(`/stats?from=${date}`),
  getCategories: () => BASE_CONNECTION.get('categories'),
  removeCategory: id => BASE_CONNECTION.delete(`categories?id=${id}`),
  getUserData: () => BASE_CONNECTION.get('/users/current'),
  getIcons: () => BASE_CONNECTION.get('/icons'),
  getCharges: (type = 'charge') => BASE_CONNECTION.get(`charges?type=${type}`),
  removeCharges: id => BASE_CONNECTION.delete(`charges?id=${id}`),
  putProfile: () => BASE_CONNECTION.put('/users'),
  getAvatars: () => BASE_CONNECTION.get('/avatars'),
};

export default api;
