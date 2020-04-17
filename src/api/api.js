import * as axios from 'axios';

const BASE_URL =
  'http://ec2-35-181-53-65.eu-west-3.compute.amazonaws.com:3000/';
const BASE_CONNECTION = axios.create({
  baseURL: BASE_URL,
});

const api = {
  getStats(date) {
    return BASE_CONNECTION.get(`/stats?from=${date}`)
      .then(res => res.data);
  },
};

export default api;
