import React from 'react';

import Home from './pages/Home/';
import Charts from './pages/Charts';
import Categories from './pages/Categories';

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true,
  },
  {
    path: '/charts',
    component: <Charts />,
  },
  {
    path: '/categories',
    component: <Categories />,
  },
];

export default routes;
