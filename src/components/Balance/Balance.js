import React from 'react';
import { useSelector } from 'react-redux';

import { selectBalance } from '../../redux/selectors/rootSelectors';

import './Balance.scss';

const Balance = () => {
  const balance = useSelector(selectBalance);
  return (
    <div className="balance__box">
      <div className="emptyDiv" />
      <div className="balance__text">Balance
        <span className="balance__sum"> ${balance}</span>
      </div>
    </div>

  );
};

export default Balance;
