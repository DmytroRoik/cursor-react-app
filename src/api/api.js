import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const api = {
  getStats: date => BASE_CONNECTION.get(`/stats?from=${date}`),
  getCategories: () => BASE_CONNECTION.get('categories'),
  removeCategory: id => BASE_CONNECTION.delete(`categories?id=${id}`),
  getCharges: (type = 'charge') => BASE_CONNECTION.get(`charges?type=${type}`),
  removeCharges: id => BASE_CONNECTION.delete(`charges?id=${id}`),
};

export default api;
