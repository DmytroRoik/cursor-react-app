import React from 'react';

import NewCategoryForm from './Forms';
import Balance from '../../components/Balance';

import './NewCategories.scss';

export default () => (
  <div className="wrapper">
    <div className="main__conrainer">
      <div className="main__heading">New category</div>
      <NewCategoryForm />
      <div className="balance"><Balance /></div>
    </div>
  </div>
);

