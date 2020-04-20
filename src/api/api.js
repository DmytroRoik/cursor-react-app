import * as axios from 'axios';

const BASE_URL =
  'http://ec2-35-181-53-65.eu-west-3.compute.amazonaws.com:3000/';
const BASE_CONNECTION = axios.create({
  baseURL: BASE_URL,
});

const api = {
  getCategories: () => BASE_CONNECTION.get('categories'),
  removeCategory: id => BASE_CONNECTION.delete(`categories?id=${id}`),
  getCategoriesCharges: () => BASE_CONNECTION.get('charges'),
  getCategoriesIncomes: () => BASE_CONNECTION.get('charges'),
  removeCategoryCharges: id => BASE_CONNECTION.delete(`charges?id=${id}`),
  removeCategoryIncomes: id => BASE_CONNECTION.delete(`charges?id=${id}`),
};

export default api;
