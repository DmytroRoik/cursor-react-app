import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors/rootSelectors';

import { getTotalBalanceThunk } from '../../redux/actions/root.actions';
import Balance from '../../components/Balance';
import BtnAddMore from '../../components/BtnAddMore';
import TableCategories from '../../components/TableCategories';

const Categories = () => {
  const balance = useSelector(selectBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalBalanceThunk());
  }, [balance]);

  return (
    <div>
      <Balance total={balance} />
      <Link to="/new-categories" href="/new-сategory">
        <BtnAddMore />
      </Link>
      <TableCategories />
    </div>
  );
};

export default Categories;
