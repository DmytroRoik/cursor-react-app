import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors/rootSelectors';

import NewCategoryForm from './Forms';
import Balance from '../../components/Balance';

import './NewCategories.scss';

export default () => {
  const balance = useSelector(selectBalance);
  
  return (
    <div className="wrapper">
      <div className="main__conrainer">
        <div className="main__heading">New category</div>
        <NewCategoryForm />
        <div className="balance"><Balance total={balance} /></div>
      </div>
    </div>
  );
};
