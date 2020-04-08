import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/selectors/rootSelectors';

import Balance from '../../components/Balance';

const Home = () => {
  const balance = useSelector(selectBalance);
  return (
    <div><Balance total={balance} /></div>
  );
};

export default Home;
