import React from 'react';

import Home from './pages/Home/';
import Charts from './pages/Charts';
import Categories from './pages/Categories';
import NewCategories from './pages/New-сategories';
import NewCharge from './pages/New-charges';

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
  {
    path: '/new-categories',
    component: <NewCategories />,
  },
  {
    path: '/new-charges',
    component: <NewCharge />,
  },
];

export default routes;
