import * as axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const api = {
  getStats: date => BASE_CONNECTION.get(`/stats?from=${date}`),
  getCategories: () => BASE_CONNECTION.get('categories'),
  removeCategory: id => BASE_CONNECTION.delete(`categories?id=${id}`),
  postNewCharge: (newTotal, newDescription) => {
    return BASE_CONNECTION.post(
      'charges?type=charge',
      {
        categoryId: 1,
        description: newDescription,
        date: 1587157200000,
        money: Number(newTotal),
        type: 'charge',
      },
    );
  },
  postNewIncome: (newTotal, newDescription) => {
    return BASE_CONNECTION.post(
      'charges?type=income',
      {
        categoryId: 1,
        description: newDescription,
        date: 1587157200000,
        money: Number(newTotal),
        type: 'income',
      },
    );
  },


};

export default api;
