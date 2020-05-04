import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const api = {
  getStats: date => BASE_CONNECTION.get(`/stats?from=${date}`),
  getChargesFrom: (date, type) => BASE_CONNECTION
    .get(`/charges?type=${type}&from=${date}`),
  getCategories: () => BASE_CONNECTION.get('categories'),
  removeCategory: id => BASE_CONNECTION.delete(`categories?id=${id}`),
  postNewCharge: (
    newTotal,
    newDescription, dateValue, category, type,
  ) => BASE_CONNECTION.post(
    `charges?type=${type}`,
    {
      categoryId: category,
      description: newDescription,
      date: dateValue,
      money: newTotal,
      type,
    },
  ),
  getUserData: () => BASE_CONNECTION.get('users/current'),
  getIcons: () => BASE_CONNECTION.get('/icons'),
  getCharges: (type = 'charge') => BASE_CONNECTION.get(`charges?type=${type}`),
  removeCharges: id => BASE_CONNECTION.delete(`charges?id=${id}`),
  putProfile: (
    name,
    email,
  ) => BASE_CONNECTION.put('/users', {
    name,
    email,
  }),
  postCategory: (name, description, iconId) =>
    BASE_CONNECTION.post('/categories', {
      name,
      description,
      iconId,
    }),
  editCharges: data => BASE_CONNECTION.put('charges', data),
  editCategory: (id, data) => BASE_CONNECTION.put(`categories?id=${id}`, data),
};


export default api;
